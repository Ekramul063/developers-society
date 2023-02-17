import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';

const PostsCard = ({ post }) => {
    const { title, thumbnail, content } = post;
    return (
        <div className='p-5 py-3 border border-spacing-1 border-black w-[48%] h-fit'>
            <h2>{title}</h2>
            <p>{content}</p>

            <div className='flex mt-3 justify-between items-center relative'>
                <div className='text-xl flex items-center'>
                    <div>
                        <FaHeart></FaHeart>
                        <p><small>1.5K</small></p>
                    </div>
                    <div>
                        <FaCommentDots className='text-[22px] ml-8'></FaCommentDots>
                        <p className='ml-8'><small>700</small></p>
                    </div>

                </div>
                <button className='btn btn-primary absolute right-0'>Details</button>
            </div>
        </div>
    );
};

export default PostsCard;