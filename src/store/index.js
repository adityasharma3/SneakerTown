import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import sneakerSlice from './sneakerSlice';
import uislice from './uiSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        ui: uislice.reducer,
        sneakerSlice: sneakerSlice.reducer,
        cart: cartSlice.reducer,
        user: userSlice.reducer,
    }
});