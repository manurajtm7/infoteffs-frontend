import React from 'react'
import { ProfileImage } from '../../constants'

function CommentCard() {
    return (
        <div className='w-full min-h-10 max-h-20'>
            <div className='min-w-max max-w-sm h-8 flex gap-1 items-center'>
                <img src={ProfileImage} alt="profile image"
                    className='w-6 h-6 rounded-full object-cover'
                />
                <p className='text-xs truncate opacity-70'>Test name</p>
            </div>

            <p className='text-sm opacity-40 mt-1 '>
                Commented on this post
            </p>
        </div>
    )
}

export default CommentCard