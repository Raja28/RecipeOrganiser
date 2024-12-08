import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CREATE_NEW_RECIPE_API, DELETE_RECIPE_API, FETCH_ALL_RECIPE_API, SEARCH_RECIPE_API } from "../utils/apis";

export const fetchRecipes = createAsyncThunk('posts/fetchRecipes', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.get(FETCH_ALL_RECIPE_API)
        console.log("response", response)
        return response?.data?.recipes

    } catch (error) {
        console.log("error", error);
        return rejectWithValue(error?.response?.data?.message)

    }
})

export const deleteRecipe = createAsyncThunk("posts/deleteRecipe", async (_id, { rejectWithValue }) => {
    try {
        const response = await axios.post(DELETE_RECIPE_API, { _id });

        return response?.data?.allRecipes
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data?.message)
    }
})

export const searchRecipe = createAsyncThunk("posts/searchRecipe", async (name, { rejectWithValue }) => {
    try {


        const response = await axios.post(SEARCH_RECIPE_API, { name });

        return response?.data?.recipe
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data?.message)
    }
})

export const addRecipe = createAsyncThunk("posts/addRecipe", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(CREATE_NEW_RECIPE_API, { ...formData });

        return response?.data?.allRecipes
    } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response?.data?.message)
    }
})

const initialState = {
    recipes: null,
    status: "idle",
    error: null
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setStatus: (state, {payload}) =>{
            state.status = payload
        },
        setError: (state, ) =>{
            state.error = null
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchRecipes.pending, (state) => {
            state.status = "loading"
        })

        builder.addCase(fetchRecipes.fulfilled, (state, { payload }) => {
            state.status = "success"
            state.recipes = payload
        })
        builder.addCase(fetchRecipes.rejected, (state, { payload }) => {
            state.status = "error"
            state.error = payload
        })

        builder.addCase(deleteRecipe.pending, (state) => {
            state.status = "loading"
        })

        builder.addCase(deleteRecipe.fulfilled, (state, { payload }) => {
            state.status = "success"
            state.recipes = payload
        })
        builder.addCase(deleteRecipe.rejected, (state, { payload }) => {
            state.status = "error"
            state.error = payload
        })

        builder.addCase(addRecipe.pending, (state) => {
            state.status = "loading"
        })

        builder.addCase(addRecipe.fulfilled, (state, { payload }) => {
            state.status = "success"
            state.recipes = payload
        })
        builder.addCase(addRecipe.rejected, (state, { payload }) => {
            state.status = "error"
            state.error = payload
        })
        builder.addCase(searchRecipe.pending, (state) => {
            state.status = "loading"
        })

        builder.addCase(searchRecipe.fulfilled, (state, { payload }) => {
            console.log(payload);

            state.status = "success"
            state.recipes = [payload]
        })
        builder.addCase(searchRecipe.rejected, (state, { payload }) => {
            state.status = "error"
            state.error = payload
        })
    }
})
export const {setStatus, setError}  = recipeSlice.actions
export default recipeSlice.reducer
