import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import Users from "./comp/Users/Users";

const SomeNestedChildComponent = () => {
    const counter = useSelector((state) => state.counterValue);
    const users = useSelector((state) => state.users)
    console.log(counter);


    return (
        <header className={'App-header'}>
            <div>
                <h5><Users/></h5>
                {users.map(users => (
                    <div key={users.id}>
                        {users.id} - {users.name} - {users.email}
                    </div>
                ))}
            </div>

        </header>
    );
}



function App() {

    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com')).json()

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
            {/*<div className={'btnStyle'}>*/}

            {/*    <button className={'btnInc'} onClick={() => {*/}
            {/*        dispatch({type: 'INC_CUSTOM', payload: 88})*/}
            {/*    }}>INC*/}
            {/*    </button>*/}

            {/*    <button className={'btnDec'} onClick={() => {*/}
            {/*        dispatch({type: 'DEC'})*/}
            {/*    }}>DEC*/}
            {/*    </button>*/}
            {/*    <button className={'btnReset'} onClick={() => {*/}
            {/*        dispatch({type: 'RESET'})*/}
            {/*    }}>RESET*/}
            {/*    </button>*/}

            {/*   */}
            {/*</div>*/}

        </div>
    );
}

export default App;
