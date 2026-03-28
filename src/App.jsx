import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import NotFound from './components/PageNotFound';
import BlogPage from './pages/BlogPage';
import SingleBlog from './pages/SingleBlog';

let Home = lazy(() => import('./pages/Homepage'))
let About = lazy(() => import('./pages/Aboutpage'))
let Privacy = lazy(() => import('./pages/policies/Privacy_policy'))
let TermsConditions = lazy(() => import('./pages/policies/Term_And_Condition'))
let Refund = lazy(() => import('./pages/policies/RefundPolicy'))
let Faq = lazy(() => import('./components/Faq'))
let ContactUs = lazy(() => import('./components/Contactus'))
let AboutPage = lazy(() => import('./pages/Aboutpage'))
let SearchFlights = lazy(() => import('./components/SearchFlights'))
let Supports = lazy(() => import('./components/Supports'))
let Disclaimers = lazy(() => import('./pages/policies/Disclaimer'))
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/refund-and-cancellation-policy" element={<Refund />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/search-flights" element={<SearchFlights />} />
            <Route path="/support" element={<Supports />} />
            <Route path="/disclaimer" element={<Disclaimers />} />
            <Route path='/blogs' element={<BlogPage/>}/>
            <Route path='/blog/:slug' element={<SingleBlog/>}/>
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  )
}
