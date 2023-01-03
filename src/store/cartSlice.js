const { createSlice } = require("@reduxjs/toolkit");

    const initalState = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}];

const cartSlice = createSlice({
    name: "cart",
    initalState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            state = state.filter(item => item.id !== action.payload)
        },
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer