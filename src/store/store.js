import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './SampleSlice';

const store = configureStore({
  reducer: {
    sample: sampleReducer
  }
});

export default store;