import "./Post.css"
export default function PostComments({commentsOfPosts}) {

    return (
        <div>
            {
                commentsOfPosts.map(value=> <h5 key={value.id} className={"postCommentsStyle"}><div className={"namePostComments"}>{value.id} - {value.name},</div> e-mail: {value.email}</h5>)
            }
        </div>
    );
}