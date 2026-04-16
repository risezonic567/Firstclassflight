import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { faqdata } from '../data/faqdata';
const tabs = [
    { label: "Search", key: "booking_search" },
    { label: "Payment", key: "payment_pricing" },
    { label: "Cancellation", key: "cancellation_refund" },
    { label: "Changes", key: "changes_rescheduling" },
    { label: "Baggage", key: "baggage_checkin" },
    { label: "Visa", key: "visa_documents" },
    { label: "Delays", key: "delays_cancellations" },
    { label: "Account", key: "account_support" }
];
export default function Faq() {
    let [tab, settab] = useState("booking_search")
    let [open, setopen] = useState(null)
    let selectedFaq = faqdata[tab] || []
    console.log(selectedFaq)
    console.log(faqdata)
    return (
        <>
            <section>
                <Helmet>
                    <title>First Class Flight FAQs | Premium Travel Questions</title>
                    <meta name='description' content='Find answers to common questions about first class and business class flights, booking processes, pricing, and premium travel options.'></meta>
                    <link rel="canonical" href="https://www.first-classflight.com/faq" />
                </Helmet>
                <div className='max-w-7xl mx-auto py-10 px-4'>
                    <h1 className='text-center text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 md:p-5 text-red-600'>Frequntly Asked Questions</h1>
                    <div className='text-center m-auto'>
                        {
                            tabs.map((item, id) => (
                                <button key={id} onClick={() => settab(item.key)} className={`cursor-pointer bg-gray-600/90 text-center p-1 sm:p-2 md:p-3 text-white rounded gap-10 ms-5 mt-3 ${item.key === tab ? 'bg-red-500 transition duration-300 cursor-pointer' : ''}`}>
                                    {item.label}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section>
                <div data-aos="zoom-out-down">
                    <div className="max-w-7xl mx-auto py-12 px-4">
                        <div className='grid grid-cols-1 gap-5 m-auto text-center'>
                            {
                                selectedFaq?.map((item, id) => {
                                    let openIndex = open === id
                                    return (
                                        <div key={id} className='border rounded-2xl overflow-hidden '>
                                            <button className={`flex items-center justify-between p-4 md:p-5 text-left w-full ${openIndex ? "bg-red-600 text-white" : ""}`} onClick={() => setopen(openIndex ? null : id)}>

                                                <h3 className=''>{item.question}</h3>
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
