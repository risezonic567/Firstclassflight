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

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl text-red-600'>About First Class Flight Travel</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                First Class Flight seeks to make the experience of flying first class pleasant, seamless, and well organized right from your first step. We offer first class flight packages at a reasonable price for business and leisure travelers and have developed strong partnerships with airlines in order to give you access to the best rates available, without confusion or complication. When you book your flights, we review each itinerary for efficiency, flexibility and value. Experienced travelers understand that every little detail can make a big impact.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3 '>
                                What makes us different is our level of personalization — from when you inquire about rates to when you receive support after your booking. Regardless of your reason for traveling, we will support you throughout the entire process, without any hidden surprises along the way.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                                We believe that travel should not be difficult for anyone and have perfected our process so that it can be accomplished easily.
                            </p>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden">
                        <img src="/images/about/aboutintro.jpeg" alt="" className='h-full w-full object-cover group-hover:scale-100' />
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
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl text-red-600 py-4'>Our Mission</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>At First Class Flight, we work towards providing affordable and clearly priced luxury air travel. We help travelers to purchase first-class flights at an affordable price without sacrificing comfort, service, or flexibility. Your itinerary will be created efficiently for the best value and to ensure a stress-free booking process. Our belief is that planning for luxury travel should be as easy as possible from beginning to end, including when you board the plane.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-2xl">
                        <div className="relative group  rounded-2xl overflow-hidden transition">
                            <img src="/images/about/vission.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl text-red-600 py-4'>Our Vision</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>We aspire to be an industry leader in premium travel offerings through the integration of knowledge, technology, and personal connection. Our focus is to create a better way for travelers to book their first class air travel — making it easier to access these services more efficiently and in a more fulfilling manner.
                            </p>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>
                                As the airline industry continues to change, we are dedicated to providing certainty and clarity to our customers. We want to maintain long-term partnerships with our clients based upon mutual trust.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            <section>
                <div className='max-w-7xl mx-auto py-10 px-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl text-center text-red-600'>About First Class Flight Travel</h2>
                    <div className='p-2 sm:p-3 md:p-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8  '>

                            <div className='z-40 shadow-lg shadow-red-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                <h2 className='text-lg md:text-xl  p-1 text-justify'>Speak With a Travel Specialist</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>

                                    Contact us <NavLink
                                        to="tel:8663075957"
                                        className="text-red-600 hover:text-red-600  hover:underline transform hover:-translate-x-2 hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in"
                                    >
                                        ( 8663075957)
                                    </NavLink> for a custom quote on airline fares and the best rates available. Our agents will take the time to understand your itinerary (your route, travel dates, class of service, and flexibility) in order to identify the most competitive fares, including possible first-class fare options that could be customized for you.
                                </p>
                            </div>
                            <div className='z-40 shadow-lg shadow-red-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                <h2 className='text-lg md:text-xl  p-1 text-justify '>Receive Tailored Flight Options</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>
                                    Comprehensive and verified itineraries provided will be provided to you along with clear pricing and fare rule details. We do evaluate routing efficiency, airline service quality, and passenger flexibility prior to presenting alternative flight options, including premium/business class flights that provide comfort/value.
                                </p>
                            </div>
                            <div className='z-40 shadow-lg shadow-red-600 p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer' >
                                <h2 className='text-lg md:text-xl  p-1 text-justify'>Confirm & Travel Stress-Free</h2>
                                <p className='text-justify text-sm sm:text-base text-gray-600 '>
                                    After selecting your preferred option, we will produce your secure ticket and send you an immediate confirmation. Your e-ticket will be provided to you without delay, and our staff will be available to assist you with any changes and/or upgrades, etc., as well as offer you U.S.-based travel support.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='max-w-7xl mx-auto py-10 px-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl text-center text-red-600'>Experienced Premium Travel Advisors</h2>
                    <div className=' max-w-2xl mx-auto px-3 py-5'>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                           We are experts at booking premium class airline tickets for you and know what to look for regarding price patterns, fare restrictions, and how best to optimize an airline route. By leveraging our relationships with airlines and our knowledge of the marketplace, we help travelers get the advantages of luxury fares without sacrificing comfort or flexibility.
                        </p>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                            We do more than just book and send tickets – we work closely with you to make smart travel choices, including understanding pricing; knowing policies; and providing continual support up until the date of your travel.
                        </p>
                        <p className='text-center  text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                            Traveling in a premium cabin should be effortless…we create this experience.
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
                                <div className='z-40  shadow-lg shadow-red-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/account.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Emily Johnson</h2>
                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-red-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer'>
                                    <img src="/images/about/manager.png" className='h-full w-full object-cover rounded-xl group-hover:scale-110 ' alt="" />
                                    <h2 className='text-lg md:text-xl  p-3 text-center'>Sarah Williams</h2>

                                </div>
                            </div>
                            <div>
                                <div className='z-40 shadow-lg shadow-red-600 group overflow-hidden relative p-5 mx-auto rounded-xl transform translate-x-0 hover:-translate-x-4 transition-transform duration-300 ease-in cursor-pointer' >
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

                        <h2 className='text-center text-xl sm:text-2xl md:text-3xl text-red-600'>Why Choose First Class Flight</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               At First Class Flight, we utilize our years of industry knowledge combined with individual service to help our clients get the best prices on first-class tickets without complicated, time-consuming searches. We consider more than just the basic fare search results—we go into detail on fare rules, routing options, and other factors that may affect your ticket choice before providing you with several options.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               We do not have an automated consultation system but are truly there for you in providing premium travel options. In addition to comparing the many flights you have available (with premium cabin and/or business class options), we focus on providing clarity about what you should select as well as ensuring you receive the greatest value for long-term travel.
                            </p>
                            <p className='text-justify text-sm sm:text-base text-gray-600 p-1 sm:p-2 md:p-3'>
                               Traveling with a premium cabin should be seamless and easy — we will ensure you have an enjoyable trip from start to finish.
                            </p>
                            <div className='p-2 sm:p-3 md:p-4'>
                                <NavLink to={'tel:8663075957'} className={`p-4 mx-auto bg-red-700 hover:bg-red-600 rounded-xl text-white`}>Call Us Now</NavLink>
                            </div>
                        </div>

                    </div>


                    <div className="order-1 md:order-2 relative group overflow-hidden">
                        <img src="/images/about/whychoose.jpeg" alt="" className='h-full w-full object-cover group-hover:scale-100' />
                    </div>

                </div>

            </section>
        </>
    )
}
