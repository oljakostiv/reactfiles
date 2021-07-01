import {useEffect, useState} from "react";
import {getPost} from "../../api/Api";


export default function PostDetails({match: {params: {id}}}) {

    let [post, setPost] = useState({});
    useEffect(() => {
        getPost(id).then(value => {
            setPost(...[value.data]);
        });
    }, []);
    return (
        <div>
            <hr/>
            {post.id}-{post.body}.
        </div>
    );
}
