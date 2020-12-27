import List from "./List";
import React, { useState } from 'react';

const Todo= () => {
    const [count, currentCount] = useState(0);
    const [item, itemCounter] = useState([]);
    
    let itemCount = () =>{
        let listKey = `listKey${count.toString()}`
        itemCounter(listitems => [...listitems, {itemTodo: "This", id: listKey}])
        currentCount(count + 1);
    }
    return(
        <div>
            {item.map((x => <List item={x.itemTodo} key={x.id}/>
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