export type Project = {
    name: string,
    tasks: Task[],
    active: boolean,
}

export const TaskState = {
    NOT_STARTED: "0",
    STARTED: "1",
    FINISHED: "2",
}

export type Task = {
    title: string,
    state: string,
    text: string
}