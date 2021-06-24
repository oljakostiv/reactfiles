export default function PostsDetails({item1}) {
    return (
        <div>
            {item1.map(value => <h4 key={value.id}>{value.id}. {value.title}</h4>)}
        </div>
    );
}