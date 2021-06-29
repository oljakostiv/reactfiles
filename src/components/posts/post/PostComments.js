export default function PostComments({commentsOfPosts}) {

    return (
        <div>
            {
                commentsOfPosts.map(value=> <h5>{value.id} - {value.email}</h5>)
            }
        </div>
    );
}