import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'


function About() {
  return (
    <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
      <Navbar />
      <div className='flex flex-col justify-center min-h-[62vh] dark:bg-slate-900 dark:text-white'>
        <h1 className=' font-bold text-3xl text-center'>About</h1>
        <div className=' p-6 md:px-36 space-y-7'>
          <p>Welcome to the Bookstore Project! This application serves as an online bookstore where users can browse, search, and purchase books from a wide variety of genres and authors. The project is designed to provide a seamless user experience with an intuitive interface and robust backend.</p>

          <p>In addition to browsing and purchasing books, users can read reviews, rate their favorite titles, and participate in discussions with other book lovers. Our platform also hosts regular events such as author signings and book club meetings, both virtually and in-store.</p>

          <p>Thank you for choosing our bookstore. We hope you enjoy your shopping experience and find the perfect books to add to your collection!
          </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default About
