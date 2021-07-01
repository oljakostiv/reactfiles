import {Link} from "react-router-dom";

export default function Post({item1, url}) {
    return (
        <div>
            {item1.id} - {item1.title} - <Link to={url + '/' + item1.id}>post details</Link>
        </div>
    );
}