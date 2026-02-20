import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function HeroSection() {
    let popular = [
        {
            "country": "United Arab Emirates",
            "img": "/images/country/United Arab Emirates.jpg.jpeg",
            "description": "Experience luxury business class flights to Dubai with lie-flat seats, premium lounges, gourmet dining, priority check-in."
        },
        {
            "country": "United States",
            "img": "/images/country/United States.jpg.jpeg",
            "description": "Fly premium business class to the USA with spacious seating, fine dining, priority services, comfort, privacy."
        },
        {
            "country": "United Kingdom",
            "img": "/images/country/United Kingdom.jpg.jpeg",
            "description": "Enjoy luxury business class flights to London with flat-bed seats, premium meals, lounge access, and privacy."
        },
        {
            "country": "France",
            "img": "/images/country/FRANCE.jpg.jpeg",
            "description": "Travel business class to Paris with elegant cabins, gourmet cuisine, premium lounges, priority check-in."
        },
        {
            "country": "India",
            "img": "/images/country/INDIA.jpg.jpeg ",
            "description": "Fly business class to India with spacious seating, gourmet dining, luxury lounges, priority services, and seamless travel comfort."
        },
        {
            "country": "Italy",
            "img": "/images/country/ITALY.jpg.jpeg ",
            "description": "Fly business class to Italy with premium seating, fine cuisine, lounge access, and priority boarding."
        },
        {
            "country": "Indonessia",
            "img": "/images/country/INDONESIA.jpg.jpeg  ",
            "description": "Enjoy premium business class flights to Indonessia with lie-flat seats, gourmet dining, privacy."
        },
        {
            "country": "Australia",
            "img": "/images/country/Australia.jpg.jpeg ",
            "description": "Experience long-haul business class flights to Australia with luxury comfort, privacy, gourmet meals."
        },
        {
            "country": "Malaysia",
            "img": "/images/country/Malaysia.jpg.jpeg ",
            "description": "Travel business class to Malaysia with premium cabins, lie-flat comfort, priority check-in."
        },
        {
            "country": "Turkey",
            "img": "/images/country/TURKEY.jpg.jpeg",
            "description": "Fly business class to Turkey with comfortable seating, gourmet meals, priority boarding."
        },
        {
            "country": "Japan",
            "img": "/images/country/JAPAN.jpg.jpeg ",
            "description": "Enjoy luxury business class flights to Japan with privacy suites, gourmet dining."
        },
        {
            "country": "Singapore",
            "img": "/images/country/SINGAPORE.jpg.jpeg  ",
            "description": "Travel business class to Singapore with premium seating, gourmet cuisine, priority services."
        },
        {
            "country": "Srilanka",
            "img": "/images/country/SRI LANKA.jpg.jpeg ",
            "description": "Fly business class to Srilanka with luxury cabins, fine dining, lounge access."
        },
        {
            "country": "Switzerland",
            "img": "/images/country/SWITZERLAND.jpg.jpeg ",
            "description": "Enjoy premium business class flights to Switzerland with lie-flat seats, gourmet meals."
        },
        {
            "country": "THAILAND",
            "img": "/images/country/THAILAND.jpg.jpeg ",
            "description": "Book business class flights to Netherlands with premium comfort, gourmet dining, lounges."
        },
        {
            "country": "Maldives",
            "img": "/images/country/MALDIVES.jpg.jpeg ",
            "description": "Experience luxury business class flights to Maldives with premium comfort, privacy, gourmet dining."
        }
    ]
    return (
        <>
            <section className='max-w-7xl mx-auto py-5 px-3'>
                <div className='p-2 sm:p-3 md:p-4'>
                    <h2 className='text-lg sm:text-xl md:text-2xl text-center'>Luxury travel, smarter pricing, and personal service for executives and premium travelers.</h2>
                    <p className='text-sm sm:text-base text-justify text-gray-600 font-semibold'>Traveling in a premium cabin shouldn’t mean overpaying. At First Class Flight, we assist executives, regular travelers, and corporate groups in finding amazing rates for long-haul premium flights. Our experts are available to uncover negotiated, discounted, or privately negotiated rates/shuttles that are not published in the public reservation systems.</p>
                </div>
                <div className='p-2 sm:p-3 md:p-4'>
                    <Swiper
                        speed={300}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 12 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 24 }
                        }}
                        modules={[FreeMode, Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                    >

                        {
                            popular.map((item, id) => (
                                <SwiperSlide className='' key={id}>

                                    <div >
                                        <div className='relative overflow-hidden group transition'>
                                            <img src={item.img} alt="" className=' h-[250px] w-[320px] transition-all duration-300 group-hover:scale-110' />
                                        </div>
                                        <div className='p-1 sm:p-2 md:p-3'>
                                            <h2 className='text-lg sm:text-xl md:text-2xl text-center'>{item.country}</h2>
                                            <p className='text-sm sm:text-base text-justify'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}
