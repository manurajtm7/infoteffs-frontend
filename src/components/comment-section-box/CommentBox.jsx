import React from 'react'
import CommentCard from '../comment-card/CommentCard'
import { Send } from 'lucide-react'

function CommentBox({ commentRef }) {

    return (
        <div  className='w-full min-h-[30vh] max-h-[40vh] gradient-2 p-5 '>
            <h1 className='text-sm font-medium'>Comments</h1>
            <div className='max-h-[25vh] mt-5 flex flex-col gap-3 last:border-b last:p-2 border-zinc-600 overflow-auto'>
                {
                    Array.from({ length: 6 }).map((item) => (
                        <CommentCard />
                    ))
                }

            </div>
            <div ref={commentRef} className='mt-3  px-4 flex border border-zinc-700  rounded-full'>
                <input type="text" placeholder='add comment' className='w-full h-9 bg-transparent  outline-none focus:placeholder:text-blue-200' />
                <button>
                    <Send size={15} className='text-blue-500' />
                </button>
            </div>
        </div>
    )
}

export default CommentBox