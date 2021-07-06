import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Posts (){
    const posts = useSelector ((state) => state.posts)
    const dispatch1 = useDispatch();

    const fetchPosts = async () => {
        const data1 = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        dispatch1 ({
            type: 'SET_POSTS',
            payload: data1
        })
    }

    useEffect(() =>{
        fetchPosts()
    }, [])

    return (
        <div>
            {
                posts.map(posts => (
                    <div key={posts.id}>
                        {posts.id} - {posts.title}
                    </div>
                ))
            }
        </div>
    );
}