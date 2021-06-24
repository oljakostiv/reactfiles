export default function Post({item, selectPost}){
    return (
        <div>
            <div>{item.userId}:</div>
            <div>{item.id} - {item.title}.</div>
            <div>{item.body}.</div>
            <button onClick={()=>{
                selectPost(item.id);
            }}>click me!</button>
        </div>
    );
}