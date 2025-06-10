import React from "react";
import { IconTruck, IconRefresh, IconShieldCheck, IconCreditCard } from "@tabler/icons-react";

const features = [
  {
    icon: <IconShieldCheck size={36} className="text-blue-600" />,
    title: "Premium Quality",
    desc: "Only the best materials and craftsmanship."
  },
  {
    icon: <IconTruck size={36} className="text-blue-600" />,
    title: "Fast Shipping",
    desc: "Quick, reliable delivery to your doorstep."
  },
  {
    icon: <IconRefresh size={36} className="text-blue-600" />,
    title: "Easy Returns",
    desc: "Hassle-free 7-day return policy."
  },
  {
    icon: <IconCreditCard size={36} className="text-blue-600" />,
    title: "Secure Payments",
    desc: "100% safe and encrypted transactions."
  },
];

const WhyChooseUs: React.FC = () => (
  <section className="w-full py-14 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 