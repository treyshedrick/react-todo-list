import React, { useState } from 'react';

const List = (props) => {
    const[completed, completedFunc] = useState(false);

    let checkedOrUnchecked = (event) => {
        event.target.checked ? completedFunc(true): completedFunc(false)
    }

    return(
        <div className="listitem">
        <input id="check" type="checkbox" onChange={checkedOrUnchecked}></input>
        <label htmlFor="check" className={completed ? "strikethrough" : ""}>{props.item}</label>
        </div>
    );
}

export default List;