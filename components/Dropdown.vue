<template>
    <label>{{ label }}</label>
    <select
    @change="$emit('update:modelValue', ($event!.target! as HTMLSelectElement).value)"
    >
        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script setup lang="ts">
defineProps<{
    label: string,
    options: {value: any, label: string}[],
    modelValue: any
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>