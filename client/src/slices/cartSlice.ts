import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

export interface ICartItem extends Product {
  quantity: number;
}

export interface CartInitialState {
  items: ICartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const defaultState: CartInitialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartFromLocalStorage = localStorage.getItem("cart");
console.log(cartFromLocalStorage);
const initialState: CartInitialState = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const cartItem: ICartItem = action.payload;
      const existingIndex = state.items.findIndex(
        (it) => it._id === cartItem._id
      );
      if (existingIndex !== -1) {
        const existingItem = state.items[existingIndex];

        state.totalAmount = parseFloat(
          (
            state.totalAmount -
            (existingItem.price * existingItem.quantity -
              cartItem.price * cartItem.quantity)
          ).toFixed(2)
        );

        state.totalQuantity -= existingItem.quantity - cartItem.quantity;

        if (cartItem.quantity === 0) {
          state.items = state.items.filter((it) => it._id !== cartItem._id);
        } else {
          state.items[existingIndex] = cartItem;
        }
      } else {
        state.items.push(cartItem);
        state.totalAmount = parseFloat(
          (state.totalAmount + cartItem.price * cartItem.quantity).toFixed(2)
        );
        state.totalQuantity += cartItem.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
