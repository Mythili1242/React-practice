import { useSelector,useDispatch } from "react-redux";
import {inc,dec,mul,div} from "./actions"
import { store } from "./store";

function App() {
const count=useSelector(state=>state.reducerfun)
console.log(count);
const count1=useSelector(state=>state.secfun)
const dispatch=useDispatch()    //useDispatch returns redux store's dispatch function.after calling action it returns action type and from there using redux stores
// dispatch function it dispatches the action to reducer
  return (
    <div>
      <h1>Redux example</h1>
  <button onClick={()=>dispatch(inc(5))}>+</button>   
  <span>count is {count}</span>
  <button onClick={()=>dispatch(dec())}>-</button>
<br></br>
  <button onClick={()=>dispatch(mul())}>*</button>
  <span>count is {count1}</span>
  <button onClick={()=>dispatch(div())}>/</button>
  </div>
  );
}

export default App;
