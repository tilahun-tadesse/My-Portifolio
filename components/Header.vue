<script setup>
  const nav = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];
</script>
<template>
  <nav
    class="fixed inset-x-0 top-2.5 z-5000 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-4 lg:px-0"
  >
    <a class="size-8 p-1 drop-shadow-xl delay-200 md:size-9" href="/"></a>
    <nav
      aria-label="Main"
      data-orientation="horizontal"
      dir="ltr"
      data-slot="navigation-menu"
      data-viewport="true"
      class="group/navigation-menu max-w-max flex-1 items-center justify-center absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md md:flex"
    >
      <div class="flex w-full items-center justify-center">
        <ul
          data-orientation="horizontal"
          data-slot="navigation-menu-list"
          class="group flex-1 list-none items-center justify-center gap-1 relative hidden rounded-full border border-white/10 bg-white/5 px-1.5 py-1 md:flex"
          dir="ltr"
        >
          <li
            v-for="(item, index) in nav"
            :key="index"
            data-slot="navigation-menu-item"
            class="relative"
          >
            <a
              data-slot="navigation-menu-link"
              class="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&amp;_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&amp;_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
              href="/"
              data-radix-collection-item=""
              >{{ item.name }}</a
            >
          </li>
          <li data-slot="navigation-menu-link">
            <button
              data-slot="button"
              class="items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs has-[>svg]:px-3 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light whitespace-nowrap text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90"
            >
              Book a Call
              <div
                aria-hidden="true"
                class="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
              ></div>
            </button>
          </li>
        </ul>
      </div>
      <div
        class="absolute top-full left-0 isolate z-50 flex justify-center"
      ></div>
    </nav>
    <div class="flex items-center gap-2 delay-200">
      <button
        class="inline-flex text-white/70 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground dark:hover:bg-accent/50 size-9 group rounded-full hover:bg-white/5"
      >
        <Icon name="bi:menu-up"></Icon>
      </button>
      <div
        data-slot="dialog-header"
        class="flex flex-col gap-2 text-center sm:text-left sr-only"
      >
        <h2
          id="radix-«R2mvbH1»"
          data-slot="dialog-title"
          class="text-lg leading-none font-semibold"
        >
          Command Palette
        </h2>
        <p
          id="radix-«R2mvbH2»"
          data-slot="dialog-description"
          class="text-muted-foreground text-sm"
        >
          Search for a command to run...
        </p>
      </div>
    </div>
  </nav>
</template>
