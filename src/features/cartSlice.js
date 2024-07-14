import { createSlice } from "@reduxjs/toolkit";
import productList from "../ProductList";

const initialState = {
  cart: [],
  items: [], // Set items to an empty array initially
  filteredItems: [],
  totalQuantity: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload; // Initialize filteredItems with the fetched products
    },
    addtoCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    addCartTotal: (state) => {
      let totalQuantity = 0;
      let totalPrice = 0;
      state.cart.forEach((item) => {
        totalQuantity = totalQuantity + item.quantity;
        totalPrice = totalPrice + item.quantity * item.price;
      });

      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.quantity > 0) {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    },
    searchItem: (state, action) => {
      const filterItem = state.items.filter((item) =>
        item.colour.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filteredItems = filterItem;
    }
  }
});

export const {
  setProducts,
  addtoCart,
  addCartTotal,
  removeItem,
  increaseItem,
  decreaseItem,
  searchItem
} = cartSlice.actions;

export default cartSlice.reducer;
