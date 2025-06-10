import React from "react";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/data";
import Header from "../components/layouts/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/layouts/Footer/Footer";
import TopHead from "../components/layouts/TopHead/TopHead";
import CategoryCollection from "../components/layouts/CategoryCollection";
import ProductShowcase from "../components/layouts/ProductShowcase";
import WhyChooseUs from "../components/layouts/WhyChooseUs";
import Newsletter from "../components/layouts/Newsletter";
import BestSeller from "../components/layouts/BestSeller";

const Home: React.FC = () => {
  return (
    <>
      <TopHead />
      <Header />
      <Banner />
      <CategoryCollection />
      <BestSeller />
      <ProductShowcase />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
