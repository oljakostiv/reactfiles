export default function Comment({item: {postId, id, name, email, body}}) {
    return (
        <div>
            <h2>{postId}/{id}</h2>
            <h3>{name}</h3>
            <p>
                {email}
            </p>
            <p>
                {body}
            </p>
        </div>
    );
}