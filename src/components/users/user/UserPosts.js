import "./User.css"
export default function UserPosts({itemUserPosts}) {

    return (
        <div>
            {
             itemUserPosts.map(value=> <div key={value.id} className={"userPostsStyle"}>{value.id} - {value.title}</div>)
            }
        </div>
    );
}