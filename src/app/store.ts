import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api-slice";
import itemsReducer from '../redux/items/items.reducer'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        items: itemsReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
