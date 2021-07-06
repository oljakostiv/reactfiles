import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

const SomeNestedChildComponent = () => {
    const counter = useSelector((state) => state.counterValue);
    console.log(counter);


    return (
        <header className={'App-header'}>
            <div className={'counterStyle'}>
                <h1>{counter}</h1>
            </div>

        </header>
    );
}

const SomeChildComponent = () => {
    return (
        <SomeNestedChildComponent/>
    );
}

function App() {

    const dispatch = useDispatch();

    const [num, setNum] = useState('');
    const onNumChange = ({target: {value}}) => {
        setNum(value)
    }

    const onAdd = () => {
        dispatch({type: 'INPUT', payload: +num})
    }

    return (
        <div className={'App'}>
            <div className={'btnStyle'}>


                <button className={'btnInc'} onClick={() => {
                    dispatch({type: 'INC_CUSTOM', payload: 88})
                }}>INC
                </button>

                <button className={'btnDec'} onClick={() => {
                    dispatch({type: 'DEC'})
                }}>DEC
                </button>
                <button className={'btnReset'} onClick={() => {
                    dispatch({type: 'RESET'})
                }}>RESET
                </button>

                <div>
                    <input className={'inputStyle'} type={'number'} value={num} onChange={onNumChange}/>
                    <button className={'btnInput'} onClick={onAdd}>input</button>
                </div>
            </div>
            <SomeChildComponent/>
        </div>
    );
}

export default App;
