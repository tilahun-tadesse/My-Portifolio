<script setup lang="ts">
  const typed = useTypedJs();
  onMounted(() => {
    typed("#element", {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  });
</script>
<template>
  <section
    class="flex relative justify-between items-center w-full px-32 my-auto pt-20 py-10"
  >
    <div class="flex flex-col pt-32 gap-4">
      <h1 class="text-4xl text-white font-bold font-sans">Hello, It's me</h1>
      <h1 class="text-5xl text-amber-600 font-bold">Tilahun Tadesse</h1>
      <p class="text-2xl text-white">
        I am a <span class="text-amber-600" id="element"></span>
      </p>
      <p class="text-white max-w-[500px]">
        I specialize in building high-performance web applications with modern
        JavaScript technologies like React, Next.js, Node.js, and MongoDB.
      </p>
    </div>
    <div class="absolute hidden right-32 top-32 lg:block">
      <img
        src="/images/tita-left.png"
        alt="hero"
        class="w-[600px] h-[600px] object-cover"
      />
    </div>
  </section>
</template>
