import React, { useEffect, useState } from "react";
import List from "./List";

import { db, auth } from '../utils/firebase.config';
import { collection, addDoc, deleteDoc, doc, query, onSnapshot, where} from "firebase/firestore";



function AddForm(){
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    // read
    useEffect(() => {
        const ref = collection(db, "todos");
        const q = query(ref, where("author_uid", "==", auth.currentUser.uid));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todoArr = [];
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id});
            });
            setItems(todoArr)
        })
        return () => unsub();
    }, [])

    // write
    const addTodo = async (e) => {
        if(!newItem){
            return;
        }

        const item = {
            value: newItem
        };

        await addDoc(collection(db, "todos"), {
            value: item.value,
            author_uid: auth.currentUser.uid
        });

        setNewItem("");
    }

    // delete
    const deleteItem = async (id) => {
        await deleteDoc(doc(db, "todos", id))
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

            <List items={items} deleteItem={deleteItem} />
        </div>
    )
}

export default AddForm
