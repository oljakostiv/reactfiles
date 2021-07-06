import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Posts.css'

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
        <div className={'postsStyle'}>
            Posts:
            <div className={'postsFlex'}>
                {
                    posts.map(posts => (
                        <div className={'postStyle'} key={posts.id}>
                            <span>{posts.id}:</span> {posts.title}.
                        </div>
                    ))
                }
            </div>
        </div>
    );
}