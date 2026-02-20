import { Home } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function TermsAndCondition() {
    return (
        <>
            <section>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><Home size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Term-And-Condition</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            These terms and conditions define how to use our website as well as the travel services that we offer. These terms define what will happen once you have accessed our site, requested a quote, and booked a flight. Our site helps travelers get premium cabin rates with our airline and travel partners. Because of the complexity of airline regulations regarding the purchase of airline tickets, it is a good idea for customers to clearly know the terms for making a reservation. The purpose of these terms is to identify the parties' obligations and payment terms and limit liability and ensure both parties clearly understand their respective obligations before and after making a reservation
                        </p>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Nature of Our Services</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            We will function as a travel agency and an intermediary between clients and the products offered by suppliers, including airlines. We do not own or control airlines, but we help our clients purchase airline tickets.
                        </p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Booking and Payment</h2>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>We cannot issue a ticket to you until the full payment for the service has been received.</li>
                            <li>Pricing for air transportation cannot be confirmed until the ticket has been issued.</li>
                            <li>An airline fare can be changed at any time prior to issuing a ticket</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>A booking is considered confirmed once you have received a ticket.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Pricing and Availability</h2>

                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>

                            <li> All aircraft charges are governed by the airline's policy as well as the availability of the specific ticket type.</li>
                            <li>Promotional and discounted tickets may come with special stipulations.</li>
                            <li>Promotional and discounted tickets may come with special stipulations.</li>
                        </ul>

                    </div>







                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Travel Documents</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>The individual traveler is responsible for:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>A valid passport.</li>
                            <li>	A visa and/or permit for each country being traveled to.</li>
                            <li>Any health/vaccination requirement.</li>
                            <li>	Any health/vaccination requirement.</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>The passenger is responsible for any denial of boarding based on incorrect documentation.</p>
                    </div>








                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Changes & Cancellations </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>All modifications and cancellations are contingent upon:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Airline fare regulations.</li>
                            <li>	Ticket conditions</li>
                            <li>Penalties imposed by airlines.</li>
                            <li>	Agency service charge</li>
                        </ul>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Limitation of Liability</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Liability for the following is not assumed by First Class Flights:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>
                                Flight delays or cancellations.</li>
                            <li>
                                Altering of schedules</li>
                            <li>Airline operational problems.</li>
                            <li>Loss or damage of baggage.</li>
                            <li>Any other force majeure event</li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>All the circumstances hereinabove are the airline or travel suppliers' responsibility</p>
                    </div>



                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Refunds</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Refunds (if applicable) will be processed according to the rules of the airline.A cancellation or a change might incur a service fee</p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Website Use</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>You agree not to:</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Use the website for illegal purposes</li>
                            <li>Try to access the website in an unauthorized manner</li>
                            <li>Copy or abuse content on the website
                            </li>
                        </ul>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>These terms are governed by the laws of California, USA.</p>
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
