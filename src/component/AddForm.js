import React, { useState } from "react";
import List from "./List";

function AddForm(){
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);


    function addItem(){

        if(!newItem){
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };

        setItems(oldList => [...oldList, item]);

        setNewItem("");
    }

    function deleteItem(id){
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return(
        <div className="addForm">
            <input
                type="text"
                placeholder="Add To-Do ..."
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />

            <button className="add_button" onClick={() => addItem()}>Add</button>

            {
                <List items={items} deleteItem={deleteItem} />
            }
        </div>
    )
}

export default AddForm