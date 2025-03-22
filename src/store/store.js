import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './sampleSlice';

const store = configureStore({
  reducer: {
    sample: sampleReducer
  }
});

export default store;