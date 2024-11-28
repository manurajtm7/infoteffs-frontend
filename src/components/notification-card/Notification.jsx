import React, { useEffect } from 'react'

function Notification({ information, setNotify, time }) {

    useEffect(() => {
        setTimeout(() => setNotify(false), time || 2000)
    }, [])

    return (
        <div className='w-max max-w-[90%] md:max-w-[50%] text-xs text-white gradient  px-2 p-1 border border-zinc-800 rounded-md fixed bottom-[10%] left-1/2 -translate-x-1/2  transition-all'>{information || "notification"}</div>
    )
}

export default Notification