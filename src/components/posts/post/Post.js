export default function Post({item2}){
    return (
        <div>
            <div>
                {item2.id} - Title: {item2.title}.
            </div>
            <div>
                Body: {item2.body}.
            </div>
            <hr/>
        </div>
    );
}