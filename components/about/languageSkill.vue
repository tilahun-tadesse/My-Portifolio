<script setup>
  const skill = [
    {
      name: "C++",
      level: 80,
    },
    {
      name: "C",
      level: 70,
    },
    {
      name: "JavaScript",
      level: 95,
    },
    {
      name: "Python",
      level: 84,
    },
    {
      name: "Java",
      level: 58,
    },
    {
      name: "TypeScript",
      level: 91,
    },
    {
      name: "PHP",
      level: 50,
    },
    {
      name: "Ruby",
      level: 23,
    },
    {
      name: "Dockerfile",
      level: 75,
    },
    {
      name: "Shell",
      level: 35,
    },
    {
      name: "Rust",
      level: 10,
    },
    {
      name: "Batchfile",
      level: 29,
    },
    {
      name: "HTML",
      level: 85,
    },
    {
      name: "CSS",
      level: 86,
    },
    {
      name: "Go",
      level: 21,
    },
  ];
</script>
<template>
  <div class="p-4 glass bg-transparent shadow-lg w-1/2">
    <div class="mt-8">
      <h3 class="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Languages
      </h3>
      <div class="space-y-2 p-2">
        <div v-for="item in skill" class="flex flex-row flex-nowrap">
          <div class="w-2/12 flex items-start justify-start text-xs text-white">
            <span>{{ item.name }}</span>
          </div>
          <div
            class="w-10/12 bg-gray-300 dark:bg-yellow-50/5 self-center rounded-full h-1"
          >
            <div
              class="bg-linear-to-r from-transparent from-5% to-yellow-50 h-1 blur-[0.5px] rounded-full relative"
              :style="{
                width: item.level + '%',
                overflow: 'visible',
                transformOrigin: '0% 50% 0px',
              }"
            >
              <div
                class="absolute rounded-full right-0 -bottom-0 w-1 h-1 bg-yellow-200 shadow-[0_0_8px_4px_rgba(255,250,175,0.59)]"
              ></div>
              <div
                class="w-2 h-1 absolute right-0 bottom-0 shadow-[0_0_4px_2px_rgba(255,250,175,0.3)]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
