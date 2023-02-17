import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../AuthContext/AuthProvider';
import AddInfoModal from '../../components/AddInfoModal/AddInfoModal';
import Loading from '../../components/Loading/Loading';

const About = () => {
    const { user } = useContext(AuthContext);
    const imgbbApi = process.env.REACT_APP_imgbb_key;
    const { register, handleSubmit, } = useForm();
    const [updateProfile,setUpdateProfile] = useState(false);
    const { data: userInfo, isLoading, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`https://developer-society-server.vercel.app/users-info/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleAddInfo = data => {
        if (!user) {
            toast.error('Please SignIn First');
            return;
        }
        if (data.image.length > 0) {
            const image = data.image[0];
            const formData = new FormData();
            formData.append('image', image);
            fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    console.log(imgData.data.url);
                    const userDetails = {
                        ...data,
                        image: imgData.data.url,
                        regEmail: user?.email,
                    }
                    fetch('https://developer-society-server.vercel.app/users-info', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('insert data successfully');
                                refetch();
                            }
                        })
                        .catch(error => console.error(error))
                })

        }
        else {
            const userDetails = {
                ...data,
                regEmail: user?.email,
            }
            fetch('https://developer-society-server.vercel.app/users-info', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('insert data successfully');
                        refetch();
                    }
                })
                .catch(error => console.error(error))

        }


    }
    // if(isLoading){
    //     return <Loading></Loading>;
    // }
    return (
        <div className='px-3 mx-auto py-10'>
            <div className='flex justify-between'>
                <div className='w-[40%] shadow-lg p-6 h-[100%] relative'>
                    {
                        userInfo ?
                            <div className='text-primary flex flex-col justify-center items-center w-[100%] text-left'>
                                <div>
                                    <img src={userInfo.image} alt="profile" className='w-[150px] block mx-auto' />
                                </div>
                                <h3 className='text-xl font-bold'>{userInfo.name}</h3>
                                <p>{userInfo.email}</p>
                                <p>{userInfo.education}</p>
                                <p>{userInfo.address}</p>
                                <label onClick={()=>setUpdateProfile(true)} htmlFor="my-modal-3" className='btn btn-primary bg-green-800 absolute top-3 right-5'>Update</label>

                 </div>
                            :

                            <form onSubmit={handleSubmit(handleAddInfo)} className='w-full text-black'>

                                <input {...register("name")} type="text" placeholder='Your Full Name' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                                <input  {...register("email")} type="text" placeholder='Your Email' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                                <input {...register("education")} type="text" placeholder='Education' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                                <input {...register("address")} name='address' type="text" placeholder='Your Address' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                                <input{...register("image")} type="file" className='mb-3 block border-primary w-[100%]' />
                                <input className='btn btn-primary' type="submit" value={'Add Now'} />

                            </form>
                    }

                </div>
                <div className='w-[60%]'>
                    <div className='p-4 border max-w-[700px] mx-auto'>
                        <div className='flex items-center'>
                            <img src="" alt="profile" className='w-[80px] h-[80px] rounded-full' />
                            <h3>Ekramul hasan</h3>
                        </div>
                        <div>
                            <img src='' alt='thumbnail' />
                            <p></p>
                        </div>
                    </div>

                </div>
            </div>
            {
                updateProfile &&
                <AddInfoModal refetch={refetch} userInfo={userInfo} setUpdateProfile={setUpdateProfile}></AddInfoModal>
            }

        </div>
    );
};

export default About;