import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddStudent = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.roll.length !== 2) {
            return toast.error("Roll must 2 digits should be given")
        }
        if (data.pincode.length !== 6) {
            return toast.error("Pincode must 6 digits should be given")
        }
        fetch('https://store-students.onrender.com/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("Successfully added student")
                reset()
            })
    }
    return (
        <div>
            <div className='flex justify-between items-center mx-4'>
                <h2 className='text-lg font-bold'>Add student</h2>
                <p>{date}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-3 gap-4 mx-10 mt-8'>
                        <input className='p-2 rounded-md bg-white border' type="text" {...register("firstName", { required: true })} placeholder="First Name" />
                        <input className='p-2 rounded-md bg-white border' type="text" {...register("middleName")} placeholder="Middle Name" />
                        <input className='p-2 rounded-md bg-white border' type="text" {...register("lastName", { required: true })} placeholder="Last Name" />
                    </div>
                    <div className='grid grid-cols-3 gap-4 mx-10 mt-4'>
                        <select className='p-2 rounded-md bg-white border ' {...register("class", { required: true })}>
                            <option disabled selected >Select Class</option>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                            <option value="4">Class 4</option>
                            <option value="5">Class 5</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                        </select>
                        <select className='p-2 rounded-md bg-white border' {...register("divition", { required: true })}>
                            <option disabled selected  >Select Divition</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                        <input className='p-2 rounded-md bg-white border' type="number" {...register("roll", { required: true })} placeholder="Enter Roll Number in 2 Digits" />

                    </div>

                    <div className='grid grid-cols-2 gap-4 mx-10 mt-10'>
                        <textarea className='p-2 rounded-md bg-white border' {...register("Address-1", { required: true })} placeholder="Address Line 1" ></textarea>
                        <textarea className='p-2 rounded-md bg-white border' {...register("Address-2", { required: true })} placeholder="Address Line 2"></textarea>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mx-10 mt-4'>
                        <input className='p-2 rounded-md bg-white border' type="text" {...register("landmark", { required: true })} placeholder="Landmark" />
                        <input className='p-2 rounded-md bg-white border' type="text" {...register("City", { required: true })} placeholder="City" />
                        <input className='p-2 rounded-md bg-white border' type="number" {...register("pincode", { required: true })} placeholder="Enter pin number in 6 Digits" />
                    </div>
                    <input className='px-10 py-3 bg-slate-600 hover:bg-slate-700 text-white mx-10 mt-4 rounded-lg cursor-pointer' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddStudent;