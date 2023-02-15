import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='px-3 mx-auto bg-secondary h-[100vh]'>
            <div className="flex justify-center items-center h-[100vh]">
                <form className='w-full flex justify-center flex-col px-8 py-14 max-w-[500px] shadow-lg'>
                    <h3 className='text-center font-bold text-xl mb-10'>SignIn</h3>
                    <input type="text" placeholder="Email" className="input input-bordered w-full block mb-5" />
                    <input type="password" placeholder="Password" className="input input-bordered w-full block" />
                    <input className='btn btn-primary mt-4' type="submit" value={'SignIn'} />
                    <p className='text-white font-semibold mt-5'>Don't have an account <Link to={'/signUp'} className='text-blue-800 underline ml-1'>SignIn</Link></p>
                    <button className='btn btn-outline btn-primary mt-4'>Continue with Google</button>
                </form>
            </div>

        </div>
    );
};

export default SignIn;