import React from 'react';
import { useQuery } from 'react-query';

const WithMedia = () => {
    const { data: blogs, isLoading, refetch } = useQuery({
        queryKey:['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://developer-society-server.vercel.app/blogs/media`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='px-3 max-auto h-[400px]'>
            
        </div>
    );
};

export default WithMedia;