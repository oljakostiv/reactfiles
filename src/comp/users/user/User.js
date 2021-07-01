import {Link, Route} from "react-router-dom";
import Posts from "../../posts/Posts";
import {useState} from "react";
import {getPostOfUsers} from "../../api/Api";

export default function User({item, url}) {

    const [postOfUsers, setPostOfUsers] = useState([]);
    let [flag, setFlag] = useState(false);
    function click (){
        getPostOfUsers(item.id).then(value=>setPostOfUsers(value.data))
        setFlag(!flag);
    }
    return (
        <div>
            <div>
                {item.id} - {item.name} - <Link to={url + '/' + item.id + '/posts/'}>
                <button onClick={click}>posts</button></Link>
            </div>

            <Route path={url + '/' + item.id + '/posts/'} render={
                (props) => flag && <Posts postOfUsers={postOfUsers} {...props}/>
            }/>
        </div>
    );
}