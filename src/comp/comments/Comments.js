import {useEffect, useState} from "react";
import {getComments} from "../api/Api";
import Comment from "./comment/Comment";
import {Route, Switch} from "react-router-dom";
import CommentDetails from "./comment/CommentDetails";

export default function Comments({match:{url}}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments([...value.data]);
        });
    }, []);
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item2={value} url={url}/> )
            }

            <Switch>
                <Route path={'/comments/:id'} component={CommentDetails}/>
            </Switch>
        </div>
    );
}