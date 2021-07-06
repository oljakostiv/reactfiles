import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Users (){
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
        dispatch({
            type:'SET_USERS',
            payload: data
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            {
                users.map(users => (
                <div key={users.id}>
                    {users.id} - {users.name} - {users.email}
                </div>
            ))
            }
        </div>
    );
}