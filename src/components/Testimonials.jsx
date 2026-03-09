import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Testimonials() {
  let reviews = [





    {
      "name": "Corporate Executive",
      "img": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
      "location": "New York",
      "message": "I needed a last-minute business class ticket to London and was honestly expecting to overpay. The team found a far better option than I saw online. Clear pricing, fast ticketing, and excellent follow-up."
    },
    {
      "name": "Startup Founder",
      "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
      "location": "San Francisco",
      "message": "Booked a first-class seat to Dubai and saved significantly compared to booking directly with the airline. What impressed me most was how thoroughly they explained fare rules before I confirmed."
    },
    {
      "name": "Financial Consultant",
      "img": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
      "location": "Chicago",
      "message": "I fly internationally several times a year, and this was one of the smoothest booking experiences I’ve had. The itinerary was optimized perfectly, and the support team stayed responsive even after ticketing."
    },
    {
      "name": "Medical Professional",
      "img": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
      "location": "Houston",
      "message": "Traveling with family in premium cabins can get complicated, but they handled seat coordination and meal preferences without missing a detail. It felt personal, not transactional."
    },
    {
      "name": "Tech Entrepreneur",
      "location": "Seattle",
      "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "message": "I compared multiple platforms before booking. Their pricing was competitive, but the real value was the guidance. They helped me choose a better connection with more flexible change terms."
    },
    {
      "name": "Luxury Travel Enthusiast",
      "location": "Miami",
      "img": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
      "message": "I’ve booked premium flights for years, and this experience stood out. Transparent breakdown of costs, no hidden surprises, and the tickets were issued quickly. I’ll definitely use them again."
    }
  ]
  return (
    <>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        <Swiper
          spaceBetween={20}
          speed={500}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-full rounded-2xl border p-6 bg-white shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  “{item.message}”
                </p>
              </div> 
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="h-screen flex flex-col justify-center items-center 
                    bg-gradient-to-br from-black via-gray-900 to-black 
                    text-white text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6"
      >
        Build Modern UI 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-400 max-w-xl mb-8"
      >
        Pro level animation with React + Tailwind + Framer Motion.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                   transition-all duration-300"
      >
        Get Started
      </motion.button>

    </div> */}

      </section>

    </>
  )
}
