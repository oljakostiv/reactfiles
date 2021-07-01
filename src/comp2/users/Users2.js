import User2 from "./user/User2";

export default function Users2({itemsUsers}) {
    return (
        <div>
            {
                itemsUsers.map(value=> <User2 key={value.id} itemUser={value}/> )
            }
        </div>
    );
}