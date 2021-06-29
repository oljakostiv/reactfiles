import Comment from "../../comments/comment/Comment";
import {getPostComments} from "../../servises/Api";
import {useState} from "react";


export default function PostComments({commentsOfPosts}) {

    return (
        <div>

            {
                commentsOfPosts.map(value=> <h6>{value.email}</h6>)
            }
        </div>
    );
}