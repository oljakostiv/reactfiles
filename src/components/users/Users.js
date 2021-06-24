import {getUsers, getUser, getPosts, getPost} from "../servises/Api";
import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users({items}){
let [users, setUsers] = useState([]);

useEffect(()=>{
    getUsers().then(value => {
        setUsers([...value.data])
    })
    }, []);

return (
        <div>
            {
                users.map(u=><User key={u.id} item={u} />)
            }
        </div>
    );
}