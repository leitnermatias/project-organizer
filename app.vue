<template>
  <div>
    <MainHeader></MainHeader>
    <div
    class="
    bg-green-200
    flex
    gap-6
    p-2
    border-t
    border-b
    border-green-600
    ">
      <span 
      class="
      p-2
      text-gray-500
      font-semibold
      "
      v-if="config.projects.filter(p => p.active).length === 0"
      >No projects available</span>
      <NuxtLink 
      v-for="project in config.projects.filter(p => p.active)" :to="`/projects/${project.name}`"
      class="
      border
      border-white
      text-white
      bg-green-700
      rounded
      p-2
      hover:animate-pulse
      hover:border-green-100
      "
      >{{project.name}}</NuxtLink>
      
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { Project } from '~~/types/config';

const config = useStorage<{
    projects: Project[]
}>('config', {
    projects: []
});
</script>
