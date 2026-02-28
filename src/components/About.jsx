import React from 'react'
import { NavLink } from 'react-router'

export default function About() {
    return (
        <>
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden " data-aos="zoom-in-down">

                <img
                    src="/images/about/about.jpeg"

                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* 
                this is used when your image is lighting your text are not clear visible*/}
                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                    <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                        Premium Business Class Flights at Exclusive Fares
                    </h1>
                </div>

            </section>
            <section data-aos="zoom-in-right">
                <div className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="order-2 md:order-1 space-y-4">

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>About Firstclassflight Travel</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                At First Flight Class, we believe that air travel should be more than just reaching a destination—it should be an experience of comfort, elegance, and peace of mind. We specialize in premium flight bookings and luxury travel solutions designed for travelers who value quality, convenience, and personalized service.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                With access to leading international airlines and exclusive first-class and business-class fares, we help our clients enjoy world-class cabins, priority check-in, premium lounges, and exceptional in-flight service. Whether you are traveling for business, leisure, family trips, or special occasions, our expert travel advisors work closely with you to craft the most seamless and cost-effective journey possible.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                What sets us apart is our commitment to customer satisfaction. We understand that every traveler’s needs are unique, which is why we provide tailored travel planning, flexible booking options, and transparent pricing. From finding the best routes and fares to handling changes, cancellations, and special requests, our team is here to support you at every step of your journey.
                            </p>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden">
                        <img src="/images/about/aboutintro.jpeg" alt="" className='h-[515px] w-[650px] group-hover:scale-100' />
                    </div>
                </div>
            </section>
            <section data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-5">
                    <div className="border rounded-2xl">
                        <div className="relative group  rounded-2xl overflow-hidden transition">
                            <img src="/images/about/mission.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl'>Our Mission</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>Our objective is to create a simple, quick, and easily accessible method for purchasing train tickets in the USA. To achieve this, we will develop and operate an efficient website (that is, a website accessible from anywhere) where users can easily search for/train routes/schedule/plan their online train ticket reservations in order to enable users to experience an easy and stress-free way to complete their rail journey within the United States.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-2xl">
                        <div className="relative group  rounded-2xl overflow-hidden transition">
                            <img src="/images/about/vission.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl'>Our Vision</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>Our ambition is to become a credible website supporting customers in the purchase of train tickets online and therefore enabling them to make more informed decisions in their travel planning; we are committed to providing reliable, efficient, and user-friendly rail travel solutions in an effort to make train travel the preferred mode of transportation for the modern traveler.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            <section>
                <div className='max-w-7xl mx-auto py-10 px-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>How To Book With Firstclassflight Travel</h2>
                    <div className='p-2 sm:p-3 md:p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8  '>

                            <div className='z-40 shadow-lg shadow-blue-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                <h2 className='text-lg md:text-xl  p-1 text-justify'>Connect With Our Travel</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>

                                    Call us at  <NavLink
                                        to="tel:9155014125"
                                        className="text-blue-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                    >
                                        9155014125
                                    </NavLink> for personalized assistance, exclusive offline deals, or to request a free quote
                                </p>
                            </div>
                            <div className='z-40 shadow-lg shadow-blue-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                <h2 className='text-lg md:text-xl  p-1 text-justify'>Receive tailored options</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>
                                    Get detailed itineraries and price quotes via email or your preferred channel, ensuring a smooth and personalized booking experience.
                                </p>
                            </div>
                            <div className='z-40 shadow-lg shadow-blue-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer' >
                                <h2 className='text-lg md:text-xl  p-1 text-justify'>Choose and travel</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>

                                    Review options, request any changes, confirm your seat assignment, pay securely online, and receive your e-tickets instantly by email.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='max-w-7xl mx-auto py-10 px-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl text-center'>FirstClassFlight Travel Agents</h2>
                    <div className=' max-w-2xl mx-auto px-3 py-5'>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                            Our experienced travel consultants provide exclusive access to premium business-class and first-class flight deals that are carefully curated to match your budget, comfort needs, and travel priorities. Through our strong global airline partnerships, we unlock special fares and premium cabin options that are not always available online, giving you better value without compromising on luxury.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto px-3   '>
                        <div className='p-1 sm:p-2 md:p-3'>
                            <h2 className='text-3xl md:text-4xl  text-justify'>1,5+ Million</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Clients Served</p>
                        </div>
                        <div>
                            <h2 className='text-3xl md:text-5xl  text-justify'>95%</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Satisfaction Rate</p>
                        </div>
                        <div>
                            <h2 className='text-3xl md:text-5xl  text-justify'>$2,050</h2>
                            <p className='text-justify text-sm sm:text-base text-gray-600'>Average Savings per Ticket</p>
                        </div>
                    </div>
                    <div className='p-2 sm:p-3 md:p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8  '>

                            <div>
                                <div className='z-40  shadow-lg shadow-blue-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/account.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Emily Johnson</h2>
                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-blue-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/manager.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Sarah Williams</h2>

                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-blue-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer' >
                                    <img src="/images/about/supervisor.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Olivia Brown</h2>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <section data-aos="zoom-in-right">
                <div className='max-w-7xl mx-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className="order-2 md:order-1 space-y-4">

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Why Choose First  Class Flight</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                At First Flight Class, we believe that travel is more than just reaching a destination — it is about experiencing comfort, elegance, and peace of mind from the very first step of your journey. We specialize in delivering exclusive business and first-class flight solutions designed for travelers who value luxury, flexibility, and personalized service.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               What sets us apart is our commitment to offering more than just ticket bookings. We provide access to carefully negotiated premium fares that are not always available through standard online platforms. Through our strong global airline partnerships, we unlock exclusive business and first-class opportunities tailored to your schedule, preferences, and travel goals.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                Every client is assigned a dedicated travel expert who understands the importance of time, comfort, and attention to detail. From selecting the ideal route and cabin to managing seat preferences, special meal requests, and last-minute changes, our team handles every aspect with professionalism and precision. Your journey is curated around your priorities, ensuring a seamless and stress-free experience.
                            </p>
                             <div className='p-2 sm:p-3 md:p-4'>
                        <NavLink to={'tel:9155014125'} className={`p-4 mx-auto bg-blue-900 hover:bg-blue-600 rounded-xl text-white`}>Call Us Now</NavLink>
                    </div>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden">
                        <img src="" alt="" className='h-[515px] w-[650px] group-hover:scale-100' />
                    </div>
                    
                </div>
               
            </section>
        </>
    )
}
