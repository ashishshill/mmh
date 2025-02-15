import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Stripy Zig Zag Jigsaw Pillow and Duvet Set",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Real Bamboo Wall Clock",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Brown and Blue Hardbound Book",
    link: "#",
  },
];

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full" style={{ height: '530px' }}>
      <div className="relative overflow-hidden w-full" style={{ height: '530px' }}>
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 h-full relative">
              <div
                className="h-full w-full bg-cover bg-center flex items-center pl-16 text-white"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-lg">
                  <p className="text-white text-4xl font-bold">{item.title}</p>
                  <a
                    href={item.link}
                    className="mt-4 inline-block text-white underline hover:text-gray-300 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 "
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-black p-3 shadow-md hover:bg-gray-300 z-10 "
        onClick={handleNext}
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setSelectedIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
