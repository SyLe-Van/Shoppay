import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { presistReducer } from "redux-persist";

const reducers = combineReducers({});

const config = {
  key: "root",
  storage,
};
const reducer = presistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
