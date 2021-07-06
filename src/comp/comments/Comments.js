import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Comments.css'

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
        <div className={'commentsStyle'}>
            Comments:
            <div className={'commentsFlex'}>
                {
                    comments.map(comments => (
                        <div className={'commentStyle'} key={comments.id}>
                            <span>{comments.id}:</span> {comments.name}.
                        </div>
                    ))
                }
            </div>
        </div>
    )


}