import React, { useEffect, useRef, useState } from "react";

const messages = [
  "Free Shipping on all orders",
  "Flat 10% Discount on Pre-Paid Orders",
  "Hassle-Free Returns",
  "New Arrivals Every Week",
];

const SLIDE_DURATION = 2500;
const ANIMATION_DURATION = 700;

const TopHead: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        setAnimating(false);
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="w-full bg-neutral-900 text-white text-center text-sm md:text-base font-semibold flex items-center h-10 md:h-12 overflow-hidden relative select-none">
      <div
        className="flex items-center w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${messages.length * 100}%`,
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-10 md:h-12 w-full whitespace-nowrap px-4"
            style={{ minWidth: "100%" }}
          >
            <span className="font-bold">{msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHead; 