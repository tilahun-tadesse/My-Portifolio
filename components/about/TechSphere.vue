<!-- TechSphereWithIcons.vue -->
<script setup>
  import { OrbitControls } from "@tresjs/cientos";
  import { useRenderLoop } from "@tresjs/core";
  import { ref, onMounted, onUnmounted } from "vue";

  // Define the developer tech stack with iconify icons
  const techStack = [
    { name: "Vue", color: "#42b883", icon: "logos:vue" },
    { name: "Nuxt", color: "#00DC82", icon: "logos:nuxt-icon" },
    { name: "Docker", color: "#2496ED", icon: "logos:docker-icon" },
    { name: "Node.js", color: "#339933", icon: "logos:nodejs-icon" },
    { name: "TypeScript", color: "#3178C6", icon: "logos:typescript-icon" },
    { name: "Tailwind", color: "#06B6D4", icon: "logos:tailwindcss-icon" },
    { name: "MongoDB", color: "#47A248", icon: "logos:mongodb-icon" },
    { name: "Git", color: "#F05032", icon: "logos:git-icon" },
    { name: "JavaScript", color: "#F7DF1E", icon: "logos:javascript" },
    { name: "HTML5", color: "#E34F26", icon: "logos:html-5" },
    { name: "CSS3", color: "#1572B6", icon: "logos:css-3" },
    { name: "Vite", color: "#646CFF", icon: "logos:vitejs" },
  ];

  // Calculate positions on a sphere
  const radius = 5;
  const positions = techStack.map((tech, i) => {
    const phi = Math.acos(-1 + (2 * i) / techStack.length);
    const theta = Math.sqrt(techStack.length * Math.PI) * phi;

    return {
      ...tech,
      position: {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      },
    };
  });

  // Animation state
  const autoRotate = ref(true);
  const sphereRef = ref(null);
  const sphereRotation = ref({ x: 0, y: 0 });

  // Mouse tracking
  const mousePosition = ref({ x: 0, y: 0 });
  const previousMousePosition = ref({ x: 0, y: 0 });
  const mouseDelta = ref({ x: 0, y: 0 });
  const mouseInfluence = ref(0.0005);

  // Track mouse movement
  const handleMouseMove = (event) => {
    previousMousePosition.value = { ...mousePosition.value };
    mousePosition.value = { x: event.clientX, y: event.clientY };
    mouseDelta.value = {
      x: mousePosition.value.x - previousMousePosition.value.x,
      y: mousePosition.value.y - previousMousePosition.value.y,
    };
  };

  // Auto rotation speed
  const rotationSpeed = ref(0.001);

  // Client-side flag to prevent SSR issues
  const isClient = ref(false);

  // Add and remove event listener
  onMounted(() => {
    isClient.value = true;

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);

      // Set initial mouse position to prevent jumps
      const { innerWidth, innerHeight } = window;
      mousePosition.value = { x: innerWidth / 2, y: innerHeight / 2 };
      previousMousePosition.value = { ...mousePosition.value };
    }
  });

  onUnmounted(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  });

  // Add the render loop for animations
  const { onLoop } = useRenderLoop();

  onLoop(({ delta }) => {
    if (!sphereRef.value) return;

    // Auto rotation
    if (autoRotate.value) {
      sphereRotation.value.y += rotationSpeed.value * delta;
    }

    // Mouse interaction
    if (mouseDelta.value.x !== 0 || mouseDelta.value.y !== 0) {
      sphereRotation.value.x += mouseDelta.value.y * mouseInfluence.value;
      sphereRotation.value.y += mouseDelta.value.x * mouseInfluence.value;

      // Reset delta after applying
      mouseDelta.value = { x: 0, y: 0 };
    }

    // Apply rotation
    sphereRef.value.rotation.x = sphereRotation.value.x;
    sphereRef.value.rotation.y = sphereRotation.value.y;
  });

  // Status flag for 2D/3D toggle
  const isCanvasVisible = ref(true);
</script>

<template>
  <div class="tech-sphere-container">
    <ClientOnly>
      <!-- 3D Tech Sphere -->
      <TresCanvas
        v-if="isClient && isCanvasVisible"
        clear-color="#050505"
        :alpha="true"
      >
        <!-- Lights -->
        <TresAmbientLight :intensity="0.8" />
        <TresDirectionalLight
          :position="[10, 10, 10]"
          :intensity="1.5"
          cast-shadow
        />
        <TresPointLight
          :position="[0, 0, 0]"
          :intensity="1"
          :distance="10"
          color="#ffffff"
        />

        <!-- Sphere Container -->
        <TresGroup ref="sphereRef">
          <!-- Center Sphere -->

          <!-- Technology Nodes -->
          <TresGroup v-for="tech in positions" :key="tech.name">
            <!-- Tech Node Sphere -->
            <TresMesh
              :position="[tech.position.x, tech.position.y, tech.position.z]"
            >
              <TresSphereGeometry :args="[0.5, 16, 16]" />
              <TresMeshStandardMaterial
                :color="tech.color"
                :emissive="tech.color"
                :emissiveIntensity="0.5"
                :icon="tech.icon"
                :metalness="0.7"
                :roughness="0.2"
              />
            </TresMesh>

            <!-- Connecting lines to center -->
            <TresLine
              :points="[
                [0, 0, 0],
                [tech.position.x, tech.position.y, tech.position.z],
              ]"
              :color="tech.color"
              :lineWidth="1"
              :transparent="true"
              :opacity="0.3"
            />
          </TresGroup>

          <TresLineSegments>
            <TresEdgesGeometry>
              <TresSphereGeometry :args="[radius, 16, 12]" />
            </TresEdgesGeometry>
            <TresLineBasicMaterial
              color="#333333"
              :transparent="true"
              :opacity="0.5"
            />
          </TresLineSegments>
        </TresGroup>

        <!-- Camera -->
        <TresPerspectiveCamera :position="[0, 0, 15]" :fov="75" />

        <!-- Controls -->
        <OrbitControls
          :enableDamping="true"
          :dampingFactor="0.05"
          :enableZoom="true"
          :autoRotate="false"
        />
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<style scoped>
  .tech-sphere-container {
    width: 100%;
    height: 50vh;
  }
</style>
