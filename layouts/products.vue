<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink :to="{name : 'products'}" class="font-bold">HD</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink :to="{name : 'index'}">Home</NuxtLink></li>
            <li><NuxtLink :to="{name : 'about'}">About</NuxtLink></li>
          </ul>
        </nav>
      </header>

      <div class="container mx-auto p-4">
        <slot />
      </div>
      
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>