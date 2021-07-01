import {Link, Route} from "react-router-dom";
import Posts from "../../posts/Posts";
import {useState} from "react";
import {getPostOfUsers} from "../../api/Api";

export default function User({item, url}) {

    const [postOfUsers, setPostOfUsers] = useState([])
    function click (){
        getPostOfUsers(item.id).then(value=>setPostOfUsers(value.data))
    }

    return (
        <div>
            <div>
                {item.id} - {item.name} - <Link to={url + '/' + item.id + '/posts/'}>
                <button onClick={click}>posts</button></Link>
            </div>

            <Route path={url + '/' + item.id + '/posts/'} render={
                (props) => <Posts postOfUsers={postOfUsers} {...props}/>
            }/>
        </div>
    );
}