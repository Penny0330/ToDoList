import React, { useEffect, useState } from "react";
import List from "./List";

import firebase from "../firebase/firebase.config"
import { collection, addDoc, getDocs, querySnapshot, deleteDoc, doc} from "firebase/firestore"

function AddForm(){
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    // write
    const addTodo = async (e) => {
        if(!newItem){
            return;
        }

        const item = {
            id: (Math.random()*1000000000).toString(36),
            value: newItem
        };

        await addDoc(collection(firebase, "todos"), {
            id: item.id,
            value: item.value
        });

        setItems(oldList => [...oldList, item]);

        setNewItem("");
    }

    // read
    const fetchPost = async () => {
        
        await getDocs(collection(firebase, "todos"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
                setItems(newData);
            })
    }

    useEffect(()=>{
        fetchPost();
    }, [])

    // delete
    const deleteItem = async (id) => {
        await deleteDoc(doc(firebase, "todos", id))
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

            <button className="add_button" onClick={() => addTodo()}>Add</button>

            {
                <List items={items} deleteItem={deleteItem} />
            }
        </div>
    )
}

export default AddForm