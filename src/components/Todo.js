import List from "./List";
import React, { useState } from 'react';

const Todo= () => {
    const [count, currentCount] = useState(0);
    const [individualItem, newItem] = useState("");
    const [item, itemCounter] = useState([]);
    
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
    return(
        <div>
            <div className="fullList">
            {item.map((x => <List item={x.itemTodo} key={x.id}/>
            ))}
            </div>
            <form onSubmit={itemCount}>
            <input type="text" id="userInput" onChange={indivItem} required></input>
            <p>
            <button type="Submit">Add Item</button>
            </p>
            </form>
            <span>{count} items on list</span>

        </div>
    );
};

export default Todo;