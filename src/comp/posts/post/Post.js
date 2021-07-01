import {useEffect, useState} from "react";
import {getPost} from "../../api/Api";

export default function Post({item1}) {
// let {match: {params: {id}}} = props;
// console.log(props)
    console.log(item1)
    let [post, setPost] = useState({});
    useEffect(() => {
        getPost(item1.id).then(value => {
            setPost({...value.data});
        });
    }, []);
    return (
        <div>
            {post.id} - {post.body}
            {/*<PostDetails item2={post}/>*/}
        </div>
    );
}
