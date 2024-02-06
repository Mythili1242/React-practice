// export const reducerfun=(state={counter:0},action)=>{
    export const reducerfun=(state=0,action)=>{
    switch(action.type){
    case 'INCREMENT':
        // return {...state, counter:state.counter+action.payload};
        return state+action.payload
    case 'DECREMENT':
        return state-1;
    default:
        return state;
}}


export const secfun=(state=1,action)=>{
switch(action.type){
    case 'MULTIPLY':
        return state*2
    case 'DIVISION':
        return state/2
    default:
        return state;
}
}