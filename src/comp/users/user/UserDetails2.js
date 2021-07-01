import {useEffect, useState} from "react";

export default function UserDetails2({location:{state}}) {
    let [user, setUser] = useState({});
    useEffect(()=>{
        setUser({...state});
    }, [state]);
    return (
      <div>
          <hr/>
          {user.id} - {user.username} - {user.email}.
      </div>
    );
}