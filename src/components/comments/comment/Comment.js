export default function Comment({item3}) {
    return (
        <div>
            <div>
                {item3.id} - E-mail: {item3.email}
            </div>
            <div>
                Body: {item3.body}.
            </div>
            <hr/>
        </div>
    );
}