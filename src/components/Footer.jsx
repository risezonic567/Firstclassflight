import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
 FaPinterest,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, PhoneCall, Copyright } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const elements = footerRef.current.querySelectorAll(".footer-animate");

    gsap.fromTo(
      elements,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="w-full bg-gradient-to-r from-gray-700/40 via-gray-800/80 to-gray-900/90 text-white pt-16 pb-8"
      >
        <div className="max-w-7xl mx-auto  grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + About */}
          <div className="footer-animate space-y-5">
            <NavLink to="/">
              <img
                src="/images/logo/FCF LOGO.png"
                className="h-20"
                alt="logo"
              />
            </NavLink>
            <p className="text-sm text-gray-300 leading-relaxed">
              We provide premium first class flight deals, luxury travel planning,
              exclusive fares, and personalized support for seamless journeys.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[{i:FaInstagram,link:"https://www.instagram.com/firstclassflight1/?hl=en"}, {i:FaYoutube,link:"https://www.youtube.com/@FirstclassFlight-1"}, {i:FaFacebook,link:"https://www.facebook.com/firstclassflight01/"},{i:FaPinterest,link:"https://www.pinterest.com/firstclassflight13/"},{i:FaLinkedin,link:"https://www.linkedin.com/company/first-class-flight1/"}].map(
                (Icon, i) => (
                  <NavLink
                  to={Icon.link}
                    key={i}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-red-600 transition duration-300 cursor-pointer"
                  >
                  <Icon.i className="text-xl hover:scale-110 transition" />
                  </NavLink> 
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <h2 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
              Quick Links
            </h2>
            <div className="space-y-3 text-gray-300">
              {["/", "/about-us", "/search-flights", "/support", "/blogs", "/contact-us"].map(
                (path, i) => (
                  <NavLink
                    key={i}
                    to={path}
                    className="block hover:text-red-400 transition"
                  >
                    {path.replace("/", "").replace("-", " ") || "Home"}
                  </NavLink>
                )
              )}
            </div>
          </div>

          {/* Support Links */}
          <div className="footer-animate">
            <h2 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
              Support
            </h2>
            <div className="space-y-3 text-gray-300">
              {[
                "/privacy-policy",
                "/terms-and-conditions",
                "/disclaimer",
                "/faq",
                "/refund-and-cancellation-policy",
              ].map((path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  className="block hover:text-red-400 transition"
                >
                  {path.replace("/", "").replace(/-/g, " ")}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-animate space-y-6">
            <h2 className="text-xl font-semibold border-b border-white/20 pb-2">
              Contact Us
            </h2>

            <div className="flex items-start gap-4">
              <MapPin size={22} />
              <p className="text-sm text-gray-300">
                A-16 17662 Irvine Blvd, Suite 9, Tustin, CA 92780
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={20} />
              <a href="mailto:support@gmail.com" className="text-sm hover:text-red-400">
                support@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <PhoneCall size={20} />
              <a href="tel:9155014125" className="text-sm hover:text-red-400">
                +91 91550 14125
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400 space-y-2">
          <div className="flex justify-center items-center gap-2">
            <Copyright size={16} />
            2026 FirstClassFlight. All rights reserved.
          </div>
          <div>
            Developed & Designed by{" "}
            <span className="text-red-400 font-semibold">Risezonic</span>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-24 right-6 z-50">
        <a
          href="https://wa.me/9155014125"
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
          <FaWhatsapp className="text-white text-2xl relative z-10" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:9155014125"
          className="relative w-14 h-14 bg-red-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-20"></span>
          <PhoneCall className="text-white relative z-10" size={24} />
        </a>
      </div>
    </>
  );
}