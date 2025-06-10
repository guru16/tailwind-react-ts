import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IconHeart } from "@tabler/icons-react";

const products = [
  {
    name: "Multicolour Striped Polo T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    offer: "20% OFF"
  },
  {
    name: "Black Knitted Trackpant",
    price: 1199,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    offer: null
  },
  {
    name: "Olive Contrast Collar Knit T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80",
    offer: "10% OFF"
  },
  {
    name: "Wine Self Stripe T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    offer: null
  },
  {
    name: "Mustard Printed Stripe T-Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
    offer: "15% OFF"
  },
  {
    name: "Blue Striped Shirt",
    price: 1099,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    offer: null
  },
  {
    name: "Beige Lightweight Stripe Shirt",
    price: 1099,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    offer: "25% OFF"
  },
  {
    name: "Multicolour Abstract Print Half Sleeve Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    offer: null
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="w-full py-14 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-900 tracking-tight">
          New Arrivals
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-red-500 rounded-full"></div>
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
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.offer && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                      {product.offer}
                    </span>
                  )}
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
        <div className="flex justify-center mt-6">
          <button className="px-8 py-3 bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full font-semibold shadow transition-all flex items-center gap-2">
            VIEW ALL PRODUCTS
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 