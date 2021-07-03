import {Link} from "react-router-dom";
import './User.css'

export default function User({item, url}) {
    return (
        <div className={'userStyle'}>

            {/*{item.id} - {item.name} - <Link to={url + '/' + item.id}>user details</Link>*/}
            {item.id} - {item.name} (<Link to={
            {
                pathname: '/users/' + item.id,
                state: item
            }
        }>user details</Link>)
        </div>
    );
}