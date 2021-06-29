import {useEffect, useState} from "react";
import {getUsers} from "../servises/Api";
import User from "./user/User";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value =>{
            setUsers([...value.data])
        })
    }, []);
    return (
        <div>
            {
                users.map(u=><h5 key={u.id}><User item={u}/></h5>)
            }
        </div>
    );
}