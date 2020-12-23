import List from "./List";

const Todo= () => { 
    const todoStat = ["Do This", "Do That", "Do everything"];
    return(
        <div>
            {todoStat.map(x =>( <List item={x}/>
            ))}
        </div>
    );
};

export default Todo;