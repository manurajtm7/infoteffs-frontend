import React, { useContext, useState } from 'react'
import NotificationCard from './NotifyCard'
import { GlobalNotifyContext } from './NotifyContext'

function NotifyContainer() {
    const { notify, setNotify, text, timer, setTimer } = useContext(GlobalNotifyContext)

    return (
        <div className='w-full h-max  fixed top-0 left-0 bg-transparent '>
            {
                notify && (
                    <NotificationCard information={text} setNotify={setNotify} time={timer} />
                )
            }
        </div>
    )
}

function Notify() {
    const { setNotify, setText, setTimer } = useContext(GlobalNotifyContext)

    function notifyFunc(user_text, timer) {
        setNotify(true)
        setText(user_text)
        setTimer(timer)
    }

    return [notifyFunc]
}

export { NotifyContainer, Notify } 