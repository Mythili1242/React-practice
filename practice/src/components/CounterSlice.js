import React from "react";
import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:0
}
 export const CounterSlice=createSlice({
name:"counter",
initialState,
reducers:{
    increment:(state)=>{
        state.value+=1;
    },
    decrement:(state)=>{
        state.value-=1;
    },
},
})

export const {increment,decrement}=CounterSlice.actions;
// export default CounterSlice.reducer;


export const multipleSlice=createSlice({
    name:"mul",
    initialState:{
        val:1
    },
    reducers:{
        mulbytwo:(st)=>{
            st.val*=2;
        },
        divbytwo:(st)=>{
            st.val/=2;
        }
        
    }
})

export const {mulbytwo,divbytwo}=multipleSlice.actions;
export const a={csr:CounterSlice.reducer,msr:multipleSlice.reducer}