import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        inc(state){
            state.value++
        },
        dec(state){
            state.value--
        },
        incByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const {inc, dec, incByAmount} = counterSlice.actions
export default counterSlice.reducer