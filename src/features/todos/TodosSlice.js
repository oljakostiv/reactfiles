import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todosValue: [],
        todosLoading: false
    },
    reducers: {
        addTodos (state, action) {
            state.todosValue = action.payload
        },
        setLoadingTrue (state) {
            state.todosLoading = true
        },
        setLoadingFalse (state) {
            state.todosLoading = false
        },
        pushTodo (state, action) {
            state.todosValue.push(action.payload)
        },

    }
})

export const {addTodos, setLoadingTrue, setLoadingFalse, pushTodo} = todosSlice.actions
export default todosSlice.reducer