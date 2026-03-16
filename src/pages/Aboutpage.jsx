import React from 'react'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import { Helmet } from 'react-helmet'

export default function Aboutpage() {
  return (
    <>
      <Helmet>
        <title>About First Class Flight | Premium Travel Experts</title>
        <meta name='description' content='Learn about First Class Flight, a trusted premium travel specialist helping travelers find first and business class flight deals worldwide.'></meta>
        <link rel="canonical" href="https://www.first-classflight.com/about-us" />
    <script type="application/ld+json">
          {`{
 "@context":"https://schema.org",
 "@type":"AboutPage",
 "name":"About First Class Flight",
 "url":"https://www.first-classflight.com/about-us",
 "description":"First Class Flight helps travelers find competitive first class and business class flight deals worldwide.",
 "publisher":{
 "@type":"Organization",
 "name":"First Class Flight",
 "logo":{
 "@type":"ImageObject",
 "url":"https://www.first-classflight.com/images/logo/FCF%20LOGO.png"
 }
 }
}

`}
        </script>
      </Helmet>
      <About />
      <Testimonials />
    </>
  )
}
