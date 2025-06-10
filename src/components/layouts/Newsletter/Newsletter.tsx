import React from "react";

const Newsletter: React.FC = () => (
  <section className="w-full py-14 px-4 md:px-8 bg-blue-50">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900">Stay in the Loop!</h2>
      <p className="text-gray-600 mb-6">Sign up for our newsletter to get the latest updates, exclusive offers, and more.</p>
      <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition shadow"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter; 