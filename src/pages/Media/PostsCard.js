import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostsCard = ({ post }) => {
    const { title, image, content } = post;
    return (
        <div className='p-5 py-3 border border-spacing-1 border-black w-[48%] h-fit'>
           {image&& <img src={image} alt="thumbnail" className='block max-w-[400px] max-h-[400px] mx-auto mb-3'/>}
            {title &&<h2 className='font-bold text-2xl'>{title}</h2>}
            <p>{content.slice(0,200)}....</p>

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
               <Link to={``}> <button className='btn btn-primary absolute right-0 bottom-0'>Details</button></Link>
            </div>
        </div>
    );
};

export default PostsCard;