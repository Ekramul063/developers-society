import React from 'react';

const TextBlogsCard = ({ blog }) => {
    const { title, content } = blog;
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl">
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

export default TextBlogsCard;