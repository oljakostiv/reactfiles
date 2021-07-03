import {useEffect, useState} from "react";
import {getComment} from "../../api/Api";

export default function CommentDetails({match: {params: {id}}}) {

    let [comment, setComment] = useState({});
    useEffect(() => {
        getComment(id).then(value => {
            setComment({...value.data});
        });
    }, [id]);
    return (
        <div className={'commentDetailsStyle'}>
            {comment.id} - {comment.body}.
        </div>
    );
}