import {configureStore} from '@reduxjs/toolkit';
import homeCode from "../src/components/Drawer/Home/HomeSlice" ;

export const store=configureStore({
    reducer:{
        drawer:homeCode
    }
})

