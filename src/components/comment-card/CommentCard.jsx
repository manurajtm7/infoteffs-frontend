import React from 'react'
import { ProfileImage } from '../../constants'

function CommentCard({ userId, comment, createdAt }) {

    return (
        <div className='w-full h-max  flex flex-col gap-1'>
            <div className='min-w-max max-w-sm h-8 flex gap-1 items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <img src={userId?.image || ProfileImage} alt="profile image"
                        className='w-6 h-6 rounded-full object-cover'
                    />
                    <p className='text-xs truncate opacity-70'>{userId?.name}</p>

                </div>
                <p className='text-[10px] opacity-40'>{new Date(createdAt).toDateString()}</p>
            </div>

            <p className='text-sm opacity-40 mt-1 px-5'>
                {comment}
            </p>
        </div>
    )
}

export default CommentCard