import React, { useEffect } from 'react'

function NotificationCard({ information, setNotify, time }) {

    useEffect(() => {
        setTimeout(() => setNotify(false), time || 2000)
    }, [])

    return (
        <div className='w-max max-w-[90%] md:max-w-[50%] text-xs text-white gradient  px-2 p-1 border border-zinc-800 rounded-md fixed bottom-[12%] left-1/2 -translate-x-1/2 z-[100] transition-all'>{information || "welcome"}</div>
    )
}

export default NotificationCard