import { useState, useEffect, useRef } from "react";

// Image imports
import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";
import slide6 from "../assets/slides/slide6.jpg";
import slide7 from "../assets/slides/slide7.jpg";
import slide8 from "../assets/slides/slide8.jpg";
import slide9 from "../assets/slides/slide9.jpg";
import slide10 from "../assets/slides/slide10.jpg";
import slide11 from "../assets/slides/slide11.jpg";

export default function Slideshow() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
  ];

  const totalSlides = slides.length;
  const slidesPerView = 3;

  // ⬇️ Start at index 0 every time
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const slideshowRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 🟢 Auto-slide only when in view
  useEffect(() => {
    let timer;
    if (isInView) {
      timer = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(timer);
  }, [isInView]);

  // 👁 Set up IntersectionObserver to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const ref = slideshowRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  // 🖼 Generate the 3 visible slides from currentIndex
  const visibleSlides = [];
  for (let i = 0; i < slidesPerView; i++) {
    const index = (currentIndex + i) % totalSlides;
    visibleSlides.push(slides[index]);
  }

  return (
    <div
      ref={slideshowRef}
      className="relative flex flex-col items-center w-full max-w-7xl mx-auto py-10"
    >
      {/* Slide container */}
      <div className="relative flex w-full justify-center items-center overflow-hidden">
        <div className="flex justify-center gap-4 transition-transform duration-500 ease-in-out px-6">
          {visibleSlides.map((slide, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh] md:h-[70vh] object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center w-full mt-8 px-10">
        <button
          onClick={prevSlide}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg"
        >
          ‹ Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg"
        >
          Next ›
        </button>
      </div>
    </div>
  );
}
