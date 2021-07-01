import Post from "./post/Post";

export default function Posts({postOfUsers, match:{url}}) {

    return (
        <div>
            <hr/>
            {
                postOfUsers.map(value => <Post key={value.id} item1={value} url={url} /> )
            }
            <hr/>
        </div>
    );
}