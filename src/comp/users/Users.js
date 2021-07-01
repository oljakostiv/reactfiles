import {useEffect, useState} from "react";
import {getUsers} from "../api/Api";
import User from "./user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "./user/UserDetails";
import UserDetails2 from "./user/UserDetails2";

export default function Users(props) {
    let {match:{url}} = props;
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data]);
        });
    }, []);
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/> )
            }

            <Switch>
                {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                <Route path={'/users/:id'} component={UserDetails2}/>
            </Switch>
        </div>
    );
}