import Post from "./post/Post";
import './post/Post.css'

export default function Posts({postOfUsers, match:{url}}) {

    return (
        <div className={'postsStyle'}>
            {
                postOfUsers.map(value => <Post key={value.id} item1={value} url={url} /> )
            }
        </div>
    );
}