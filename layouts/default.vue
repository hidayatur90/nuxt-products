<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink :to="{name : 'index'}" class="font-bold">HD</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink :to="{name : 'index'}">Home</NuxtLink></li>
            <li><NuxtLink :to="{name : 'about'}">About</NuxtLink></li>
            <li><NuxtLink :to="{name : 'products'}" class="btn">Products</NuxtLink></li>
          </ul>
        </nav>
      </header>

      <div class="container mx-auto p-4">
        <slot />
      </div>
      
    </div>
</template>

<style>
  .router-link-exact-active {
    color: #12b488;
  }
</style>