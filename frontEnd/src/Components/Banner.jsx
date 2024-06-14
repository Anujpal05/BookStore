import React from 'react';
import banner from '/Banner.png';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='max-x-screen-2xl container  mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
            <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                <div className="space-y-12">
                    <h1 className='text-4xl font-bold'>
                        Hello, welcome to learn something{" "}
                        <span className='text-pink-500'>new everyday!!!</span>
                    </h1>
                    <p className=' text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum dolorum nulla impedit quibusdam. Illo alias ad, aspernatur vero aut, fuga quam laborum officiis ut nihil impedit repellat dolorum harum.
                    </p>
                    <label className="input input-bordered flex items-center gap-2  dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:border-2 " style={{ outline: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow " placeholder="Enter your email to login" />
                    </label>
                </div>
                <Link to="/signup" className="btn btn-secondary mt-6">Get Started</Link>

            </div>
            <div className='w-full md:w-1/2 order-1 md:order-2 md:mx-24'>
                <img src={banner} className=' h-96 w-96 md:h-[35rem] md:w-[35rem]' alt="Banner" />
            </div>
        </div>
    )
}

export default Banner
