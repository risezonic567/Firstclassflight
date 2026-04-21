import React from 'react'
import Home from '../components/Home'
import { Helmet } from "react-helmet"
export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>First Class Flight Deals | Luxury & Discount Premium Airfare</title>
        <meta name="description" content='Find exclusive first class flight deals and premium airfare options for international travel. Compare luxury flight fares and book with confidence.'></meta>
        <link rel="canonical" href="https://www.first-classflight.com" />
        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@graph":[
  {
    "@type":"Organization",
    "name":"First Class Flight",
    "url":"https://www.first-classflight.com/",
    "logo":"https://www.first-classflight.com/images/logo/FCF%20LOGO.png",
    "email":"info@firstclassflight.com",
    "telephone":"+866 307-5957",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"A-16 17662 Irvine Blvd, Suite 9",
      "addressLocality":"Tustin",
      "addressRegion":"CA",
      "postalCode":"92780",
      "addressCountry":"US"
    },
    "sameAs":[
      "https://www.facebook.com/firstclassflight01",
      "https://www.youtube.com/@FirstclassFlight-1",
      "https://www.instagram.com/firstclassflight1/?hl=en",
      "https://www.linkedin.com/company/us-railway-booking",
      "https://in.pinterest.com/firstclassflight13/"
    ]
  },
  {
    "@type":"TravelAgency",
    "name":"First Class Flight",
    "url":"https://www.first-classflight.com/",
    "logo":"https://www.first-classflight.com/images/logo/FCF%20LOGO.png",
    "telephone":"+866 307-5957",
    "email":"info@firstclassflight.com",
    "address":{
      "@type":"PostalAddress",
      "streetAddress":"A-16 17662 Irvine Blvd, Suite 9",
      "addressLocality":"Tustin",
      "addressRegion":"CA",
      "postalCode":"92780",
      "addressCountry":"US"
    },
    "areaServed":"Worldwide",
    "serviceType":"First Class and Business Class Flight Booking"
  },
  {
    "@type":"WebSite",
    "name":"First Class Flight",
    "url":"https://www.first-classflight.com/",
    "potentialAction":{
      "@type":"SearchAction",
      "target":"https://www.first-classflight.com/search-flights?q={search_term_string}",
      "query-input":"required name=search_term_string"
    }
  }
  ]
}

`}
        </script>
      </Helmet>
      <Home />
    </>
  )
}
