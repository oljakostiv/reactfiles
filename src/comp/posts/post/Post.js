export default function Post({item1}) {

    return (
        <div className={'postStyle'}>
            {item1.id} - {item1.body}
        </div>
    );
}
