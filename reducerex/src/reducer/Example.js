import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }
  return state;
};

function Example() {
  const initialState = {
    data: [
      { id: 1, fn: "mythili", email: "s@gmail.com" },
      { id: 2, fn: "sreeram", email: "m@gmail.com" },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState); 
//takes 3 parameters->reducer,initial args,init
//reducer-specifies how the state gets updated
//initial args-the value from which the initial state is calculated
//init(optional)-the initializer function that returns the initial state.if it is not specified initial state is set to initial args.otherwise initial state
// is set to the result of calling init(initialargs)

//useReducer returns an array with exactly two value->initial state and dispatch function
//1)The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
//2)The dispatch function that lets you update the state to a different value and trigger a re-render.

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };

const handleEdit=(id)=>{
    dispatch({
        type:"EDIT_PERSON",
        payload:id
    });
};

  return (
    <div>
      <h1>users length:{state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, fn, email } = eachItem;
        return (
          <div key={id}>
            <h3>{fn}</h3>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={()=>handleEdit(id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default Example;

//he useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic 
//or when the next state value depends upon its previous value or when the components are needed to be optimized.
