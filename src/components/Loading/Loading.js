import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
       <div className='flex justify-center items-center w-full h-[100vh]'>
         <div className="lds-ripple"><div></div><div></div></div>
       </div>
    );
};

export default Loading;