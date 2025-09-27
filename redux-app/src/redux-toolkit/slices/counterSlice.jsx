import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: function (state, action) {
            return state + 1
        },
        decrement: (state, action) => {
            return state - 1
        },
        update: (state, action) => {
            return state + action.payload
        }
    },
})


export const countReducer = countSlice.reducer
export const { increment, decrement, update } = countSlice.actions