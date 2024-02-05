import { configureStore } from "@reduxjs/toolkit";
import RecipeSliceCode from "./components/RecipeSlice";

export const store=configureStore({
    reducer:{
        entered:RecipeSliceCode
    }
})
