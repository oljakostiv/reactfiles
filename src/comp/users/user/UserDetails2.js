import {useEffect, useState} from "react";
import './User.css'


export default function UserDetails2({location:{state}}) {
    let [user, setUser] = useState({});
    useEffect(()=>{
        setUser({...state});
    }, [state]);
    return (
      <div className={'userDetailsStyle'}>
          {user.id} - {user.username} - {user.email}.
      </div>
    );
}