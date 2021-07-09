import './App.css';
import React from "react";
import TodosSelector from "./redux/todos/TodosSelector";

function App() {
    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <div>Hello!</div>
                <TodosSelector/>
            </header>
        </div>
    );
}

export default App;

//6.1