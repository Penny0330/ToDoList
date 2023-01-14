import React from "react";

function List({items, deleteItem}){
    return(
        <ul className="items">
            {
                items.map((item, index) => {
                    return(
                        <li className="item" key={index}>
                           <div className="todo">{item.value}</div> 
                           <button className="delete_button" onClick={() => deleteItem(item.id)}>X</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List