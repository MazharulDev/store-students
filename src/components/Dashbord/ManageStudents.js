import React from 'react';
import { useQuery } from 'react-query'
import { FiEye } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const ManageStudents = () => {
    const { data: students, isLoading, refetch } = useQuery('taskList', () => fetch('https://store-students.onrender.com/students', {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            const url = `https://store-students.onrender.com/students/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }

    }
    return (
        <div>
            <h2 className='text-2xl font-bold'>Manage Students</h2>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Roll No.</th>
                                <th>View/Edit/Delete</th>
                            </tr>
                        </thead>
                        {
                            students?.map((student, index) =>
                                <tbody key={student._id}>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{student.firstName} {student.lastName}</td>
                                        <td>{student.className}-{student.divition}</td>
                                        <td>{student.roll}</td>
                                        <td className='flex items-center gap-6'>
                                            <Link to={`/student-info/${student._id}`}><button><FiEye className='text-2xl' /></button></Link>
                                            <Link to={`/edit-info/${student._id}`}><button><AiOutlineEdit className='text-2xl' /></button></Link>
                                            <button onClick={() => handleDelete(student._id)}><RiDeleteBinLine className='text-2xl' /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageStudents;