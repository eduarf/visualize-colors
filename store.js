import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./src/features/ThemeSlice";


export const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
    },
});