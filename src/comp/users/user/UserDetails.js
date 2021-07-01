import {useEffect, useState} from "react";
import {getUser} from "../../api/Api";

export default function UserDetails({match: {params: {id}}}) {
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => {
            setUser(...[value.data]);
        });
    }, [id]);
    return (
        <div>
            <hr/>
            {user.id} - {user.username} - {user.email}.
        </div>
    );
}