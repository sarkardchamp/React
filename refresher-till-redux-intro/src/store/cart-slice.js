import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantities: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantities = action.payload.totalQuantities;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.changed = true;
      state.totalQuantities += 1;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      state.totalQuantities -= 1;
      const id = action.payload;
      state.changed = true;
      const existingItem = state.items.find((item) => item.itemId === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
