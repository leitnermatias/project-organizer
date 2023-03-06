<template>
    <div
    class="
    flex
    items-center
    gap-2
    m-2
    ">
        <label><slot></slot></label>
        <input 
        class="
        border
        "
        type="checkbox"
        :value="modelValue"
        :checked="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', ($event!.target! as HTMLInputElement).checked)"
        
        >
    </div>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: boolean,
    disabled?: boolean,
}>()

defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>