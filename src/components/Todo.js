import List from "./List";
import React, { useState } from 'react';

const Todo= () => {
    const [count, currentCount] = useState(0);
    const [individualItem, newItem] = useState("");
    const [items, itemCounter] = useState([]);
    
    const indivItem = i => {
        newItem(i.target.value);
    }

    let itemCount = (event) =>{
        let listKey = `listKey${count.toString()}`
        itemCounter(listitems => [...listitems, {itemTodo: individualItem, id: listKey}])
        currentCount(count + 1);
        event.preventDefault();
        event.target.reset();
    }

    let deleteItem = itemKey =>{
        itemCounter(items.filter(item => item.id !== itemKey.target.value))
        currentCount(count - 1);
    }

    return(
        <div>
            <div className="fullList container">
            {items.map((x => <List item={x.itemTodo} key={x.id} delete={deleteItem} value={x.id}/>
            ))}
            </div>
            <form onSubmit={itemCount}>
            <input type="text" id="userInput" onChange={indivItem} required></input>
            <p>
            <button type="Submit" className="btn btn-light btn-md">Add Item</button>
            </p>
            </form>
            <span>{count} items on list</span>

        </div>
    );
};

export default Todo;