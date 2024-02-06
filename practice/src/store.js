import {configureStore} from "@reduxjs/toolkit"
// import reduced from "./components/CounterSlice"
// import {csr,msr} from "./components/CounterSlice"
import {a} from "./components/CounterSlice"
export const store=configureStore({
    reducer:{
        // counter:reduced

        counter:a.csr,
        result:a.msr

    }
    
})

