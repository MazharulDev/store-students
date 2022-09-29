import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const [email, setEmail] = useState('');
    const handleEmailChange = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handleBtn = () => {
        sendPasswordResetEmail(email);
        toast.success("Reset link send successfully")
        email.target.reset();
    }
    if (error) {
        toast.error(error?.message)
    }
    if (sending) {
        return <p>Loading...</p>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <button className='p-2 bg-green-600 text-white'><Link to="/login">Back to Login</Link></button>
                <div className="card-body">
                    <h2 className="card-title">Enter Your Email</h2>
                    <input onChange={handleEmailChange} className='input input-bordered w-full max-w-xs my-4' type="email" name="email" placeholder='Enter Your Email' required />
                    <div className="card-actions justify-end">
                        <button onClick={handleBtn} className="btn btn-primary">Send code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;