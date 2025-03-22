import { createSlice } from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      console.log(state.value)
      state.value += 1;
    },
    decrement: (state) => {
      console.log(state.value)
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = sampleSlice.actions;
export default sampleSlice.reducer;