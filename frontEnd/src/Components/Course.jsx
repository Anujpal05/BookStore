import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";
import { Link } from 'react-router-dom';

function Course() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);




  return (
    <>
      <div className='max-x-screen-2xl '>
        <div className=' pt-24  justify-center items-center text-center  '>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you  {" "} <span className=' text-pink-500'>Here! :)</span></h1>
          <p className='mt-8 px-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ipsum eveniet quam, similique laudantium, dolores saepe inventore exercitationem maxime nisi tempore impedit consequuntur, iusto modi? Officia dolor nihil id quaerat.</p>
          <Link to={"/"}>
            <button className=' bg-pink-600 text-white px-3 py-1 rounded-md mt-6 hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
      </div>
      <div className='max-x-screen-2xl md:px-4 px-4 mt-9 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </>
  )
}

export default Course
