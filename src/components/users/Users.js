import {getUsers} from "../servises/Api";
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
                users.map(u=><h3 key={u.id}><User item={u}/></h3>)
            }
        </div>
    );
}