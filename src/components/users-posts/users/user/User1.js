import {useEffect, useState} from "react";
import './User1.css'

export default function User1({itemUser: {id, name, username, email, address: {street, suite, city}}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });
    }, []);


    const userAndPosts = posts.filter(value => id === value.userId)

    return (
        <div className={'users'}>
            <h2>{id} - {name} - {username}</h2>
            <h4>Email: {email}</h4>
            <p>
                Address: {street}, {suite}, {city}
            </p>
           <div className={'posts'}> {
                userAndPosts.map((value, index) => <div className={'post'}>
                    <h6>{value.id} - <span>{value.title}</span> --- {value.body}.</h6>
                </div>)
            }
           </div>
        </div>
    );


}

