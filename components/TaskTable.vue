<template>

    <div
    class="
    grid
    grid-cols-3
    ">
        <div
        class="
        flex
        flex-col
        "
        >
            <MediumTitle class="mb-1 text-center border-2 border-green-200">Not Started</MediumTitle>
            <span 
            v-if="notStarted.length === 0"
            class="
            text-center
            text-gray-500
            "
            >Empty</span>
            <TaskCard v-for="task in notStarted" @click="toggleTask(task, true)" :task="task"></TaskCard>
        </div>

        <div
        class="
        flex
        flex-col
        ">
            <MediumTitle class="mb-1 text-center border-2 border-green-200">Started</MediumTitle>
            <span 
            v-if="started.length === 0"
            class="
            text-center
            text-gray-500
            "
            >Started</span>
            <TaskCard v-for="task in started" @click="toggleTask(task, true)" :task="task"></TaskCard>
        </div>

        <div
        class="
        flex
        flex-col
        ">
            <MediumTitle class="mb-1 text-center border-2 border-green-200">Finished</MediumTitle>
            <span 
            v-if="finished.length === 0"
            class="
            text-center
            text-gray-500
            "
            >Empty</span>
            <TaskCard v-for="task in finished" @click="toggleTask(task, true)" :task="task"></TaskCard>
        </div>
    </div>
    

    <Teleport to="body">
        <PopupModal v-if="taskModal && activeTask">
            <MediumTitle class="break-all border-b-2 p-2 font-extrabold border-green-600">{{ activeTask?.title }}</MediumTitle>
            
            <p
            class="
            my-2
            p-2
            border-b-2
            border-green-600
            ">{{ activeTask.text }}</p>

            <div
            class="
            flex
            gap-2
            items-center
            ">
                <label for="">State</label>
                <select class="p-2" v-model="activeTask.state">
                    <option :value="TaskState.NOT_STARTED">Not Started</option>
                    <option :value="TaskState.STARTED">Started</option>
                    <option :value="TaskState.FINISHED">Finished</option>
                </select>

                <Button @click="emits('delete', activeTask)">Delete</Button>
            </div>
    
            <div
            class="
            mt-6
            ">
                <Button @click="toggleTask(null, false)">Close</Button>
            </div>
        
        </PopupModal>
    </Teleport>
</template>

<script setup lang="ts">
import { Task, TaskState } from '~~/types/config';

const props = defineProps<{
    tasks: Task[]
}>()

const emits = defineEmits(['delete'])

const notStarted = computed(() => props.tasks.filter(t => t.state === TaskState.NOT_STARTED));
const started = computed(() => props.tasks.filter(t => t.state === TaskState.STARTED));
const finished = computed(() => props.tasks.filter(t => t.state === TaskState.FINISHED));

const activeTask = ref<Task | null>(null)
const taskModal = ref(false)

function toggleTask(task: Task | null, show: boolean) {
    activeTask.value = task;
    taskModal.value = show;
}
</script>

<style scoped>

</style>