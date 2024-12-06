import { configureStore } from "@reduxjs/toolkit";
import  recipeSlice  from "../features/recipes";

export const store = configureStore({
    reducer: {
        recipe: recipeSlice
    }
})