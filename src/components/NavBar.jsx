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

            path: "/"
        },
        {
            title: "Search Flights",

            path: "/search-flights"
        },
        {
            title: "About Us",

            path: "/about-us"
        },
        {
            title: "FAQ",
            path: "/faq"
        },
        {
            title: "Contact Us",

            path: "/contact-us"
        }
    ]
    return (
        <>
            <nav className={` top-0  w-full z-1000 transition-all duration-300 bg-gradient-to-r  from-gray-700/40 via-gray-800/60 to-gray-900/90 text-white `}>
                <div className='max-w-8xl mx-auto h-20  flex items-center justify-between'>

                    <NavLink to={'/'}>
                        {" "}
                        <img src="/images/logo/FCF LOGO.png" className='h-12 sm:h-15 md:h-20 py-2 ms-3 mt-2' alt="firstclassflight logo" />
                    </NavLink>
                    <div className='hidden md:flex space-x-4'>
                        {
                            navitems.map((item, id) => (
                                <NavLink key={id} className={'me-5 text-base  hover:text-red-600 text-white  hover:decoration-2 space-y-3 transition-all duration-300 ease-in'} to={item.path}>{item.title}</NavLink>
                            ))
                        }
                    </div>
                    <div className='rounded-3xl bg-red-600 mx-5 text-white font-semibold'>
                        <button className={`p-4 bg--650 rounded-sm `}><NavLink to={'tel:9155014125'}>Book Now</NavLink> </button>
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
                                        <NavLink key={id} className={'block font-semibold hover:text-red-600  hover:decoration-2 transition-all duration-300 ease-in'} to={item.path}>{item.title}</NavLink>
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
