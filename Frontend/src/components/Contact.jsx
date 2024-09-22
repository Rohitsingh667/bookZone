import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='items-center justify-center h-screen flex'>
      <div className="w-[500px]">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            <h2 className="font-bold text-lg">Contact Us</h2>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input type='text' placeholder='Enter your name' className='w-100 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white' {...register("name", { required: true })}/>
                <br/>
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input type='email' placeholder='Enter your email' className='w-100 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white' {...register("email", { required: true })}/>
                <br/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br/>
                <textarea rows={4} placeholder='Type your message' className='w-100 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white' {...register("message", { required: true })}/>
                <br/>
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4'>
                <button className='bg-blue-600 text-white rounded-md px-2 py-1 hover:bg-blue-700 duration-200'>
                    Submit
                </button>
            </div>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Contact
