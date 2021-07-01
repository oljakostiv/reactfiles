import {Link, Route} from "react-router-dom";
import Posts from "../../posts/Posts";

export default function User({item, url}) {
    return (
        <div>
            <div>
                {item.id} - {item.name} - <Link to={url + '/' + item.id + '/posts/'}>posts</Link>
            </div>

            <Route path={url + '/' + item.id + '/posts/'} render={
                (props) => <Posts {...props}/>
            }/>
        </div>
    );
}