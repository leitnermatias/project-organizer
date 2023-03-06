<template>
    <div>
        <div
        class="
        m-2
        "
        >
        <Button @click="toggleModal(ModalType.ADD, true)">Add Task</Button>
        
        </div>
        <TaskTable @delete="deleteTask" :tasks="tasks">
        </TaskTable>
    </div>
    <PopupModal v-if="modals.find(modal => modal.type === ModalType.ADD)?.toggled">
        <div
        class="
        flex
        flex-col
        p-2
        ">
            <MediumTitle
            class="
            border-b-2
            border-green-100
            self-center
            w-full
            "
            >Add task</MediumTitle>

            <Field v-model="newTask.title">Title</Field>
            <TextAreaField v-model="newTask.text">Text</TextAreaField>

            <div class="flex justify-evenly mt-6">
                <Button @click="toggleModal(ModalType.ADD, false)">Cancel</Button>
                <Button @click="saveTask">Save</Button>
            </div>
        </div>
    </PopupModal>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { Project, Task, TaskState } from '~~/types/config';
const config = useStorage<{
    projects: Project[]
}>('config', {
    projects: []
});

const route = useRoute()

// Modals logic

enum ModalType {
    ADD
}

const modals = ref<
{type: ModalType, toggled: boolean}[]
>([
    {type: ModalType.ADD, toggled: false}
])

function toggleModal(modalType: ModalType, toggle: boolean) {
    const modal = modals.value.find(modal => modal.type === modalType)
    if (modal) {
        modal.toggled = toggle;
    }
} 

const project = computed(() => config.value.projects.find(p => p.name === route.params.name))
const tasks = computed(() => project.value ? project.value.tasks : [])

// Tasks

const newTask = ref<Task>({
    title: "",
    state: TaskState.NOT_STARTED,
    text: ""
})

function saveTask() {
    if (project.value) {
        project.value.tasks.push(newTask.value)
    }
    toggleModal(ModalType.ADD, false)
    newTask.value = {
        title: "",
        state: TaskState.NOT_STARTED,
        text: "",
    }
}

function deleteTask(task: Task) {
    if (project.value) {
        project.value.tasks = tasks.value.filter(t => t.title !== task.title)
    }
}
</script>

<style scoped>

</style>