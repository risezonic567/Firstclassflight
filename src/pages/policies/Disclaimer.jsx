import { HomeIcon } from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router'


export default function RefundPolicy() {
    return (
        <>
            <section>
                <Helmet>
                    <title>Disclaimer | First Class Flight Travel Information</title>
                    <meta name='description' content='Read the First Class Flight disclaimer regarding travel information, airline content accuracy, booking services, and limitations of liability.'></meta>
                    <link rel="canonical" href="https://www.first-classflight.com/disclaimer" />
                </Helmet>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Disclaimers</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            This website contains several pieces of information, including (but not limited to) text, graphics, images, and links to other resources; this information is for use as reference only. We make every attempt to ensure this information is accurate and kept current. The travel industry is dynamic—fares change daily, airlines change scheduling frequently, and changes made by airlines occur without notice. Therefore, First Class Flight does not guarantee the completeness, accuracy, or adequateness of any of the information on the website for any specific purpose.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            If you choose to use this website and any of the services offered by this website, you acknowledge that you are doing so at your own risk and are relying upon the content of this website at your own risk.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl'>Not a Carrier</h1>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>First Class Flight is an agency and intermediary for airline tickets and travel bookings. We do not directly operate, control, or manage any airlines, transportation providers, or third-party providers of travel. All schedules, change fees, cancellation fees, flight availability, policies, etc. regarding air travel are completely at the discretion of the carrier/airline or respective provider.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Accuracy of Information</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Although we do our best to provide correct and reliable information, we do not guarantee the correctness, completeness, or suitability (for any use by a customer) of the information provided on this website or sent by email, telephone, or any other means of communication. This includes but is not limited to the following:
                        </p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Flight schedules</li>
                            <li>Fare Prices</li>
                            <li>Taxes and Fees</li>
                            <li>Seat Availability and/or Service Availability</li>
                            <li>Travel Documentation</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Due to fast-changing airline pricing and travel restrictions, it is highly recommended that all customers verify any final information directly with the airline or by contacting one of our travel disposers before making a purchase or before leaving for the airport.
                        </p>

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Pricing and Availability
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>All prices available through this website are subject to change prior to complete confirmation of a booking for when the ticket is issued. A price shown on a search, or price, does not mean this price will still exist once payment is made or when the ticket is issued.</p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Airline tax, airport fees, government charges, and fuel surcharges can change: These changes depend on what the airline chooses to charge and what the airline and/or the government think at any given time. First Class Flight will have no liability for any increase or change to these amounts after a booking has been made.</p>


                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>External Links
                        </h2>


                        <p className='text-sm sm:text-base md:text-lg text-justify'>First Class Flight may have links to other companies' sites, such as those from airlines or partners. If you click on one of these links, please remember that First Class Flight has no responsibility for how safe or secure those sites may be (whether due to their content being incorrect/false, how genuine their offers are, etc.). In addition, you acknowledge that First Class Flight cannot be held responsible/liable (in any manner whatsoever) for anything that is on the third-party websites, even though they are merely links from our site.</p>


                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Travel Information and Advice
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>You are not required to use this website as a source for any information, such as travel details regarding destinations, airlines, visa requirements, immunization recommendations, and travel documents; instead, the information will serve as a general guideline and does not take precedence over information provided to you directly by airlines or government entities.</p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Please note, it is the responsibility of the traveller to ensure they have all travel-related documents, including passports, visas, immunizations, customs restrictions, and all other entry requirements. First Class Flight is not liable for any consequences resulting from failure to have or meet applicable travel requirements.</p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Limitation of Liability
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>To the maximum extent permitted by law, First Class Flight, its owners, agents, employees, and partners will not be liable for:</p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Any direct, indirect, incidental, special, or consequential damages;</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Loss of profits;</li>
                            <li>Any loss of data or information; and</li>

                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Damages arising from the use of this website or reliance on the information contained in this website, even if First Class Flight has been advised that such damage may occur.</p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>These limitations apply even if we have been informed that such damages could occur.</p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Changes to this Disclaimer
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>At any time, we may amend this disclaimer without prior notice, and any amendments will be added to this page as they occur. You agree to continue your use of the Site, subject to the updated version of the disclaimer.</p>


                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact Us
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>If you would like more information about this disclaimer or how we handle your data, please feel free to contact us at.</p>


                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>First Class Flight</h2>

                        <p className='text-sm sm:text-base md:text-lg text-justify'>17662 Irvine Blvd, Suite 9, Tustin, CA 92780, USA                                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Email: <NavLink to={'mailto:info@firstclassflight.com'} className={' text-red-600 hover:underline hover:decoration-2 hover:decoration-red-600 hover:text-red-300 transition'}>info@firstclassflight.com</NavLink></p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'> Phone: <NavLink to={'tel:+18663075957'} className={'text-red-600 hover:underline hover:decoration-2 hover:decoration-red-600 hover:text-red-300 transition'}>8663075957</NavLink></p>

                    </div>

                </div>
            </section>
        </>
    )
}
