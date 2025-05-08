<!-- pages/index.vue -->

<script setup></script>
<template>
  <div class="w-full h-screen flex flex-col justify-start px-32 pt-10 bg-black">
    <div class="flex flex-col items-center justify-center w-full h-full">
      <h1 class="text-4xl text-white font-bold font-sans">What I Know</h1>
      <span class="text-gray-400 text-lg mt-4 font-sans w-[900px] text-center">
        I specialize in building modern, scalable, and user-friendly web
        applications. My expertise spans across frontend and backend
        development, with a strong focus on technologies like React, Node.js,
        and MongoDB. I am passionate about solving complex problems and
        delivering high-quality solutions.
      </span>
      <!-- <AboutTechSphere /> -->
    </div>
    <div class="flex items-center justify-center mt-10">
      <AboutTechSphare2 />
      <AboutLanguageSkill />
    </div>
  </div>
</template>
