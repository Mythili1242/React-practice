import {createSlice} from "@reduxjs/toolkit";

const initialState={
    clicked:false,
    ingredient:""
}

export const RecipeSlice=createSlice({
    name:"recipe",
    initialState,
    reducers:{
        entered:(state,action)=>{
            state.clicked=action.payload.clicked;
            state.ingredient=action.payload.ingredient;
        }
    }
})

export const {entered}=RecipeSlice.actions;
export default RecipeSlice.reducer;

