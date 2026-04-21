import { HomeIcon } from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router'


export default function RefundPolicy() {
    return (
        <>
            <section>
               <Helmet>
                                  <title>Refund and Cancellation Policy | First Class Flight</title>
                                  <meta name='description' content='Read the official refund and cancellation policy of First Class Flight. Learn about booking cancellations, refund eligibility, processing time, and terms for flight reservations'></meta>
                                  <link rel="canonical" href="https://www.first-classflight.com/refund-and-cancellation-policy" />
                                  
                              </Helmet>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Refund Policy</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                           Travelers may need to change their travel plans for business reasons, personal reasons, or some other circumstance beyond their control, like an unforeseen event. We process changes, cancellations, and refunds for travel reservations made through our agency, as detailed in the Refund and Cancellation Policy
                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                              Our agency facilitates the relationship between a traveler and the airline that they will be traveling on. All decisions about refunds and cancellations are based solely upon the airline's fare rules. Our job is to guide you through this process and explain your options to you and to help you get your request resolved as quickly as possible
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl'>General Policy</h1>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>The fare rules, restrictions, and conditions applicable to your itinerary are established by the airline. These vary by fare class, fare type, airline, and routing. The fare conditions will dictate the refundability of a ticket, i.e., if it is 100% refundable, partly refundable, or non-refundable, as well as provide refunds based on associated costs, change options, and any applicable penalties that may apply based on the individual ticket purchased at the time of original travel booking.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            As a travel agency and booking intermediary, we will adhere to the airlines’ policies in relation to the handling of cancellation and/or change/refund requests. Our staff are available to assist you with all aspects of this process, provide you with an explanation of available options, and submit the request to the airlines on your behalf. The final decision regarding refund amounts, the timeframe until when you can expect to receive the refund, and any other policy/fare conditions will be determined by the airlines based on the established terms and conditions tied to the airfare purchased when making the original flight booking.
                        </p>
                        
                       
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Refund Eligibility</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Refund Classification of Tickets
                        </p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Tickets can be</li>
                            <li>Full refund</li>
                            <li>Partial refund</li>
                            <li>No refund</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Refund eligibility is subject to the ticket’s fare rules and conditions specified by the airline.


                        </p>

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Service Fees
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Please note:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Service Cancellation Fee if you wish to refund your ticket</li>
                            <li>Service change fee if you wish to change your ticket or book a new ticket</li>
                            <li>Fees above are in addition to airline-imposed penalties.</li>
                        </ul>
                       

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Refund Processing Time
                        </h2>
                       
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>You'll receive your refund once the airline approves it.</li>
                            <li>Refunds generally take 7-14 business days to process for most airlines.</li>
                            <li>However, some airlines will take longer to approve a refund based on the airline policies</li>
                            <p className='text-sm sm:text-base md:text-lg text-justify'>Your refund will be issued back to the original payment method you used for the purchase.</p>
                        </ul>
                       

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Changes to Bookings
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Refunds will be processed based on the following:</p>
                       

                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Airline fare rules</li>
                            <li>Seat availability</li>
                            <li>Applicable airline cancellation penalties</li>
                            <li>Agency service fees</li>
                        </ul>
                       

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>No-Show Policy
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>If there is no flight to board:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>There is no refund.</li>
                            <li>The airline's rules regarding passengers who do not show up will apply</li>
                            
                        </ul>
                       

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Airline Schedule Changes
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>If your airline cancels or significantly alters your itinerary:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>You will qualify for rebooking or a refund as per the policies of the airline.</li>
                            <li>You may contact us for assistance in processing your request</li>
                            
                        </ul>
                       

                    </div>
                     <div className='p-4 sm:p-5 md:p-6'>
                                            <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact for Refund Requests</h2>
                    
                                            <p className='text-sm sm:text-base md:text-lg text-justify'>To request a refund or cancellation:                                            </p>
                                            <p className='text-sm sm:text-base md:text-lg text-justify'>Email: <NavLink to={'mailto:info@firstclassflight.com'} className={' text-red-600 hover:underline hover:decoration-2 hover:decoration-red-600 hover:text-red-300 transition'}>info@firstclassflight.com</NavLink></p>
                                            <p className='text-sm sm:text-base md:text-lg text-justify'> Phone: <NavLink to={'tel:+18663075957'} className={'text-red-600 hover:underline hover:decoration-2 hover:decoration-red-600 hover:text-red-300 transition'}>8663075957</NavLink></p>
                    
                                        </div>

                </div>
            </section>
        </>
    )
}
