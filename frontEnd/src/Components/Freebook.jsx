import React, { useEffect, useState } from 'react';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Freebook() {

    const [book, setbook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                const freebook = res.data.filter((data) => data.category === "Free");
                setbook(freebook);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-x-screen-2xl container  mx-auto md:px-20 px-4'>
                <h1 className=' font-semibold text-xl mb-2 mt-5'>Free Offered course</h1>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod, repellendus et omnis id totam aliquam labore molestiae veritatis! Magnam animi omnis harum aspernatur fuga deserunt sit consequuntur, et dolore!</p>
            </div>
            <div className='max-x-screen-2xl  mx-auto md:px-20 px-4'>
                <Slider {...settings}>
                    {book.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Freebook
