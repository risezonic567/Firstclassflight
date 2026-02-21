import React from 'react'
import { NavLink } from 'react-router'
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Copyright, MapPin, PhoneCall } from 'lucide-react'

export default function Footer() {
    return (
        <>
            <footer className='w-full bg-blue-950  text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <NavLink to={'/'}>
                            <img src="/images/logo/FCF LOGO.png" className='h-18 sm:h-25 md:h-28 p-5' alt="firstclassflight logo" />
                        </NavLink>
                        <p className='text-sm sm:text-base  text-white py-3 text-justify'>
                            We provide premium first class flight deals, luxury travel planning, exclusive fares, and personalized support to ensure every journey is comfortable, seamless, and truly memorable.
                        </p>
                        <div className='grid grid-cols-4 gap-2 p-1 sm:p-2 md:p-3'>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaWhatsapp className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaInstagram className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaYoutube className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaFacebook className='text-2xl' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Quick Links</h2>
                        <div className='p-2 sm:p-3 md:p-4  gap-4'>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Home</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>About Us</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Business Class Flights</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Blogs</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Gift Vouchers</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Contact Us</NavLink>

                        </div>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Supports</h2>
                        <div className='p-2 sm:p-3 md:p-4  gap-4'>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Privacy-Policy</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Term-And-Condition</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Booking-Steps</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Disclaimer</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Faq</NavLink>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Features</NavLink>

                        </div>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact Us</h2>
                        <div className='p-2 sm:p-3 md:p-4  gap-4'>
                           
                            <div className='flex '>
                                <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                    <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in '}>
                                        <MapPin className='text-2xl' size={28} />
                                    </NavLink>

                                </div>
                                 <div className='ps-4'>
                                <h2 className='text-lg sm:text-xl md:text-2xl'>Address:-</h2>
                                <p className='text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in'>A-16 17662 Irvine Blvd, Suite 9 Tustin, CA 92780</p>
                            </div>
                            </div>
                            <div className='flex'>
                                <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center mt-4'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaEnvelope className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='ps-4 py-3'>
                                <h2 className='text-lg sm:text-xl md:text-2xl'>Email:-</h2>
                                <NavLink to={'mailto:support@gmail.com'} className='text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in'>support@gmail.com</NavLink>
                            </div>
                            </div>
                            <div className='flex'>
                                <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center mt-4'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <PhoneCall className='text-2xl' />
                                </NavLink>
                            </div>
                             <div className='ps-4 py-3'>
                                <h2 className='text-lg sm:text-xl md:text-2xl'>Phone:-</h2>
                                <NavLink to={'tel:+1-844-821-5950'} className='text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in'>+1-844-821-5950</NavLink>
                            </div>
                            </div>

                           <div className='flex'>
                             <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center mt-4'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in '}>
                                    <FaWhatsapp className='text-2xl' />
                                </NavLink>
                            </div>
                             <div className='ps-4 py-3'>
                                <h2 className='text-lg sm:text-xl md:text-2xl'>Whatsapp:-</h2>
                                <NavLink to={'https://wa.me/+1-844-821-5950'} className='text-sm sm:text-base hover:text-red-600 transition-all duration-300 ease-in'>+1-844-821-5950</NavLink>
                            </div>
                           </div>

                        </div>
                    </div>
                </div>
                <hr className='text-gray-600 p-2' />
               
                   <div className='flex pb-3 justify-center'>
                    <p className='text-sm sm:text-base flex'>
                        <Copyright size={24} /> <p>2026 First-Class Flight. All rights reserved</p>
                    </p>
                    {/* <div className='grid grid-cols-1 md:grid-cols-3'>
                        <NavLink to={"/"} className={'ms-9  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Privacy-Policy</NavLink>
                            <NavLink to={"/"} className={'ms-3  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in '}>Term-And-Condition</NavLink>
                            <NavLink to={"/"} className={'ms-3  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in '}>Booking-Steps</NavLink>
                    </div>
                    <p className='text-sm sm:text-base '>
                       <p>Develope and Design By <span className='text-red-600'>Risezonic</span></p>
                    </p> */}
                   </div>
              
            </footer>
        </>
    )
}
