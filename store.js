import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./src/features/ThemeSlice";
import popupSliceReducer from "./src/features/popupSlice";


export const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        popup: popupSliceReducer
    },
});