import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState: {
        addToCart: [],
        totalPrice: 0
    },
    reducers: {
        incrementCart: (state, action) => {
            const existingItem = state.addToCart.find(item => item.bookId === action.payload.bookId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.addToCart.push({ ...action.payload, quantity: 1 });
            }
            state.totalPrice = state.addToCart.reduce((acc, item) => acc + (item.bookPrice * item.quantity), 0);
        },
        decrementCart: (state, action) => {
            const existingItem = state.addToCart.find(item => item.bookId === action.payload.bookId);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.addToCart = state.addToCart.filter(item => item.bookId !== action.payload.bookId);
            }
            state.totalPrice = state.addToCart.reduce((acc, item) => acc + (item.bookPrice * item.quantity), 0);
        },
        removeFromCart: (state, action) => {
            state.addToCart = state.addToCart.filter(item => item.bookId !== action.payload);
            state.totalPrice = state.addToCart.reduce((acc, item) => acc + (item.bookPrice * item.quantity), 0);
        },
        emptyCart: (state) => {
            state.addToCart = [];
            state.totalPrice = 0;
        }
    }
});

export const { incrementCart, decrementCart, removeFromCart, emptyCart } = storeSlice.actions;
export default storeSlice.reducer;
