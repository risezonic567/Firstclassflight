import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Testimonials() {
 let reviews=[
  {
    "name": "Corporate Executive",
    "location": "New York",
    "img": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    "message": "Saved nearly $3,000 on a business class ticket to London. The process was smooth, and the support was outstanding."
  },
  {
    "name": "Entrepreneur",
    "location": "Toronto",
    "img": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    "message": "They handled my last-minute itinerary perfectly. I’ll never go back to booking premium flights online."
  },
  {
    "name": "Frequent Flyer",
    "location": "Los Angeles",
    "img": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
    "message": "Excellent first-class deal and very professional service from start to finish."
  },
  {
    "name": "Luxury Travel Consultant",
    "location": "Dubai",
    "img": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80",
    "message": "Exceptional service and unbeatable business class fares. The team arranged everything flawlessly and professionally"
  },
  {
    "name": "Startup Founder",
    "location": "Singapore",
    "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    "message": "Quick responses, transparent pricing, and premium seats made my international travel completely stress-free."
  },
  {
    "name": "Senior Manager",
    "location": "London",
    "img": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    "message": "Great experience booking luxury flights. Seamless process, excellent support, and outstanding value for money."
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
    </section>
        </>
    )
}
