import List from "./List";
import React, { useState } from 'react';

const Todo= () => {
    const [count, currentCount] = useState(0);
    const [item, itemCounter] = useState([]);
    
    let itemCount = () =>{
        itemCounter(listitems => [...listitems, "Test"])
        currentCount(count + 1);
    }
    return(
        <div>
            {item.map((x => <List item={x} key={Math.random()}/>
            ))}
            <textarea id="userInput"></textarea>
            <p>
            <button onClick={itemCount}>Add Item</button>
            </p>
            <span>{count} items on list</span>

        </div>
    );
};

export default Todo;