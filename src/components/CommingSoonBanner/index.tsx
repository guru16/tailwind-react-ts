import { useEffect, useState } from 'react';

export default function ComingSoonBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`relative w-full h-screen flex items-center justify-center px-6 md:px-12
          bg-[url('https://cdn.pixabay.com/photo/2020/01/09/08/49/dress-4752316_1280.jpg')]
          bg-repeat bg-cover bg-center
          transition-opacity duration-1000 ease-in-out
          ${visible ? 'opacity-100' : 'opacity-0'}
          bg-blend-multiply bg-gray-900/80
        `}
      >
        <div
          className="max-w-3xl p-10 rounded-xl text-center bg-transparent"
          style={{
            border: '3px solid white',
            outline: '3px solid white',
            outlineOffset: '6px',
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
            Coming Soon
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
            Something amazing is on its way. Stay tuned for the latest collection of men’s shirts with unmatched style and comfort.
          </p>
        </div>
      </div>
    </>
  );
}
