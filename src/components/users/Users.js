import {useEffect, useState} from "react";
import {getUsers} from "../servises/Api";
import User from "./user/User";
import "./user/User.css"


export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data])
        })
    }, []);
    return (
        <div className={'usersStyle'}>
            {
                users.map(value => <h5 key={value.id}><User item={value}/></h5>)
            }
        </div>
    );
}