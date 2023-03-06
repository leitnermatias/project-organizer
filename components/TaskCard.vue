<template>
    <div
    class="
    border
    border-green-200
    bg-green-600
    h-20
    text-center
    p-2
    rounded
    cursor-pointer
    shadow-sm
    hover:shadow-md
    hover:bg-green-500
    "
    @click="() => taskModal = true"
    >
        <MediumTitle class="text-white text-center p-2 break-words">{{ task.title }}</MediumTitle>
        
    </div>

    
</template>

<script setup lang="ts">
import {Task, TaskState } from '~~/types/config';

defineProps<{
    task: Task
}>()

const taskModal = ref(false);

</script>

<style scoped>

</style>