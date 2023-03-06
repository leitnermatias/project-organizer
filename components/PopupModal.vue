<template>
    <div
    class="
    z-50
    absolute
    w-screen
    h-screen
    top-0
    flex
    justify-center
    items-center
    bg-green-800
    bg-opacity-60
    "
    >
        <div
        class="
        bg-white
        w-96
        border-2
        border-green-500
        rounded-md
        p-2
        ">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>