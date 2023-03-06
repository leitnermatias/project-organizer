<template>
    <div
    class="
    p-2
    flex
    flex-col
    gap-2
    md:flex-row
    "
    >
        <Panel
        class="
        flex
        flex-col
        justify-center
        p-2
        w-full
        ">
        <div
        class="
        mb-2
        ">
            <Button @click="toggleModal(ModalType.ADD, true)">Add project</Button>
            <Teleport to="body">
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
                        >Add a project</MediumTitle>

                        <Field v-model="newProject.name">Name</Field>
                        <Checkbox v-model="newProject.active" type="checkbox">Active</Checkbox>
                        
                        <div
                        class="
                        w-full
                        flex
                        justify-evenly
                        mt-6
                        ">
                            <Button @click="toggleModal(ModalType.ADD, false)">Cancel</Button>
                            <Button @click="addProject">Save</Button>
                        </div>
                    </div>
                </PopupModal>
            </Teleport>
        </div>
            <ProjectInfo @delete="deleteProject" :projects="configState.projects"/>
        </Panel>
    </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { Project } from '~~/types/config';

const configState = useStorage<{
    projects: Project[]
}>('config', {
    projects: [],
})

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

// Projects logic

const newProject = ref<Project>({
    name: "",
    tasks: [],
    active: true,
})

function addProject() {
    configState.value.projects.push(newProject.value)
    toggleModal(ModalType.ADD, false)
    newProject.value = {
        name: "",
        tasks: [],
        active: true,
    }
}

function deleteProject(project: Project) {
    configState.value.projects = configState.value.projects.filter(p => p.name !== project.name)
}

  
</script>

<style scoped>

</style>