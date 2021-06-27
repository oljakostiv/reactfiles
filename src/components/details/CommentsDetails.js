export default function CommentsDetails({item2}) {
    return (
        <div>
            {
                item2.map(value =><h6 key={value.id}>{value.id}: {value.name}. {value.email}</h6>)
            }
        </div>
    );
}