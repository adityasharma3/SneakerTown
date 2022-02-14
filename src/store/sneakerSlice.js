import { createSlice } from "@reduxjs/toolkit";

const sneakerSlice = createSlice({
    name: 'sneakerSlice',
    initialState: {
        domain: ''
    },
    reducers: {
        find(state, paylaod) {
            state.domain = paylaod;
        }
    }
});

export const sneakerSliceActions = sneakerSlice.actions;
export default sneakerSlice;