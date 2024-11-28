import React, { useEffect, useState } from 'react'
import CommentCard from '../comment-card/CommentCard'
import { Send } from 'lucide-react'
import Notification from '../notification-card/Notification';

const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;

function CommentBox({ postId, commentRef, hidden }) {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [refresh, setRefresh] = useState(false)
    const [notify, setNotify] = useState(false)

    const handleAddComment = async () => {
        if (!comment) return

        const response = await fetch(`${productionUrl}/posts/comment/create`, {
            method: "POST",
            body: JSON.stringify({
                authKey: localStorage.getItem("authKey"),
                userId: localStorage.getItem("userId"),
                postId,
                comment
            }),
            headers: { "Content-Type": "application/json" }
        })

        if (response.ok) {
            setRefresh(!refresh)
            setComment("")
            setNotify(true)
        }
        else {
            alert("failed to load")
        }
    }

    useEffect(() => {
        const handleFetchComments = async () => {
            const response = await fetch(`${productionUrl}/posts/comment/view`, {
                method: "POST",
                body: JSON.stringify({
                    authKey: localStorage.getItem("authKey"),
                    userId: localStorage.getItem("userId"),
                    postId,
                }),
                headers: { "Content-Type": "application/json" }
            })

            if (response.ok) {
                setComments((await response.json()).data)
            }
            else {
                alert("failed to load")
            }
        }
        handleFetchComments()
    }, [hidden, refresh])


    return (
        <div className='w-full h-max max-h-[40vh] gradient-2 p-5 '>
            <h1 className='text-sm font-medium'>Comments</h1>
            <div className='max-h-[25vh] mt-5 flex flex-col gap-3 last:border-b last:p-2 border-zinc-600 overflow-auto'>
                {
                    comments?.map((data, index) => (
                        <CommentCard {...data} key={index} />
                    ))
                }
                <div className='w-full border-b border-zinc-700'></div>
            </div>
            <div ref={commentRef} className='mt-3  px-4 flex border border-zinc-700  rounded-full'>
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    type="text" placeholder='add comment' className='w-full h-9 bg-transparent  outline-none focus:placeholder:text-blue-200' />
                <button onClick={handleAddComment}>
                    <Send size={15} className='text-blue-500' />
                </button>
            </div>

            {
                notify && <Notification information={"Comment added"} setNotify={setNotify} />
            }
        </div>
    )
}

export default CommentBox