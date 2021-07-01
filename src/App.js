import './App.css';
import Users2 from "./comp2/users/Users2";
import {useEffect, useState} from "react";
import {getUsers2} from "./comp2/api2/Api2";

import Users from "./comp/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>

                <hr/>
            </div>

            <Switch>
                <Route exact path={'/'}>
                    Welcome!
                </Route>
                <Route path={'/users'} render={
                    (props) => <Users {...props}/>
                }/>
            </Switch>

        </Router>
    );
}


// // comp2:
// export default function App() {
//     let [users2, setUsers2] = useState([]);
//
//     useEffect(()=> {
//         getUsers2().then(value => {
//             setUsers2(value.data.data)
//         });
//     }, []);
//
//     return (
//         <div>
//             <Users2 itemsUsers={users2}/>
//         </div>
//     );
// }