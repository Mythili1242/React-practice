import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isOpen:false,
}

export const HomeSlice=createSlice({
    name:'drawer',
    initialState,
    reducers:{
        toggleDrawer:(state)=>{
            state.isOpen=!state.isOpen;
        }
    }
    
})

export const {toggleDrawer}=HomeSlice.actions;
export default HomeSlice.reducer;