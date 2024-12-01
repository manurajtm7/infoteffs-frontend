import React from 'react'

function SkeletonLoad() {
    return (
        <div className='w-full h-4/5 flex gap-1 flex-col  items-center p-1 '>
            <div className='w-full h-4/5 bg-zinc-900 rounded animate-pulse delay-0'></div>
            <div className='w-full flex flex-col gap-2 mt-2'>
                <div className='w-1/2 h-3 bg-zinc-900 rounded-full animate-pulse delay-0'></div>
                <div className='w-full h-3 bg-zinc-900 rounded-full animate-pulse delay-0'></div>
            </div>
        </div>
    )
}

export default SkeletonLoad