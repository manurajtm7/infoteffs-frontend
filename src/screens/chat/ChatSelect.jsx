import { QrCode, ScanQrCode } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ChatSelect = () => {
    return (
        <div className="min-h-[70vh] text-white flex flex-col items-center justify-center gap-4 text-center">
            <h1 className=" text-2xl font-bold">QR & Chat Playground</h1>
            <Link to="/chat" className="w-48  bg-white text-black  p-2   rounded-lg  hover:text-white hover:bg-transparent  hover:border transition-all delay-100">Go to Chat</Link>
            <Link to="/qr-gen" className="w-48  bg-white text-black  p-2   rounded-lg  hover:text-white hover:bg-transparent  hover:border transition-all delay-100 flex gap-2 items-center justify-center"> <QrCode />  Generate QR</Link>
            <Link to="/qr-scan" className="w-48  bg-white text-black  p-2   rounded-lg  hover:text-white hover:bg-transparent  hover:border transition-all delay-100 flex gap-2 items-center justify-center"> <ScanQrCode /> Scan QR</Link>
        </div>
    )
}

export default ChatSelect