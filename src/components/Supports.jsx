import { Armchair, Globe, Headphones, PlaneTakeoff, RefreshCcw, RefreshCw, ShieldCheck, UserCheck, Zap } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function Supports() {
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
            <section>
                <div>
                    <h2 className='p-4 sm:-p-5 md:p-6 text-lg sm:text-xl md:text-2xl text-center'>Our Services</h2>
                    <p className='text-sm sm:text-base text-center text-gray-600 max-w-xl mx-auto'>Discover premium flight solutions designed around your comfort, flexibility, and convenience. From exclusive business-class fares to dedicated travel support, our features ensure a seamless and stress-free journey every time you fly.</p>
                </div>
                <div className='max-w-7xl mx-auto py-14 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 '>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <UserCheck size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Dedicated Travel Manager</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Get a personal travel expert who understands your preferences and handles every detail of your journey with care and precision.
                            </p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <PlaneTakeoff size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Exclusive Premium Deals</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Access exclusive business and first-class fares not always available online, tailored to your budget and comfort needs.
                            </p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <Headphones size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>24/7 Customer Support</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Our expert support team is available round-the-clock to assist with bookings, changes, and urgent travel requests.
                            </p>
                        </div>
                    </div>
                    <div className='z-40 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <ShieldCheck size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Secure & Transparent Booking</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Enjoy encrypted payments and transparent pricing with no hidden charges — complete peace of mind guaranteed.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='max-w-7xl mx-auto py-14 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 '>
                    <div className='z-50 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <RefreshCw size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Flexible Modifications</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Easily modify travel dates, upgrade cabins, or adjust details with fast and professional assistance.
                            </p>
                        </div>
                    </div>
                    <div className='z-50 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <Globe size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Global Airline Network</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                We partner with leading international airlines to provide worldwide route coverage and premium availability.
                            </p>
                        </div>
                    </div>
                    <div className='z-50 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <Armchair size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Priority Seat Selection</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Choose preferred seats and enjoy assistance with upgrades for maximum in-flight comfort.
                            </p>
                        </div>
                    </div>
                    <div className='z-50 shadow-xl rounded-2xl shadow-blue-600 transform hover:translate-x-3 transition duration-300 cursor-pointer'>
                        <Zap size={28} className='text-center mx-auto' />
                        <div className='p-2 sm:p-3 md:p-4'>
                            <h2 className='text-center text-lg sm:text-xl md:text-2xl'>Fast & Seamless Booking</h2>
                            <p className='p-1 sm:p-2 md:p-3 text-center text-sm sm:text-base text-gray-600'>
                                Quick search, instant confirmations, and rapid ticket issuance save your valuable time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
