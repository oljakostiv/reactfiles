import {Link} from "react-router-dom";

export default function Comment({item2, url}) {
    return (
        <div className={'commentStyle'}>
            {item2.id} - {item2.name}
            <div className={'linkCommentStyle'}><Link to={url + '/' + item2.id}>comment details</Link></div>
        </div>
    );
}