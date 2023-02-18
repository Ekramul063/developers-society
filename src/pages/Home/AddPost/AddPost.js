import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUpload } from "react-icons/fa";
import { useQuery } from 'react-query';
import { AuthContext } from '../../../AuthContext/AuthProvider';

const AddPost = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit,reset } = useForm();
    const imgbbApi = process.env.REACT_APP_imgbb_key;
    const [makeDisable,setMakeDisable]=useState(false);
    const { data: blogs, isLoading, refetch } = useQuery({
        queryKey:['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://developer-society-server.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    })
    const handlePost = data =>{
        if (!user) {
            toast.error('Please SignIn First');
            return;
        }
        console.log(data.image.length,data);
        
        // if((data.image.length < 1 )|| data.content ===''){
        //     toast.error('No content to post');
        //     return;
        // }
         

        if (data.image.length > 0) {
            setMakeDisable(true);
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
                    console.log(imgData.data.url);
                    const userDetails = {
                        ...data,
                        image: imgData.data.url,
                        regEmail: user?.email,
                        media:true,
                    }
                    console.log(userDetails);
                    fetch('https://developer-society-server.vercel.app/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                reset();
                                toast.success('insert Post successfully');
                                refetch();
                                setMakeDisable(false);
                            }
                        })
                        .catch(error => console.error(error))
                })

        }
        else {
            setMakeDisable(true);
            const userDetails = {
                ...data,
                regEmail: user?.email,
                media:false,
            }
            fetch('https://developer-society-server.vercel.app/blogs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        reset();
                        toast.success('insert Post successfully');
                        refetch();
                        setMakeDisable(false)
                    }
                })
                .catch(error => console.error(error))

        }
    }
    return (
        <div className='px-3 mx-auto py-10'>
            <div className="flex justify-between items-center max-w-[1100px] mx-auto lg:flex-row md:flex-row flex-col-reverse">
                <div className='lg:w-[56%] md:w-[56%] w-full px-9 py-6 shadow-lg bg-white'>
                    <form onSubmit={handleSubmit(handlePost)}>
                        <div className="form-control">
                            <input  {...register("image")} type="file" id="img" style={{ display: "none" }} />
                            <label htmlFor="img" className='text-center'>
                                <span className='flex justify-center text-3xl'> <FaUpload></FaUpload></span>
                                Click me to upload file
                            </label>

                        </div>
                        <input {...register("title")} type="text" placeholder='Post Title' className='my-3 h-[30px] input input-bordered border-spacing-2 block w-[100%]' />

                        <div>
                            <textarea  {...register("content")} className="textarea textarea-bordered w-full h-[180px] mt-3" placeholder="Type here....."></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={makeDisable} type='submit' className="btn btn-primary">POST</button>
                        </div>
                    </form>

                </div>
                <div className='lg:w-[42%] md:w-[42%] px-9 py-6 mb-5 lg:mb-0 md:mb-0'>
                    <p className='font-bold text-3xl text-black'>
                        "Writing a blog about coding solutions can be a great way to share your knowledge, inspire others, and make a positive impact on the developer community."
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AddPost;