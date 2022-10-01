import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FiUser } from 'react-icons/fi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Loading from '../../shared/Loading/Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    return (
        <div className='p-4 flex justify-between items-center ml-6 mr-10'>
            <h2 className='text-4xl font-bold'>Store-Students</h2>
            <div className='flex items-center gap-3 border py-2 px-6 rounded-lg'>
                <FiUser className='text-xl' />
                <p className='hidden lg:block'>{user?.email}</p>
            </div>
            <label htmlFor="dashbord-sidebar" className="drawer-button lg:hidden"><AiOutlineMenuUnfold /></label>
        </div>
    );
};

export default Header;