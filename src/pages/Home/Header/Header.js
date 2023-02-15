import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='max-h-[500px] header '>
            <div className='w-full h-full bg-[#1b1b1bd3] px-3 mx-auto flex justify-center items-center'>
                <div className='text-white max-w-[700px]  text-center mt-[-20px]'>
                    <h3 className='font-bold text-4xl mb-2'>Welcome to Developers Society!</h3>
                    <p className='font-semibold text-lg'>Join us to discuss the latest trends in software development and connect with developers from around the world.</p>
                    <p className='font-semibold text-lg'>Here you can find the perfect coder or developer to help you create the perfect software for your needs.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Header;