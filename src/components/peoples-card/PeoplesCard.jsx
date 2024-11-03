import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileImage } from '../../constants';
import { Send, SendHorizonal, SendToBack } from 'lucide-react';

function PeoplesCard({ data }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/user/profile/:${data._id}`)}
            className='w-full h-24 bg-zinc-900 px-5 p-3 flex gap-5 items-center justify-between rounded-md'>
            <div className='flex items-center gap-5'>
                <div className='w-16 h-16   overflow-hidden rounded-full'>
                    <img src={data?.image || ProfileImage} alt="profile" className='w-full h-full object-cover ' />
                </div>
                <div>
                    <h1 className='text-lg font-medium'>{data?.name}</h1>
                    <p className='text-xs opacity-70'>{data?.email}</p>
                </div>
            </div>
            <div>
                <span className='text-blue-500'>follow</span>
            </div>
        </div>
    )
}

export default PeoplesCard