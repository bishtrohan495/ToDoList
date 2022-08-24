import React, { useState } from "react";
import Todo from "./Todo";

const App = () =>{
    
    const [inputList , setinputList] = useState('');
    const [items , setitems] = useState([]);

    const itemEvent = (event) =>{
        setinputList(event.target.value)
    };

    const listofitems = () =>{
        setitems((olditem) =>{
            return[...olditem,inputList];
        });
    };

    const deleteitems = (id) => {
        console.log('delete');
        setitems((olditem) =>{
            return olditem.filter((arrElem,index)=>{
                return index !== id;

            }
            )
        })
    };

return(
    <>
        <div className="main-div">
        <div className="center-div">
            <h1>ToDo List</h1>
            <br />
            <input type='text' placeholder="Add a Item"
            value={inputList} onChange={itemEvent} />
            <button onClick={listofitems}>+</button>
            
            <ol>
                {items.map( (itemval, index) =>{
                   return <Todo 
                   text = {itemval}
                   key = {index}
                   id = {index}
                   onselect ={deleteitems} />;
                } )};
            </ol>

        </div>
        </div>
    </>
)
};
export default App;