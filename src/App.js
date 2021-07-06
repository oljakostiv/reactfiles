import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

const SomeNestedChildComponent = () => {
    const counter = useSelector((state) => state.counterValue);
    const users = useSelector((state) => state.users)
    console.log(counter);


    return (
        <header className={'App-header'}>
            <div className={'counterStyle'}>
                <h1>{counter}</h1>
            </div>
            <div>
                <h5>USERS:</h5>
                {users.map(users => (
                    <div key={users.id}>
                        {users.id} - {users.name} - {users.email}
                    </div>
                ))}
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

    const fetchUsers = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

        console.log(data)
        dispatch({
            type:'SET_USERS',
            payload: data,
        })
    }

    useEffect(() => {
       fetchUsers()
    }, [])

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
            </div>
            <SomeChildComponent/>
        </div>
    );
}

export default App;
