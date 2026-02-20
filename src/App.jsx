import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/policies/Privacy_policy'
import TermsAndCondition from './pages/policies/Term_And_Condition'
import RefundPolicy from './pages/policies/RefundPolicy'
import Homepage from './pages/Homepage'

export default function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar />
   <Routes>
     <Route path="/" element={<Homepage />} />
   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
   <Route path="/term-and-condition" element={<TermsAndCondition />} />
   <Route path="/refund-and-cancellation-policy" element={<RefundPolicy />} />

   </Routes>
   <Footer />
   </BrowserRouter>
   </>
  )
}
