import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "./cartSlice";
import expandSidebar from "./ExpandSlice";
import { combineReducers } from "redux";
import dialog from "./DialogSlice";
const reducers = combineReducers({ cart, expandSidebar, dialog });

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

console.log("Redux Store Config:", store.getState());

export default store;
