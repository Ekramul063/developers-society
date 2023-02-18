import React from 'react';

const MediaBlogsCard = ({mediaBlog}) => {
    const {title,image,content} =mediaBlog;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-full h-[200px]' /></figure>
                <div className="card-body">
                    {title&&<h2 className="card-title">{title}</h2>}
                   {content&& <p>{content.slice(0,200)} ......</p>}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
    );
};

export default MediaBlogsCard;