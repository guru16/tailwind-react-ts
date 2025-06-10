import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ComingSoonBanner from "../CommingSoonBanner";

const banners = [
  {
    title: "New Arrivals are Here!",
    subtitle: "Shop the latest trends at unbeatable prices.",
    image: "https://cdn.pixabay.com/photo/2023/03/06/21/28/men-7834508_1280.jpg"
  },
  {
    title: "Summer Collection 2025",
    subtitle: "Bright, bold, and beautiful styles.",
    image: "https://cdn.pixabay.com/photo/2023/03/06/21/28/men-7834507_1280.jpg",
  },
  {
    title: "Up to 50% Off",
    subtitle: "Grab your favorite pieces before they’re gone!",
    image: "https://cdn.pixabay.com/photo/2023/03/06/21/28/men-7834508_1280.jpg",
  },
];

const Banner = () => {
  return (
    <div className="relative w-full mt-[80px] h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {/* First slide: Coming Soon Banner */}
        <SwiperSlide className="w-full h-full">
          <ComingSoonBanner />
        </SwiperSlide>

        {/* Other slides */}
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-end px-6 md:px-20 text-white"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="max-w-xl backdrop-blur-sm bg-black/40 p-6 rounded-md relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-lg">{banner.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
