<template>
    <table 
    class="
    border-2 
    border-green-300
    text-center
    ">
        <thead>
            <th class="border border-green-600">Name</th>
            <th class="border border-green-600">Total tasks</th>
            <th class="border border-green-600">Active</th>
            <th class="border border-green-600">Delete</th>
        </thead>
        <tbody>
            <tr v-for="project in projects">
                <td class="border border-green-900">
                    <input 
                    class="border-2
                    border-green-100
                    focus:border-green-200
                    focus:outline-none" 
                    type="text" 
                    v-model="project.name">
                </td>
                <td class="border border-green-900">{{ project.tasks.length }}</td>
                <td class="border border-green-900"><Checkbox class="flex justify-center m-0 gap-0" v-model="project.active"></Checkbox></td>
                <td class="border border-green-900"><Button class="py-0 px-2 bg-red-500 border-red-100 hover:bg-red-400" @click="$emit('delete', project)">X</Button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import {Project} from "@/types/config"
defineProps<{projects: Project[]}>()
</script>

<style scoped>

</style>