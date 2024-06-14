import React from 'react'
import toast from 'react-hot-toast';

function Card({ item }) {
  return (
    <div className='max-x-screen-2xl container  mx-auto md:px-20 px-4 mt-7 mb-5  dark:bg-slate-900 dark:text-white '>
      <div className="card w-80 md:w-92 bg-base-100 shadow-lg ">
        <figure><img src={item.image} alt="Books" /></figure>
        <div className="card-body  dark:bg-slate-800 dark:text-white dark:shadow-2xl dark:shadow-black">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary  ">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="flex items-center justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline py-3 hover:bg-pink-500 hover:text-white" onClick={()=>toast.success('Coming Soon!')}>Buy now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
