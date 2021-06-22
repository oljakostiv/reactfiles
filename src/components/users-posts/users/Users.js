import {useEffect, useState} from "react";
import User1 from "./user/User1";
import './Users.css'


export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value),[])


    })

        return (
            <div className={'allUsers'}>
                {
                    users.map((value, index) => <User1 key={index} itemUser={value}/>)
                }
            </div>
        )

}