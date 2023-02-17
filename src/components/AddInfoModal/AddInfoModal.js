import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';

const AddInfoModal = ({ refetch, userInfo,setUpdateProfile}) => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, } = useForm();
    const imgbbApi = process.env.REACT_APP_imgbb_key;
    const handleUpdateInfo = (data) => {
        if (data.image.length> 0) {
            console.log('hi')
            const image = data.image[0];
            const formData = new FormData();
            formData.append('image', image);
            fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    console.log(imgData)
                    const userDetails = {
                        ...data,
                        image: imgData.data.url,
                    }
                    fetch(`https://developer-society-server.vercel.app/users-info/${user?.email}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount > 0) {
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
                image: userInfo.image,
            }
            fetch(`https://developer-society-server.vercel.app/users-info/${user?.email}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Updated data successfully');
                        setUpdateProfile(false);
                        refetch();
                    }
                })
                .catch(error => console.error(error))

        }

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit(handleUpdateInfo)} className='w-full text-black px-3 py-2'>

                        <input defaultValue={userInfo.name} {...register("name")} type="text" placeholder='Your Full Name' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                        <input defaultValue={userInfo.email} {...register("email")} type="text" placeholder='Your Email' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                        <input defaultValue={userInfo.education} {...register("education")} type="text" placeholder='Education' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                        <input defaultValue={userInfo.address}{...register("address")} name='address' type="text" placeholder='Your Address' className='mb-3 input input-bordered border-spacing-2 block border-primary w-[100%]' />
                        <input{...register("image")} type="file" className='mb-3 block border-primary w-[100%]' />
                        <input className='btn btn-primary' type="submit" value={'Update'}/>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddInfoModal;