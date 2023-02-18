import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading/Loading';
import MediaBlogsCard from './MediaBlogsCard'

const WithMedia = () => {
    const { data: mediaBlogs, isLoading, refetch } = useQuery({
        queryKey:['mediaBlogs'],
        queryFn: async () => {
            const res = await fetch(`https://developer-society-server.vercel.app/blogs-media`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='px-3 py-10 max-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
           { mediaBlogs.map(mediaBlog=> <MediaBlogsCard key={mediaBlog._id} mediaBlog={mediaBlog}></MediaBlogsCard>)}
        </div>
        </div>
    );
};

export default WithMedia;