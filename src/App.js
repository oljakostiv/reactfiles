import './App.css';
import {useSelector, useDispatch} from "react-redux";

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

    return (
        <div className={'App'}>
            <div className={'btnStyle'}>

                    {/*<input type={'number'} value={num} onChange={onNumChange}/>*/}
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
            </div>
            <SomeChildComponent/>
        </div>
    );
}

export default App;
