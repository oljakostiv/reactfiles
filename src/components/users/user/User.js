export default function User({item}){
    return (
        <div>
            <div>
                {item.id} - Name: {item.name}.
            </div>
            <div>
                Address: {item.address.city}, {item.address.street}, {item.address.suite}.
            </div>
            <hr/>
        </div>
    );
}