<script setup>
  const projects = [
    {
      img: "/images/project/comfortwheels.png",
      title: "ComfortWheels ",
      description:
        "We are Comfort Wheels, a non-emergency medical transportation service provider based in Seattle, Washington. We offer multi-wheelchair-accessible rides across counties with a focus on customer care.",
      features: [
        " Built with Next.js, React, and TypeScript for scalability.",
        "Styled using Tailwind CSS with animations by Framer Motion.",
        "Used Zustand for state management and Zod for validation",
        "Integrated MongoDB and RESTful APIs with Node.js and Express.",
        "Designed a user-friendly interface for seamless interactions.",
      ],
      stack: [
        {
          name: "Nuxt.js",
          icon: "logos:nuxt-icon",
        },
        {
          name: "Vue.js",
          icon: "logos:vue",
        },
        {
          name: "JavaScript",
          icon: "vscode-icons:file-type-js",
        },
        {
          name: "Tailwind CSS",
          icon: "devicon:tailwindcss",
        },
        {
          name: "Go",
          icon: "logos:go",
        },
      ],
    },
    {
      img: "/images/project/parcelpop.png",
      title: "ParcelPop",
      description:
        "ParcelPop is a web application that allows users to track their parcels in real-time.",
      features: [
        "ParcelPop is a secure and efficient parcel delivery platform that integrates advanced authentication and role-based access control.",
        "It allows users to send, track, and receive packages seamlessly, with a dedicated dashboard for managing orders.",
        "ParcelPop is built with React.js, Node.js, and MongoDB, ensuring a robust and scalable solution for parcel management.",
        "The application features a user-friendly interface, real-time tracking, and secure authentication, making it a reliable choice for users.",
      ],
      stack: [
        {
          name: "React.js",
          icon: "logos:react",
        },
        {
          name: "Node.js",
          icon: "logos:nodejs-icon",
        },
        {
          name: "MongoDB",
          icon: "logos:mongodb",
        },
        {
          name: "Express.js",
          icon: "logos:express",
        },
        {
          name: "Mongoose",
          icon: "logos:mongoose",
        },
        {
          name: "JavaScript",
          icon: "vscode-icons:file-type-js",
        },
        {
          name: "Tailwind CSS",
          icon: "devicon:tailwindcss",
        },
      ],
    },
  ];
</script>
<template>
  <section class="w-full bg-black">
    <div
      v-for="project in projects"
      class="sticky w-full flex flex-row top-20 h-screen"
      style="transform: none"
    >
      <div class="flex w-full flex-row" style="opacity: 1; transform: none">
        <div class="flex flex-col lg:mx-10 lg:w-full">
          <a
            draggable="false"
            class="relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"
            href="/projects/next-venture"
            ><div
              class="absolute inset-x-0 top-0 h-px"
              style="
                background: linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0) 5%,
                  rgba(255, 255, 255, 0.8) 35%,
                  rgb(255, 255, 255) 50%,
                  rgba(255, 255, 255, 0.8) 65%,
                  rgba(0, 0, 0, 0) 95%
                );
              "
            ></div>
            <div
              class="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl bg-linear-to-b from-black/40 to-transparent transition-all duration-300"
            >
              <div
                style="
                  background: linear-gradient(
                    188.62deg,
                    rgb(107, 13, 51) 49.9%,
                    rgb(219, 39, 119) 81.7%,
                    rgb(244, 114, 182) 93.88%,
                    rgb(249, 215, 147) 113.5%
                  );
                "
                class="absolute inset-0 -z-1"
              ></div>
              <div
                class="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                style="
                  background: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0) 20%,
                    rgb(255, 255, 255) 50%,
                    rgba(0, 0, 0, 0) 80%
                  );
                "
              ></div>
              <div
                class="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-pink-300"
              >
                <h3 class="max-w-[90%] text-2xl">
                  A online space for entrepreneurs to pitch ideas, explore
                  others, and gain exposure with clean design.
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right size-6"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <img
                alt="Next Ventures"
                loading="lazy"
                width="1203"
                height="753"
                decoding="async"
                data-nimg="1"
                class="lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]"
                style="color: transparent"
                :src="project.img"
              /></div
          ></a>
        </div>
      </div>
      <div class="sticky top-40">
        <div class="flex">
          <div
            aria-hidden="true"
            class="my-4 mr-4 h-1 min-w-6 rounded-full bg-blue-700"
          ></div>
          <div class="flex flex-col items-start lg:h-[500px]">
            <div class="flex items-center gap-3">
              <h3 class="text-foreground text-2xl font-bold">Zenith Minds</h3>
            </div>
            <p class="text-muted-foreground my-2 text-base font-light">
              Developed ZenithMinds, an educational platform connecting students
              and instructors, fostering global collaboration and continuous
              learning.
            </p>
            <ul
              class="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base"
            >
              <li class="flex items-center text-sm">
                <Icon :name="project.icon"></Icon>
                Built with Next.js, React, and TypeScript for scalability.
              </li>
            </ul>
            <div class="mt-10 flex flex-wrap gap-3 text-sm">
              <div
                v-for="(item, index) in project.stack"
                class="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                style="opacity: 1; transform: none"
              >
                <Icon :name="item.icon"> {{ item.name }}</Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
