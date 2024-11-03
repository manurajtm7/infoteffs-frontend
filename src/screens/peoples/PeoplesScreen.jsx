import React, { useEffect, useState } from 'react'
import { LoadingAnimationThree, LoadingAnimationTwo, PeoplesCard } from '../../components';

function PeoplesScreen() {

    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(false);



    const productionUrl = `${import.meta.env.VITE_REACT_APP_LOCAL_HOST}`;


    useEffect(() => {
        const handleFetchProfieDetails = async () => {
            setLoading(true);
            const response = await fetch(`${productionUrl}/peoples`, {
                method: "POST",
                body: JSON.stringify({
                    authKey: localStorage.getItem("authKey"),
                    userId: localStorage.getItem("userId"),
                }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                setPeoples((await response.json()).data);
                setLoading(false);
            } else {
                window.alert("error occured , try agin later");
                setTimeout(() => {
                    setLoading(false);
                }, 8000);
            }
        };
        handleFetchProfieDetails();
    }, []);

    return (
        <div className='w-full h-full text-white gradient-2 grid place-items-center overflow-auto'>
            <div className='w-full md:w-1/3 h-full overflow-hidden'>

                <div className='w-full text-start'>
                    <h1 className='font-semibold text-sm mt-5 px-5'>Find peoples</h1>
                </div>

                <div className='w-full h-4/5  mt-5 p-5 flex flex-col gap-5 overflow-auto'>
                    {
                        loading ? 
                         (
                            <div className='w-full h-full grid place-items-center'>
                               <LoadingAnimationTwo />
                            </div>
                         )
                        :
                        peoples.map((data, index) => (
                            <PeoplesCard key={index} data={data} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default PeoplesScreen