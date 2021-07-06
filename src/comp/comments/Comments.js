import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Comments (){
    const comments = useSelector((state) => state.comments)
    const dispatch2 = useDispatch()

    const FetchComments = async () => {
        const data2 = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json()
        dispatch2 ({
            type: 'SET_COMMENTS',
            payload: data2
        })
    }

    useEffect(() => {
        FetchComments()
    }, [])

    return (
        <div>
            {
                comments.map(comments => (
                    <div key={comments.id}>
                        {comments.id} - {comments.name}
                    </div>
                ))
            }
        </div>
    )


}