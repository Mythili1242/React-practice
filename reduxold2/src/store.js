import {createStore} from "redux"
import {reducerfun} from "./reducers"
import { comb } from "./combine"
export const store=createStore(
   comb
)

