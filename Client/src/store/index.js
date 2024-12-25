import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./slices/cart-slice";


const store  = configureStore({
    reducer : {
        bookmarks: bookmarkReducer
    }
});

export default store;