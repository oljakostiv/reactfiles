export default function User({item: {userId, id, title, body}}) {
    return (
        <div>
            <h2>{userId}/{id}</h2>
            <h4>{title}</h4>
            <p>
                {body}
            </p>
        </div>
    );
}