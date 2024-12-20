import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileImage } from '../../constants';


function PeoplesCard({ data }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/user/profile/:${data._id}`)}
            className='w-full h-24 bg-zinc-900 px-5 p-3 flex gap-5 items-center justify-between rounded-md'>
            <div className='w-[70%]  flex items-center gap-5'>
                <div className='w-16 h-16   overflow-hidden rounded-full'>
                    <img src={data?.image || ProfileImage} alt="profile" className='w-full h-full object-cover ' />
                </div>
                <div className='max-w-[50%] '>
                    <h1 className='font-medium truncate'>{data?.name}</h1>
                    <p className='text-xs opacity-70 truncate'>{data?.email}</p>
                </div>
            </div>
            <div>
                <span className='text-blue-500'>follow</span>
            </div>
        </div>
    )
}

export default PeoplesCard