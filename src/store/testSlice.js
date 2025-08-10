import {
    createSlice
} from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: {
        value1: "",
        value2: 0,
    },
    reducers: ({
        getName: (state) => {
            state.value1 = state
        },
        increment: (state) => {
            state.value2 += 1
        },
        decrement: (state) => {
            state.value2 -= 1
        },
    })
});

export const {
    getName,
    increment,
    decrement
} = testSlice.actions;
export default testSlice.reducer;