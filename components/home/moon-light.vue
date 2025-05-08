<script setup lang="ts"></script>
<template>
  <div
    class="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-24 h-96 w-full [mask-image:radial-gradient(50%_50%,white,transparent)]"
  >
    <div
      class="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#5506ba,transparent_85%)]"
      style="opacity: 0.5"
    ></div>
    <div class="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%]">
      <div class="absolute inset-0 rounded-[100%] bg-black"></div>
      <div
        class="absolute inset-0 overflow-hidden rounded-[100%]"
        style="
          background: transparent;
          box-shadow: inset 0 2px 20px #fff, 0 -10px 50px 1px #ffffff6e;
        "
      >
        <div
          class="absolute top-0 right-[25%] left-[25%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"
          style="
            box-shadow: rgba(255, 255, 255, 0.807) 0px 0px 15.3606px 3.14424px;
          "
        ></div>
      </div>
    </div>
    <div
      class="absolute bg-black top-1/2 -left-1/2 z-15 aspect-[1/0.7] w-[200%] rounded-[100%]"
      style="
        box-shadow: rgba(255, 255, 255, 0.422) 0px -5px 41.4424px 1px,
          rgba(255, 255, 255, 0.414) 0px 1px 10.3606px inset;
      "
    ></div>
  </div>
</template>
