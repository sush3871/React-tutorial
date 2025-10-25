import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: nanoid(), title: "Learn Redux Toolkit" },
    ],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), 
                title: action.payload.title 
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, title} = action.payload;
            const exitingTodo = state.todos.find(todo => todo.id === id)
            if(exitingTodo){
                exitingTodo.title = title
            }

        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;