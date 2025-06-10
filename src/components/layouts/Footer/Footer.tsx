import { Box, Container } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
  IconArrowRight,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <Box component="footer" className="bg-black text-white py-10">
      <Container className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">TypeZer0</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              TypeZer0 is your go-to destination for the latest fashion and trends. We blend quality with style to bring you the best in modern wear.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">
              Sign up for new stories and personal offers
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:flex-grow px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition flex items-center justify-center"
              >
                <IconArrowRight size={20} stroke={2.5} color="white" />
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><IconBrandFacebook size={24} /></a>
              <a href="#" className="hover:text-pink-500 transition"><IconBrandInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition"><IconBrandTwitter size={24} /></a>
              <a href="#" className="hover:text-red-600 transition"><IconBrandYoutube size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TypeZer0. All rights reserved.
        </div>
      </Container>
    </Box>
  );
}
