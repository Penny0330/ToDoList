import React from "react";

function List({items, deleteItem}){
    return(
        <ul className="items">
            {
                items.map(item => {
                    return(
                        <li className="item" key={item.id}>
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