import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);


    return (
        <div>
            {
                users.map((value, index) => <User key={index} item={value}/>)
            }
        </div>
    );
}