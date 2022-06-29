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

            // introducing variable so that it does not complicate and mess with the state values.
            let addedTotal = 0;

            const newItem = payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    size: newItem.payload.size,
                    id: newItem.payload.id,
                    price: ((newItem.payload.retail_price_cents / 100) * 72),
                    quantity: 1,
                    name: newItem.payload.name,
                    image: newItem.payload.grid_picture_url,
                });
            } else {
                existingItem.quantity++;
            }

            state.items.forEach((item) => {
                const newItemPrice = item.price;
                addedTotal += newItemPrice;
            });

            state.totalPrice = addedTotal;

        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;

            state.totalPrice -= existingItem.price;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        }

    }

});

export const cartSliceActions = cartSlice.actions;

// export const payload;
// console.log(cartSliceActions);

export default cartSlice;