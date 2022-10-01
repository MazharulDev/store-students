import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowInfo = () => {
    const id = useParams()
    const [student, setStudent] = useState({})
    useEffect(() => {
        fetch(`https://store-students.onrender.com/students/${id.id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [id])
    const { firstName, middleName, lastName, AddressOne, AddressTwo, City, className, divition, landmark, pincode, roll } = student;
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold'>Student Information</h2>
            </div>
            <div className='mt-5 text-xl'>
                <p className='mb-2'>First Name: <span className='font-bold'>{firstName}</span> </p>
                <p className='mb-2'>Middle Name: <span>{middleName ? middleName : <span className='text-red-400'>Not Inputed</span>}</span> </p>
                <p>Last Name: {lastName}</p>
                <p>Address-1: {AddressOne}</p>
                <p>Address-2: {AddressTwo}</p>
                <p>City: {City}</p>
                <p>Class: {className}</p>
                <p>Divition: {divition}</p>
                <p>Landmark: {landmark}</p>
                <p>Pin Code: {pincode}</p>
                <p>Roll: {roll}</p>
            </div>
        </div>
    );
};

export default ShowInfo;