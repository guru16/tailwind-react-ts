import React from "react";

const categories = [
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    description: "Explore our premium shirts collection."
  },
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    description: "Discover trendy and comfortable t-shirts."
  }
];

const CategoryCollection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {cat.name}
                </h3>
                <p className="text-white text-base md:text-lg font-medium drop-shadow">
                  {cat.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCollection; 