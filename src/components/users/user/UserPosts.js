


export default function UserPosts({itemUserPosts}) {

    return (
        <div>
            {
             itemUserPosts.map(value=> <div>{value.id} - {value.title}</div>)
            }
        </div>
    );
}