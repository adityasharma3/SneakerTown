import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQunatity: 0,
        totalPrice: 0
    },

    reducers: {
        addItemToCart(state, action) {

        }
    }

});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;