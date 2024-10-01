import { Check, ImageUp, X } from 'lucide-react'
import React, { useState } from 'react'
import { LoadingAnimationThree, LoadingAnimationTwo } from '../index'
import { toast } from 'react-toastify'


const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST

function ProfileImageUpdate({ image, isActive, setIsAtive }) {
    const [preview, setPreview] = useState(null)
    const [profileImage, setProfileImage] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {

        const formData = new FormData();
        formData.append("profile_update", profileImage)
        formData.append("user_id", localStorage.getItem("userId"))
        formData.append("auth_key", localStorage.getItem("authKey"))
        setLoading(true);

        const response = await fetch(`${productionUrl}/user/update/profile`, {
            method: "PUT",
            body: formData
        })

        if (response.ok) {
            toast.success("Successfully updated user profile");
            setLoading(false);
            window.location.reload()
        }
        else {
            toast.error("An error occured while updating profile picture")
            setLoading(false)
        }

    }

    return (
        <div className={`w-full ${!isActive ? "left-full transition-colors" : " left-0 transition-transform"}   h-[40vh]  flex items-center justify-center absolute top-0  z-[200] transition-transform`}>
            <div className='w-[90%] md:w-1/3 h-full meta-gradient p-5 flex flex-col gap-5 items-center relative '>

                <div className='w-full grid place-items-end relative z-[100]'>
                    <X onClick={() => setIsAtive(false)} />
                </div>
                <img src={preview || image} alt="user current profile image" className='w-28 h-28 rounded-full object-cover object-center' />
                <p>Update your profile picture</p>
                <div className='w-1/2 flex  items-center justify-center'>
                    <div
                        className='w-1/3 h-10 bg-transparent  rounded-md grid place-items-center '>
                        <input type="file" className='w-full h-full absolute left-0 top-0 opacity-0'
                            onChange={(e) => {
                                setProfileImage(e.target.files[0])
                                const fileReader = new FileReader();
                                fileReader.onloadend = () => {
                                    setPreview(fileReader.result);
                                };
                                fileReader.readAsDataURL(e.target.files[0]);
                            }}
                        />
                        <ImageUp />
                    </div>

                    {
                        preview && (
                            <button onClick={handleSubmit}>
                                {
                                    loading ? <LoadingAnimationTwo /> : <Check color='green' className='border border-green-600 rounded relative z-[200]' />
                                }
                            </button>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProfileImageUpdate