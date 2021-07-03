import {Link} from "react-router-dom";

export default function Post({item1, url}) {
    return (
        <div className={'postStyle'}>
            {item1.id} - {item1.title}
            <div className={'linkPostStyle'}>
                <Link to={url + '/' + item1.id}>post details</Link>
            </div>
        </div>
    );
}