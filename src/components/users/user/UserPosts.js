


export default function UserPosts({itemUserPosts}) {

    return (
        <div>
            {
             itemUserPosts.map(value=> <div>{value.title}</div>)
            }
        </div>
    );
}