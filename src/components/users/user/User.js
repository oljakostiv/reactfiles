import {useState} from "react";
import {getPosts} from "../../servises/Api";
import PostsDetails from "../../details/PostsDetails";
import './User.css';

export default function User({item}) {

    let [postDetails, setPostDetails] = useState(null);

    return (
        <div className={'userProfile'}>
            <div className={'userName'}>{item.id} - {item.name} - {item.username}</div>
            <div className={'userEmail'}>{item.email}</div>
            <button className={'btnUser'} onClick={() =>
                {
                    getPosts(item.id).then(value => setPostDetails(value.data))
                }
            }>click!
            </button>

            {
                postDetails && <PostsDetails item1={postDetails}/>
            }
            <hr/>
        </div>
    );
}

// export default function User({item}) {
//
//     let [postDetails, setPostDetails] = useState(null);
//     let [toggle, setToggle] = useState('show');
//     return (
//         <div>
//             <div>{item.id} - {item.name} - {item.username}</div>
//             <div>{item.email}</div>
//             <div className={toggle}>
//                 {
//                     getPosts(item.id).then(value => setPostDetails(value.data))
//                 }
//             </div>
//             <button onClick={() => {
//             if (toggle === 'hide') {
//                 setToggle('show');
//             } else if (toggle === 'show') {
//                 setToggle('hide');
//             }
//             }}>click!
//             </button>
//
//             {
//                 postDetails && <PostsDetails item1={postDetails}/>
//             }
//             <hr/>
//         </div>
//     );
// }