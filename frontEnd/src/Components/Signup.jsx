import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Signup() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Signup Successfully!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user))
        window.location.reload();

      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      })
  }

  return (
    <div className='flex justify-center h-screen'>
      <div id="" className="">
        <div className="modal-box w-screen mt-44  dark:bg-slate-900 dark:text-white dark:shadow-lg dark:shadow-black">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"} className=" absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg mb-3">Signup</h3>
            <div className='flex flex-col space-y-2 my-3'>
              <span>Name</span>
              <input className='p-2 rounded-md outline-none border-2 dark:bg-slate-800  ' placeholder='Enter your name' name='name' type='name'  {...register("name", { required: true })} />
              {errors.name && <span className=' text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-col space-y-2 my-3'>
              <span>Email</span>
              <input className='p-2 rounded-md outline-none border-2 dark:bg-slate-800 dark:text-white ' placeholder='Enter your email' name='email' type='email' {...register("email", { required: true })} />
              {errors.email && <span className=' text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='flex flex-col space-y-2 my-3'>
              <span>Password</span>
              <input className='p-2 rounded-md outline-none border-2 dark:bg-slate-800 dark:text-white ' placeholder='Enter your Password' name='password' type='password' {...register("password", { required: true })} />
              {errors.password && <span className=' text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='flex justify-between items-center'>
              <button className=' bg-pink-600 text-white px-3 py-1 rounded-md m-4 hover:bg-pink-700 duration-300'>Signup</button>
              <div className='flex'>
                <p>Have account?{" "}
                  <Link to="/" className="underline text-blue-500 cursor-pointer" >Login</Link></p>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup
