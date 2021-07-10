import './App.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {dec, inc, incByAmount} from "./features/counter/counterSlice";


function App() {
    const {value} = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <div>Hello!</div>
                <h1>Counter: {value}</h1>
                <button onClick={() => dispatch(inc())}>inc</button>
                <button onClick={() => dispatch(dec())}>dec</button>
                <button onClick={() => dispatch(incByAmount(10))}>inc 10</button>
            </header>
        </div>
    );
}

export default App;
