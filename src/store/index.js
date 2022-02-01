import { configureStore } from '@reduxjs/toolkit';
import uislice from './uiSlice';

export const store = configureStore({
    reducer: {
        ui: uislice.reducer,

    }
});