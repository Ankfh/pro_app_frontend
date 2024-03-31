import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/user/userSlice";
export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});
