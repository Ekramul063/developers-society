import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading/Loading';
import TextBlogsCard from './TextBlogsCard';

const WithoutMedia = () => {
    const { data: textBlogs, isLoading, refetch } = useQuery({
        queryKey:['textBlogs'],
        queryFn: async () => {
            const res = await fetch(`https://developer-society-server.vercel.app/blogs-text`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='px-3 pt-10 max-auto h-[400px]'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {textBlogs.map(blog =><TextBlogsCard key={blog._id} blog={blog}></TextBlogsCard> )}

            </div>
            
        </div>
    );
};

export default WithoutMedia;