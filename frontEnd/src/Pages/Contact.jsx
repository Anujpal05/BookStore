import React from 'react';
import { useForm } from "react-hook-form"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';


function Contact() {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const detailInfo = {
      name: data.name,
      gender: data.gender,
      email: data.email,
      feedback: data.feedback
    }
    await axios.post("http://localhost:3000/detail/contact", detailInfo)
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message);
          navigate(from, { replace: true });
        }
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      })
  }

  return (
    <div>
      <div className='flex justify-center h-screen dark:bg-slate-900 dark:text-white'>
        <div id="" className="">
          <div className="modal-box w-screen mt-32 dark:bg-slate-900 dark:text-white dark:shadow-2xl dark:shadow-black">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className=" absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg mb-4 text-center">Contact Us</h3>
              <div className='flex flex-col space-y-2 my-3'>
                <span>Name</span>
                <input className='p-2 rounded-md outline-none  border-2 dark:border-gray-500 dark:bg-slate-800 dark:text-white' placeholder='Enter your name' name='name' type='name'  {...register("name", { required: true })} />
                {errors.name && <span className=' text-red-400 text-sm'>This field is required</span>}
              </div>
              <div className='flex flex-col space-y-2 my-3 '>
                <span>Gender</span>
                <select name="gender" className='p-2 border-2 dark:border-gray-500 rounded-md dark:bg-slate-800 dark:text-white' {...register("gender", { required: true })}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className=' text-red-400 text-sm'>This field is required</span>}
              </div>
              <div className='flex flex-col space-y-2 my-3'>
                <span>Email</span>
                <input className='p-2 rounded-md outline-none border-2 dark:border-gray-500 dark:bg-slate-800 dark:text-white' placeholder='Enter your email' name='email' type='email' {...register("email", { required: true })} />
                {errors.email && <span className=' text-red-400 text-sm'>This field is required</span>}
              </div>
              <div className='flex flex-col space-y-2 my-3'>
                <span>Feedback</span>
                <input className='p-2 rounded-md outline-none border-2 dark:border-gray-500 dark:bg-slate-800 dark:text-white' placeholder='Enter your Feedback' name='feedback' type='feedback' {...register("feedback", { required: true })} />
                {errors.feedback && <span className=' text-red-400 text-sm'>This field is required</span>}
              </div>
              <div className='flex justify-center items-center'>
                <button className=' bg-pink-600 text-white px-3 py-1 rounded-md m-4 hover:bg-pink-700 duration-300'>Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
