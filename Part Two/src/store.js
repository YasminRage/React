// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], total: 0 },
    reducers: {
        addProduct(state, action) {
            state.items.push(action.payload)        // mutation is safe here
            state.total += Number(action.payload.price)
        },
    },
})

export const { addProduct } = cartSlice.actions
export const store = configureStore({ reducer: { cart: cartSlice.reducer } })