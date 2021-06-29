import "./CommentsDetails.css"
export default function CommentsDetails({item2}) {
    console.log(item2);

    return (
        <div className={'CommentsStyle'}>
            {item2.id} - {item2.name} - {item2.body}.
        </div>
    );
}