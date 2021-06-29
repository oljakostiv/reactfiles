import "./Comment.css"

export default function Comment({item3}) {
    return (
        <div className={"commentFile"}>
            <div className={"commentEmail"}>
                {item3.id} - e-mail: {item3.email}
            </div>
            <div>
                Body: {item3.body}.
            </div>
        </div>
    );
}