import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCrown, FaPlaneDeparture, FaPassport, FaHeadset, FaTags, FaShieldAlt, FaPhone, FaEnvelope, FaWhatsapp, FaPlus } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import HeroSection from './HeroSection';
import { PhoneCall } from 'lucide-react';
import { NavLink } from 'react-router';
import Testimonials from './Testimonials';

let ourServices = [
    {
        title: "Flight Booking",
        icon: "FaPlaneDeparture",
        description: "Book domestic and international flights with best fares, flexible options, and instant ticket confirmation."
    },
    {
        title: "Luxury Class Deals",
        icon: "FaCrown",
        description: "Get exclusive deals on business and first class flights with premium comfort and luxury services."
    },
    {
        title: "Visa Assistance",
        icon: "FaPassport",
        description: "Easy visa guidance and documentation support for hassle-free international travel and approvals."
    },
    {
        title: "24/7 Customer Support",
        icon: "FaHeadset",
        description: "Round-the-clock customer support to help with bookings, changes, cancellations, and travel queries."
    },
    {
        title: "Best Price Guarantee",
        icon: "FaTags",
        description: "We offer competitive pricing with transparent fares and guaranteed best value on every booking."
    },
    {
        title: "Secure Payments",
        icon: "FaShieldAlt",
        description: "Safe and secure online payments with trusted gateways and encrypted transaction protection."
    }
];
let faq = [
    {
        "question": "How can I book a flight through your website?",
        "answer": "Search your route, select your preferred flight, enter passenger details, and complete secure online payment to confirm booking."
    },
    {
        "question": "Do you offer discounts on business and first class flights?",
        "answer": "Yes, we provide exclusive deals and special fares on business and first class flights, subject to availability."
    },
    {
        "question": "Are my payments secure on your platform?",
        "answer": "Absolutely. We use encrypted and trusted payment gateways to ensure safe and secure transactions."
    },
    {
        "question": "Can I change or cancel my flight after booking?",
        "answer": "Changes and cancellations depend on airline fare rules. Our support team can assist you with the process."
    },
    {
        "question": "Will I receive my e-ticket instantly after payment?",
        "answer": "Yes, e-tickets are sent instantly to your registered email and WhatsApp after successful payment confirmation."
    },
    {
        "question": "Do you provide customer support for flight bookings?",
        "answer": "Yes, our customer support team is available 24/7 to help with bookings, changes, and travel queries."
    },
    {
        "question": "Can I book international flights with you?",
        "answer": "Yes, you can book both domestic and international flights with us at the best available fares."
    },
    {
        "question": "Do you help with visa and travel documentation?",
        "answer": "Yes, we provide visa assistance and guidance for international travel requirements and documentation."
    },
    {
        "question": "What if my flight gets delayed or cancelled?",
        "answer": "We assist you with rebooking options, refunds, or alternative flights as per airline policies."
    },
    {
        "question": "Do you offer group or corporate flight bookings?",
        "answer": "Yes, we handle group and corporate travel bookings with special fares and personalized support."
    }
]

export default function Home() {
    let [open, setopen] = useState(null)

    return (
        <>
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

                <video
                    src="/video/home.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                
                />


                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10  h-full px-4 text-center">
                   <div className='flex items-center justify-center h-80 '> 
                     <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                        Premium Business Class Flights at Exclusive Fares
                    </h1>
                   </div>
                    <div className='max-w-70 mx-auto flex justify-between items center'>
                        <div>
                        <NavLink to={'/search-flights'} className={`p-4 mx-auto bg-red-600 hover:bg-red-700  rounded-xl text-white`}>Search Flights</NavLink>
                    </div>
                     <div>
                        <NavLink to={'tel:8663075957'} className={`p-4 mx-auto bg-gray-600  rounded-xl text-white`}>Call Us Now</NavLink>
                    </div>
                    </div>
                </div>
    
            </section>
            <div data-aos="zoom-in">
                <HeroSection />
            </div>
          
            <section>
                <div data-aos="fade-up-right">
                    <div className='max-w-7xl mx-auto px-3 py-12 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='order-1 md:order-1'>
                            <div>
                                <h2 className='text-lg sm:text-xl md:text-2xl text-center text-red-600'> Why Travelers Trust Our Flight Experts</h2>
                                <p className='mt-1 text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    Choosing a premium cabin isn’t only about finding the perfect seat; it's also about how you will be treated from the moment you book until you reach the destination. We are trusted by our customers due to the level of detail we provide, including flexible itineraries, affordable prices, and true personal assistance when a trip changes.

                                </p>
                                <p className=' text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    Unlike using an automated search engine for your booking, you will receive personalized customer service from travel experts who are knowledgeable of international premium routing & airline price structure. This means better choices, clearer guidance, and an easy-to-use booking process.
                                </p>
                            </div>
                        </div>
                        <div className='order-2 md:order-2'>
                            <div className='relative group  overflow-hidden transition'>
                                <img src="/images/home/Why Travelers Trust Our Flight Experts.jpg.jpeg" className='h-full w-full object-cover duration-300 group-hover:scale-110 ' alt="Why Travelers Trust Our Flight Experts" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='max-w-7xl mx-auto px-3 py-12 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='order-2 md:order-2'>
                            <div>
                                <h2 className='text-xl sm:text-2xl md:text-3xl text-center text-red-600'>Corporate Travel Management
                                </h2>
                                <h3 className='text-sm sm:text-lg md:text-xl text-gray-600 text-center '>Premium flight solutions designed for modern business teams.
                                </h3>
                                <p className='mt-3 text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    Business travel is not only about crossing the distance between destinations but also about arriving appropriately and awake. Our Corporate Travel Specialists would be glad to work with you in creating an ideal itinerary for your executives, personnel, and international clients.


                                </p>
                                <p className='mt-3 text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    We take care of everything, from corporate fare negotiation through to timely changes and cancellations in just one call. Your company will have a flight-specific expert assigned to your account. This individual will provide you with prompt communication, alternatives, and access to premium seating at competitive pricing.

                                </p>
                                <p className='mt-3 text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    Rather than managing your travel through numerous sources, your company will now have one single point of contact who recognizes your corporate travel policy, unique needs, and existing priorities.

                                </p>
                            </div>
                        </div>
                        <div className='order-1 md:order-1'>
                            <div className='relative group  overflow-hidden transition'>
                                <img src="/images/home/Corporate.jpg.jpeg" className='h-full w-full object-cover duration-300 group-hover:scale-110 ' alt="Corporate Travel Management" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='py-12'>
                <div data-aos="fade-down-left">
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5'>
                        {
                            ourServices.map((item, id) => (
                                <div key={id} className='rounded-2xl shadow-lg text-red-600 shadow-red-600 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                                    <span className="text-3xl justify-center flex p-5 items-center">
                                        {item.icon === "FaPlaneDeparture" && <FaPlaneDeparture />}
                                        {item.icon === "FaCrown" && <FaCrown />}
                                        {item.icon === "FaPassport" && <FaPassport />}
                                        {item.icon === "FaHeadset" && <FaHeadset />}
                                        {item.icon === "FaTags" && <FaTags />}
                                        {item.icon === "FaShieldAlt" && <FaShieldAlt />}
                                    </span>

                                    <div className='p-3 sm:p-4 md:p-5'>
                                        <h2 className='text-center text-lg sm:text-xl md:text-2xl '>{item.title}</h2>
                                        <p className='text-center text-sm sm:text-base text-gray-600 py-2'>{item.description}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </section>
            <section>
                <div data-aos="flip-right">
                    <div className='max-w-7xl mx-auto px-3 py-12 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='order-1 md:order-1'>
                            <div>
                                <h2 className='text-xl sm:text-2xl md:text-3xl text-center text-red-600'>Ready to Book Your Premium Flight?</h2>
                                <h3 className='text-sm sm:text-lg md:text-xl text-gray-600 text-center '>Let our specialists help you find your next first-class ticket for travel.
                                </h3>
                                <p className='mt-3 text-sm sm:text-base text-justify text-gray-600 font-semibold'>
                                    Our travel specialists are available to assist you in finding the best offers for a premium cabin seat whether you are traveling for business (executive travel; long-haul/overseas flights) or pleasure—to design a holiday/aspiring luxury vacation. Please provide the details of your trip so that our specialists can provide you with personalized options that fit into your preferred travel dates and times

                                </p>

                            </div>
                        </div>
                        <div className='order-2 md:order-2'>
                            <div className='relative group  overflow-hidden transition'>
                                <img src="/images/home/Ready to Book  Your Premium Flight.jpg.jpeg" className='h-full w-full object-cover duration-300 group-hover:scale-110 ' alt="Ready to Book Your Premium Flight?" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='max-w-4xl py-12 mx-auto'>
                <div data-aos="flip-up">
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5'>

                        <div className='rounded-2xl shadow-lg text-red-600 shadow-red-600 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <PhoneCall size={32} />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl md:text-2xl text-gray-600'>Call Us</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="tel:8663075957" className='text-center text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in py-2'>8663075957</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg text-red-600 shadow-red-600 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaEnvelope className='text-4xl' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl md:text-2xl text-gray-600'>Email</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="mailto:support@gmail.com" className='text-center text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in py-2'>support@gmail.com</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className='rounded-2xl shadow-lg text-red-600 shadow-red-600 z-50 transition-all duration-300 ease-in hover:-translate-y-4'>
                            <span className="text-3xl justify-center flex p-5 items-center">
                                <FaWhatsapp className='text-4xl' />
                            </span>

                            <div className='p-1 sm:p-2 md:p-3'>
                                <h2 className='text-center text-lg sm:text-xl text-black md:text-2xl '>Whatsapp</h2>
                                <div className='flex items-center justify-center'>
                                    <NavLink to="https://wa.me/8663075957" className='text-center text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in py-2'>Chat With Us</NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <Testimonials />
            <section>
                <div data-aos="zoom-out-down">
                    <div className="max-w-7xl mx-auto py-12 px-4">
                        <h2 className='text-xl sm:text-2xl md:text-3xl text-center mb-4 text-red-600'>Frequently Asked Questions</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                faq.map((item, id) => {
                                    let openIndex = open === id
                                    return (
                                        <div key={id} className='border rounded-2xl overflow-hidden '>
                                            <button className={`flex items-center justify-between p-4 md:p-5 text-left w-full ${openIndex ? "bg-red-600 text-white" : ""}`} onClick={() => setopen(openIndex ? null : id)}>

                                                <span className=''>{item.question}</span>
                                                <span className={`inline-block text-xl transition-transform duration-300 ${openIndex ? "rotate-45" : "rotate-0"}`}><FaPlus className='text-2xl' /></span>
                                            </button>
                                            <div className={`grid transition-all duration-300 ease-in-out ${openIndex ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                                <div className={`overflow-hidden px-4 md:px-5 pb-4 text-gray-600 ${openIndex ? "bg-red-100 text-dark-400" : ""}`}>
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
