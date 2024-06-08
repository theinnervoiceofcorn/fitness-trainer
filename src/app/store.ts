import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/04-programs-filter/model/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
