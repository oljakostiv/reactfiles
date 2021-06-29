import {useEffect, useState} from "react";
import {getComments} from "../servises/Api";
import Comment from "./comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => {
            setComments([...value.data])
        })
    }, []);

    return (
        <div>
            {
                comments.map(c => <h5 key={c.id}><Comment item3={c}/></h5>)
            }
        </div>
    );
}