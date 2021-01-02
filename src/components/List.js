import React, { useState } from 'react';

const List = (props) => {
    const[completed, completedFunc] = useState(false);

    let checkedOrUnchecked = (event) => {
        event.target.checked ? completedFunc(true): completedFunc(false)
    }

    return(
        <div className="row align-items-center">
        <div className="col-1"><input id="check" type="checkbox" onChange={checkedOrUnchecked}></input></div>
        <div className="col-8 listitem"><label htmlFor="check" className={completed ? "strikethrough" : ""}>{props.item}</label></div>
        <div className="col-2"><button onClick={props.delete} value={props.value} type="button" className="btn btn-danger btn-sm">DELETE</button></div>
        <div className="col-1"></div>
        </div>
    );
}

export default List;