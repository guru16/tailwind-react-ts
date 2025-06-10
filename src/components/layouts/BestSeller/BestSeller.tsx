import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IconHeart } from "@tabler/icons-react";

const bestSellers = [
  {
    name: "Classic White Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Urban Black T-Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Slim Fit Blue Shirt",
    price: 1399,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Printed Summer Tee",
    price: 999,
    image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Beige Casual Shirt",
    price: 1199,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
];

const BestSeller: React.FC = () => {
  return (
    <section className="w-full py-14 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-900 tracking-tight">
          Best Sellers
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {bestSellers.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                    Best Seller
                  </span>
                  <button className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors shadow">
                    <IconHeart size={22} />
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-bold text-base mb-2">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSeller; 