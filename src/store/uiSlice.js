import { createSlice } from '@reduxjs/toolkit';

const uislice = createSlice({
    name: 'ui',
    initialState: {
        menuIsVisible: false
    },

    reducers: {
        toggle(state) {
            state.menuIsVisible = !state.menuIsVisible;
        }
    }
});

export const uiSliceActions = uislice.actions;
export default uislice; 