import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi'
import { MdManageAccounts } from 'react-icons/md'
import { HiOutlineLogout } from 'react-icons/hi'
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">


                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/"><FiUsers className='text-3xl' /> Add Student</Link></li>
                        <li><Link to="/manage-students"><MdManageAccounts className='text-3xl' /> Manage Students</Link></li>
                        <li><button onClick={() => signOut(auth)}><HiOutlineLogout className='text-3xl' /> Logout</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;