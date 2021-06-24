import Post from "./post/Post";

export default function Posts({items, selectPost}) {

    return (
        <div>
            {
                items.map(p=><Post key={p.id} item={p} selectPost={selectPost}/> )
            }
        </div>
    );
}