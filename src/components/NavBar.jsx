import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import {Menu,X} from 'lucide-react'
export default function Navbar() {
    let [scroll, setscroll] = useState(false)
    let [mobile, setmobile] = useState(false)
    
    useEffect(() => {
        let scrolled =()=>setscroll(window.scrollY > 100)
            window.addEventListener("scroll", scrolled)
            return () => window.removeEventListener("scroll", scrolled)
    }, [])
    let navitems = [
        {
            title: "Home",

            path: "/home"
        },
        {
            title: "Business Class Flights",

            path: "/business-class-flights"
        },
        {
            title: "About Us",

            path: "/about"
        },
        // {
        //     title: "Booking Steps",
        //     path: "booking-steps"
        // },
        // {
        //     title: "Blogs",
        //     path: "blogs"
        // },
        {
            title: "Gift Vouchers",
            path: "gift-vouchers"
        },
        {
            title: "Contact Us",

            path: "/contact-us"
        }
    ]
    return (
        <>
            <nav className={`sticky top-0  w-full z-1000 transition-all duration-300 ${scroll ? 'bg-black text-white' : 'bg-transparent text-black'}`}>
                <div className='max-w-8xl mx-auto h-20  flex items-center justify-between'>

                    <NavLink to={'/'}>
                        {" "}
                        <img src="/images/logo/FCF LOGO.png" className='h-12 sm:h-15 md:h-18 ms-3 mt-2' alt="firstclassflight logo" />
                    </NavLink>
                    <div className='hidden md:flex space-x-4'>
                        {
                            navitems.map((item, id) => (
                                <NavLink key={id} className={'me-5 text-xl  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'} to={item.path}>{item.title}</NavLink>
                            ))
                        }
                    </div>
                    <button className='md:hidden' onClick={() => { setmobile(!mobile) }}>
                        {mobile ? <X size={28} /> : <Menu size={28} />}
                    </button>
                      </div>
                    {
                        mobile && (
                            <div className='md:hidden bg-black text-white p-5 space-y-4'>
                                
                                   <div  className='space-y-4'>
                                    {
                                     navitems.map((item, id) => (
                                        <NavLink key={id} className={'block hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'} to={item.path}>{item.title}</NavLink>
                                    ))
                    }
                                   </div>
                                
                            </div>
                        )
                    }
              
            </nav>
        </>
    )
}
