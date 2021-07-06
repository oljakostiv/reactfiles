import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Users.css'

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
        <div className={'usersStyle'}>
            Users:
            {
                users.map(users => (
                <div className={'userStyle'} key={users.id}>
                    <span>{users.id}:</span> {users.name} (e-mail: {users.email});
                </div>
            ))
            }
        </div>
    );
}