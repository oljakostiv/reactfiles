import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import CreateTodosForm from "./TodosForm";
import Todos from "./TodosValue";
import {
    setLoadingFalse,
    setLoadingTrue,
    addTodos,
    pushTodo,
    setPatchTodo
} from "../actionCreators/ActionCreators";

export default function TodosSelector (){
    const {todosValue, todosLoading} = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);

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

    const onBtnComplete = async (id, toggle) => {
        // console.log(toggle);
        try {
            // dispatch(setPatchFalse())
            const resp = await fetch('http://localhost:8888/update-todo/' + id);
            // const data = await resp.json();
            dispatch(setPatchTodo(id, toggle))

        } catch (e){
            console.log(e);
        } finally {
            // dispatch(setPatchTrue())
        }
    }

    // const onToggle = async (id) => {
    //
    // }

    return (
        <div>
            <CreateTodosForm onSubmit={onTodoCreate}/>
            <Todos todosValue={todosValue} isLoading={todosLoading} btnComplete={onBtnComplete} />
        </div>
    )
}
