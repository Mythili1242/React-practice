import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})


// we need to import the reducer function from the counter slice and add it to our store. 
// By defining a field inside the reducers parameter, we tell the store to use this slice reducer function to handle all updates to that state.


