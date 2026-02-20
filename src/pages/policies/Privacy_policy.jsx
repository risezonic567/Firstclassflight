import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'


export default function PrivacyPolicy() {
    return (
        <>
            <section>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Privacy Policy</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            This Privacy Policy describes how First Class Flight collects, uses, stores, and shares your information when you visit the site, request a quote, or book a flight. At First Class Flight, protecting your personal information is an integral part of our company's business operations, and when you think of flying in first class, you are trusting us with your sensitive travel & contact information. Because we take this trust seriously, we would like to provide you with an explanation of the methods (and the reasons) we choose to collect and handle your data. Through this Privacy Policy, we are committed to being transparent as to how your data is handled, as well as to using it only for legitimate travel and service-related purposes (as stated in our privacy policy). By using our service or entering your information, you are agreeing to the terms outlined within this privacy policy.

                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Information We Collect</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>In order to provide our services, we may gather the following types of personal and travel information:
                        </p>
                        <div className='ms-3 p-4 sm:p-5 md:p-6'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl'>Personal Information</h2>
                            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                                <li> Full name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Mailing or billing address</li>
                                <li>Passport or travel document details (if required for booking)</li>
                            </ul>

                        </div>
                        <div className='ms-3 p-4 sm:p-5 md:p-6'>
                            <h2 className='text-xl sm:text-2xl md:text-3xl'></h2>
                            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                                <li>Travel and Booking Information</li>
                                <li>Departure City and Destination City</li>
                                <li>Travel Dates</li>
                                <li>Preferred Airline and Cabin.</li>
                                <li>Traveller Name and Detail</li>
                            </ul>
                        </div>
                        <div className='ms-3 p-4 sm:p-5 md:p-6'>

                            <h2 className='text-xl sm:text-2xl md:text-3xl'> Payment Information</h2>
                            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                                <li>Credit Card or Debit Card Information</li>
                                <li>Billing Address</li>
                                <li>All Transaction History</li>
                            </ul>
                            <p className='text-sm sm:text-base md:text-lg text-justify'>(Payment information is processed safely through our third-party payment processing partners.)</p>
                        </div>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'> How We Use Your Information</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Your information may be used for these purposes:
                        </p>

                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>

                            <li>To process flight inquiries and bookings</li>
                            <li>To communicate confirmations and travel updates</li>
                            <li>To provide customer support</li>
                            <li>To process payments and refunds</li>
                            <li>To improve our website and services</li>
                            <li>To send promotional offers (if you sign up)
                            </li>
                        </ul>

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>To send promotional offers (if you sign up)
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>We can improve your user experience by using cookies and other similar technologies on our website, including:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>	Increasing your experience while using the website</li>
                            <li>	Assessing website traffic performance.</li>
                            <li>	Maintaining site visitor/user settings/preferences.</li>

                        </ul>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>

                        <h2 className='text-xl sm:text-2xl md:text-3xl'>We may utilize software systems such as:</h2>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Analytics tools</li>
                            <li>Basic Performance Cookies and Functional Cookies.</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>You have the option to prevent cookies from being used via your internet browsers’ options; however, some features of this site may not operate correctly when there are no cookies allowed.</p>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Data Security</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>To keep your personal information safe from unauthorized access and misuse, we have reasonable safeguards in place (administratively, technically, and physically). Though we take reasonable precautions, there is no online transmission that can be 100% secure, and we cannot guarantee that your information will be completely safe online.
                        </p>

                    </div>



                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>User Rights</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Depending on where you live, you might have the following rights:
                        </p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>	Access your personal information</li>
                            <li>	Request corrections or updates to your personal information.</li>
                            <li>  Request corrections or updates to your personal information.</li>
                            <li>	Opt out of receiving promotional materials from us</li>

                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            If you would like to request any of these rights, please contact us at:
                            <NavLink className={``} to={'mailto:info@firstclassflight.com'}>info@firstclassflight.com</NavLink>

                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Third Party Links</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>We provide links to other websites, but we do not control or bear responsibility for their content or privacy policies.</p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Policy Updates</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>We will review this Privacy Policy regularly and update it as necessary. The date on which the Privacy Policy is updated will be listed here.</p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact Information</h2>

                        <p className='text-sm sm:text-base md:text-lg text-justify'>First Class Flight
                            17662 Irvine Blvd, Suite 9
                            Tustin, CA 92780, USA
                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Email: <NavLink to={'mailto:info@firstclassflight.com'} className={' text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>info@firstclassflight.com</NavLink></p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'> Phone: <NavLink to={'tel:8663075957'} className={'text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>8663075957</NavLink></p>

                    </div>

                </div>
            </section>
        </>
    )
}
