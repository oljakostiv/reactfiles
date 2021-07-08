import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import CreateTodosForm from "./TodosForm";
import Todos from "./TodosValue";
import {setLoadingFalse, setLoadingTrue, addTodos, pushTodo} from "../actionCreators/ActionCreators";

export default function TodosSelector (){
    const {todosValue, todosLoading} = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue ())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();

            dispatch(addTodos(data))
        } catch (e){
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
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
        // fetchTodos();
        dispatch(pushTodo(data))
    }
    return (
        <div>
            <CreateTodosForm onSubmit={onTodoCreate}/>
            <Todos todosValue={todosValue} isLoading={todosLoading}/>
        </div>
    )
}
