import React from "react"

function Button({handleClick,childern}){
    console.log("rendering button-",childern);
    return(
        <button onClick={handleClick}>{childern}</button>
    )
}



export default React.memo(Button);
