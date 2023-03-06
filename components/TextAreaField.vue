<template>
    <div
    class="
    flex
    items-center
    gap-2
    m-2
    ">
        <label><slot></slot></label>
        <textarea
        class="
        border-2
        border-green-300
        focus:border-green-200
        focus:outline-none
        p-1
        "
        :value="modelValue"
        @input="$emit('update:modelValue', ($event!.target! as HTMLTextAreaElement).value)"
        ></textarea>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: string,
}>()

defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>