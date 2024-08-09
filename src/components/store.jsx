import { createStore, combineReducers } from "redux";

//! Initial State for productListReducer

const productListInitialState = [
  {
    id: 1,
    item: "Apple",
    price: 10,
  },
  {
    id: 2,
    item: "Orange",
    price: 20,
  },
  {
    id: 3,
    item: "Banana",
    price: 30,
  },
];

//! Initial State for cartReducer

const cartInitialState = [
//   {
//     id: 1,
//     item: "Apple",
//     price: 10,
//     quantity: 1,
//   },
];

//! Reducers for cartReducer

export function cartReducer(state = cartInitialState, action) {
  switch (action.type) {
    case "cart/addToCart":
      return [...state, action.payload];
    case "cart/removeFromCart":
      return state.filter((item) => item.id !== action.payload);
    case "cart/updateQuantity":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
}

//! Action Creators for cartReducer

export function addToCart(item) {
  return {
    type: "cart/addToCart",
    payload: item,
  };
}

export function removeFromCart(id) {
  return {
    type: "cart/removeFromCart",
    payload: id,
  };
}

export function updateQuantity(id, quantity) {
  return {
    type: "cart/updateQuantity",
    payload: { id, quantity },
  };
}

//! Reducers for productListReducer

export function productListReducer(state = productListInitialState, action) {
  return state;
}

//! Combine Reducers

const rootReducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
});

//! Store

export const store = createStore(rootReducer);
