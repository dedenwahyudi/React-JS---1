// import { toolkit } from "@reduxjs/toolkit";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { build } from "vite";

// const initialState = {
//   cart: [],
// };

// reducer addToCart
const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

// reducer login
const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

// subscribe (untuk melihat perubahan yang terjadi didalam store)
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
// const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
// const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
