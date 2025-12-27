import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return action.payload ? state + action.payload : state + 1;
    },
    decrement: (state, action) => {
      return action.payload ? state - action.payload : state - 1;
    },
  },
  selectors: {
    getDoubleCounter: (state) => {
      return state * 2;
    },
    getCounter: (state, value) => {
        return state * value
    } 
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { getDoubleCounter, getCounter } = counterSlice.selectors;