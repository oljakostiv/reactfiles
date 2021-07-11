import './App.css';
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {dec, inc, incByAmount} from "./features/counter/counterSlice";
import {addTodos, setLoadingTrue, setLoadingFalse, pushTodo} from './features/todos/TodosSlice';

function CreateTodosForm({onSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || isLoading) return;
        try {
            setIsLoading(true)
            await onSubmit(title, description);
            setTitle('');
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
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
                <button type='submit' disabled={!title || !description || isLoading}>click</button>
            </form>
        </div>
    )
}

function Todos({todos, isLoading}) {

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            {todos.map(todo =>
                <React.Fragment key={todo.id}>
                    <div>{todo.title} - {todo.description}
                        <br/>
                        <i>Created Ad: {new Date(todo.createdAt).toDateString()}</i>
                        <br/>
                        Status: {todo.completed.toString()}
                    </div>
                    <hr/>
                </React.Fragment>
            )}
        </div>
    )
}

function App() {

    const {todosValue, todosLoading} = useSelector(({todosValue}) => todosValue);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();
            dispatch(addTodos(data))
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
    }

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
        // fetchTodos();
        dispatch(pushTodo(data))
    }

    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <div>Hello!</div>
                <CreateTodosForm onSubmit={onTodoCreate}/>
                <Todos todos={todosValue} isLoading={todosLoading}/>
            </header>
        </div>

        // <div className={'App'}>
        //     <header className={'App-header'}>
        //         <div>Hello!</div>
        //         <h1>Counter: {value}</h1>
        //         <button onClick={() => dispatch(inc())}>inc</button>
        //         <button onClick={() => dispatch(dec())}>dec</button>
        //         <button onClick={() => dispatch(incByAmount(10))}>inc 10</button>
        //     </header>
        // </div>
    );
}

export default App;
