import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";


import storage from "redux-persist/lib/storage";

import usersReducer from "./users/users-slice";
import filterReducer from "./filter/filter-slice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(persistConfig, usersReducer);

const rootReducer = combineReducers({
  users: persistedAuthReducer,
  filters: filterReducer,
});

export default rootReducer;
