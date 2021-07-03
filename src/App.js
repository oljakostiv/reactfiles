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
            <div className={'linksStyle'}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users:</Link>
                </li>
            </div>

            <Switch>
                <Route exact path={'/'}>
                    <div className={'homePage'}>Welcome!</div>
                </Route>
                <Route path={'/users'} render={
                    (props) => <Users {...props}/>
                }/>
            </Switch>
            
            <div className={'photo'}>
                <img src="https://t4.ftcdn.net/jpg/03/13/39/33/240_F_313393320_otAIMTH0SMcR3taJNugjjR58NSJd5Fok.jpg" alt=""/>
            </div>

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