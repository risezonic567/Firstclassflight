import { Headphones, Mail, MapPin, PhoneCall, RefreshCcw, ShieldCheck, UserCheck } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { NavLink } from 'react-router'

export default function Contactus() {
    return (
        <>
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

                <img
                    src=""

                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10  h-full px-4 text-center">
                    <div className='flex items-center justify-center h-80 '>
                        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                            Everything You Need for Seamless Travel
                        </h1>
                    </div>


                    <div>
                        <NavLink to={'tel:9155014125'} className={`p-4 mx-auto bg-blue-900 hover:bg-blue-600 rounded-xl text-white`}>Call Us Now</NavLink>
                    </div>

                </div>

            </section>
            <section >
                <div className=" mx-auto py-12 px-4 bg-blue-100 ">
                    <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Get In Touch</h2>
                    <p className='max-w-5xl mx-auto p-2 sm:p-3 md:p-4 text-gray-600 text-sm sm:text-base text-center'>
                        Connect with our First Flight Class team for premium booking support, luxury travel planning, exclusive deals, and priority assistance. We’re available 24/7 to ensure your journey is seamless, comfortable, and perfectly tailored to your needs
                    </p>
                </div>
                <div className="p-3 sm:p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-7">


                    <div className="order-2 md:order-1 space-y-4">

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <MapPin size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Address:-</h2>
                                    <p className="text-sm sm:text-base">
                                        A-16 17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <Mail size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Email:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="mailto:support@gmail.com"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                            support@gmail.com
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <PhoneCall size={28} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Phone:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="tel:9155014125"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                            9155014125
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 mt-5 z-40 shadow-lg rounded-2xl mt-5 shadow-blue-600 transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 rounded-full bg-gray-600 flex items-center justify-center">
                                    <FaWhatsapp className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Whatsapp:-</h2>
                                    <p className="text-sm sm:text-base">
                                        <NavLink
                                            to="https://wa.me/9155014125"
                                            className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                        >
                                            Chat With Us
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="order-1 md:order-2">
                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl my-6'>Get Any Query</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="w-full border border-blue-600 outline-blue-900  p-2 rounded"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter Phone..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Enter Your Query..."
                                className="w-full border border-blue-600 outline-blue-900 p-2 rounded"
                            />
                            <button type='submit' className='mx-auto py-3 rounded-xl cursor-pointer bg-blue-700 w-40 text-white hover:bg-blue-900'>
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <section>
                <div className='max-w-7xl mx-auto py-14 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 '>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 translate hover:translate-x-3 cursor-pointer '>
                        <Headphones size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>24/7 Customer Support</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>Our dedicated support team is available 24/7 to assist you with bookings, modifications, cancellations, and urgent travel requests. We ensure quick responses and seamless assistance whenever you need us.</p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 translate hover:translate-x-3 cursor-pointer '>
                        <UserCheck size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Dedicated Travel Manager</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>Get a personal travel expert who understands your preferences and handles every detail of your journey. From fare selection to seat upgrades, your travel manager ensures a smooth and stress-free experience.</p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 translate hover:translate-x-3 cursor-pointer '>
                        <ShieldCheck size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Secure & Transparent Booking</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>Book with complete confidence through our secure payment system and transparent pricing. No hidden charges, no surprises—just reliable service and clear fare breakdowns.</p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 translate hover:translate-x-3 cursor-pointer '>
                        <RefreshCcw size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Flexible Changes & Assistance</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>Travel plans can change. Our team helps you modify dates, upgrade cabins, or adjust passenger details quickly and efficiently with minimal hassle.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
