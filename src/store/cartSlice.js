import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },

    reducers: {
        addItemToCart(state, payload) {
            const newItem = payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;

            console.log(newItem);

            if (!existingItem) {
                state.items.push({
                    size: newItem.payload.size,
                    id: newItem.payload.id,
                    price: newItem.payload.retail_price_cents,
                    quantity: 1,
                    totalPrice: newItem.payload.retail_price_cents,
                    name: newItem.payload.name,
                    image: newItem.payload.grid_picture_url,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.retail_price_cents;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }

});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;