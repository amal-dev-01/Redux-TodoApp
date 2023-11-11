import { createSlice } from "@reduxjs/toolkit"



const formSlice = createSlice({
    name: "task",
    initialState: {
        task: []
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date().getTime(),
                name: action.payload.task
            };
            state.task.push(newTask);
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((item) => item.id !== action.payload.id);
        },
        editTask: (state, action) => {
            const { id, newName } = action.payload;
            const existingTask = state.task.find((item) => item.id == id);

            if (existingTask) {
                const updatedTask = { ...existingTask, name: newName };
                state.task = state.task.map((item) => (item.id == id ? updatedTask : item));
            }
        }
    }
});

export default formSlice.reducer;
export const { addTask, deleteTask,editTask } = formSlice.actions;
