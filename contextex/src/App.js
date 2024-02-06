// import C1 from './components/c1'
// import C2 from './components/c2'

// import {useState,createContext} from 'react'


// export const UserContext=createContext()
// function App() {
//   const [count,setCount]=useState(0);

//   return (
//     <>
//     <div>app</div>
//     <UserContext.Provider value={count}>
//     <C1 />
//     <C2 />
    
//     </UserContext.Provider>
//     </>
//   );
// }

// export default App;


import C1 from './components/c1'
import C2 from './components/c2'
import {useState,createContext} from 'react'

export const UserContext=createContext()

function App() {
  const [count,setCount]=useState(0);
console.log(count);
  return (
    <>

    <h1 style={{textAlign:'center'}}>USE-CONTEXT EXAMPLE</h1>
    <UserContext.Provider value={[count,setCount]}>
    <C1 />
    <C2 />
    </UserContext.Provider>
    
    </>
  );
}



export default App;

