import React from "react";
const Todo  = (props) => {

       return(
       <>
        <div className="todostyle">
        <button className="minus" onClick={() =>
            {props.onselect(props.id); }
        }>-</button>
        <li> {props.text} </li>
        </div> 
       </>
    )};

export default Todo;