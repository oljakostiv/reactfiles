export default function User2({itemUser}) {
    return (
       <div>
           <div>{itemUser.id} - {itemUser.email} - {itemUser.first_name} - {itemUser.last_name}</div>
           <img src={itemUser.avatar} alt="avatar"/>
       </div>
    )
}