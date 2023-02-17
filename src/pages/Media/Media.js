import React from 'react';
import { useQuery } from 'react-query';
import PostsCard from './PostsCard';

const Media = () => {
    const {data:posts= [],}= useQuery({
        queryKey:['posts'],
        queryFn: async()=>{
            const res = await fetch('https://developer-society-server.vercel.app/blogs');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='px-3 lg:px-5 py-10 mx-auto'>
            <div className="flex gap-5">
               {
                posts.map(post => <PostsCard key={post._id} post={post}></PostsCard>)
               }
            </div>
            
        </div>
    );
};

export default Media;