import React, {useState} from "react";

const OtherComponent = ({todo, onTodoPatch}) => {

    return (
        <React.Fragment key={todo.id}>
            <div>{todo.title} - {todo.description}
                <br/>
                <i>Created Ad: {new Date(todo.createdAt).toDateString()}</i>
                <br/>
                Status: {todo.completed.toString()}
            </div>
            <div>
                <button className={'myBtn'} onClick={() => onTodoPatch(todo.id)}>Complete</button>
                <button className={'myBtn'}>Delete</button>
            </div>
            <hr/>
        </React.Fragment>
    )
}

export default function Todos({todosValue, isLoading, btnComplete}) {
    let [toggle, setToggle] = useState(true);
    if (isLoading) return <h1>Loading...</h1>

    const onTodoPatch = async (id) => {
        await btnComplete(id, toggle);
        setToggle(!toggle);
    }

    return (
        <div>
            {
                todosValue.map(todo => (
                    <OtherComponent key={todo} todo={todo} onTodoPatch={onTodoPatch}/>
                ))
            }
        </div>
    )
}
