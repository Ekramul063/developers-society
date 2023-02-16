import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const SignIn = () => {
    const {handleUserSignIn,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error,setError]= useState('');
    const handlesignIn = event =>{
        event.preventDefault();
         const form = event.target;
         const email = form.email.value; 
         const password = form.password.value; 
         console.log(email,password)
         handleUserSignIn(email,password)
        .then(result =>{
            const user = result.user;
            navigate('/');
            toast('Wellcome to Developer society');
            form.reset();
        })
        .catch(error => {setError(error.message); console.error(error)});
    }
    const SignInWithGoogleAccount = ()=>{
        googleSignIn()
        .then(result=>{
            navigate('/');
            toast('Wellcome to Developer society');
        })
        .catch(error => {setError(error.message); console.error(error)})
    }
    return (
        <div className='px-3 mx-auto bg-secondary h-[100vh]'>
            <div className="flex justify-center items-center h-[100vh]">
                <form onSubmit={handlesignIn} className='w-full flex justify-center flex-col px-8 py-14 max-w-[500px] shadow-lg'>
                    <h3 className='text-center font-bold text-xl mb-10'>SignIn</h3>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full block mb-5 text-primary" />
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full block" />

                    <input className='btn btn-primary mt-4' type="submit" value={'SignIn'} />
                    <p className='text-red-800 mt-3 font-semibold'>{error}</p>
                    <p className='text-white font-semibold mt-5'>Don't have an account <Link to={'/signUp'} className='text-blue-800 underline ml-1'>SignUp</Link></p>
                    <button onClick={SignInWithGoogleAccount} className='btn btn-outline btn-primary mt-4'>Continue with Google</button>
                </form>
            </div>

        </div>
    );
};

export default SignIn;