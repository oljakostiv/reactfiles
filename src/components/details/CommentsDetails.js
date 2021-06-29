export default function CommentsDetails({item2}) {
    // console.log(item2);

    return (
        <div>
            {
                item2.map(value => <h6>{value.email}</h6>)
            }
        </div>
    );
}