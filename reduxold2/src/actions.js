export const inc=(val)=>{
    return{
    type:'INCREMENT',
    payload:val
}
}

export const dec=()=>{
    return {
        type:'DECREMENT',
    }
}



export const mul=()=>{
    return {
        type:'MULTIPLY',

    }
}

export const div=()=>{
    return {
        type:'DIVISION'
    }
}