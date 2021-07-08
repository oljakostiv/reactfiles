import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const CreateTodosForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) return;
        try {
            await onSubmit(title, description);
            setTitle('');
            setDescription('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={({target: {value}}) => setTitle(value)}
                       placeholder={'todo title'}/>
                <br/>
                <input type='text' value={description} onChange={({target: {value}}) => setDescription(value)}
                       placeholder={'todo description'}/>
                <br/>
                <button type='submit' disabled={!title || !description}>click</button>
            </form>
        </div>
    )
}

const Todos = ({todosValue}) => {
    return (
        <div>
            {
                todosValue.map(todo => (
                    <React.Fragment key={todo.id}>
                        <div><h5>{todo.title} - {todo.description}
                            <br/>
                            Created Ad: {new Date(todo.createdAt).toDateString()}</h5>
                        </div>
                        <hr/>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

function App() {
    const {todosValue} = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        const resp = await fetch('http://localhost:8888/get-todos');
        const data = await resp.json();

        dispatch({type: 'ADD_TODOS', payload: data})
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        console.log(data, 'todo')
    }

    return (
        <div className={'App'}>
            <header className={'App-header'}>
                Hello!
                <CreateTodosForm onSubmit={onTodoCreate}/>
                <Todos todosValue={todosValue}/>
            </header>
        </div>
    );
}

export default App;
