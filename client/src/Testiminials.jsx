import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import male2 from "../images/male2.jpg";
import male1 from "../images/male1.jpg";
import male3 from "../images/male3.jpg";
import female3 from "../images/female3.jpg";
import female2 from "../images/female2.jpg";
import female1 from "../images/female1.jpg";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Ecommerce Business Owner",
    content:
      "Aussie Growth Media redesigned our ecommerce website and optimized our ads. Our conversion rate increased significantly within the first month.",
    rating: 5,
    image: male1,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Startup Founder",
    content:
      "From branding to lead generation, their team handled everything professionally. We now get consistent, high-quality leads every week.",
    rating: 5,
    image: female1,
  },
  {
    id: 3,
    name: "Daniel Thompson",
    role: "Real Estate Consultant",
    content:
      "Their SEO and Google Ads strategy helped us rank higher locally. The results were better than any agency we worked with before.",
    rating: 5,
    image: male2,
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Small Business Owner",
    content:
      "Aussie Growth Media built a clean service website for us and managed hosting seamlessly. Super responsive and reliable team.",
    rating: 5,
    image: female2,
  },
  {
    id: 5,
    name: "Ryan Mitchell",
    role: "Marketing Manager",
    content:
      "Their Meta Ads and content marketing strategy boosted our engagement and sales. Clear communication and real performance-driven work.",
    rating: 5,
    image: male3,
  },
  {
    id: 6,
    name: "Olivia Brown",
    role: "Agency Partner",
    content:
      "We use Aussie Growth Media for white-label services. Their delivery, automation, and reporting are top-notch.",
    rating: 5,
    image: female3,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed to lg breakpoint for better grid handling
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slowed down slightly for better reading time

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => {
        const next = prev + 3;
        return next >= testimonials.length ? 0 : next;
      });
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
    } else {
      setCurrentIndex((prev) => {
        const next = prev - 3;
        return next < 0 ? testimonials.length - 3 : next;
      });
    }
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg">
        ★
      </span>
    ));
  };

  return (
    <section className="relative py-20 sm:py-32 bg-[#fafafa] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-['Montserrat'] text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
              Client Reviews
            </span>
          </div>
          <h2 className="font-['Montserrat'] text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.05] mb-6">
            What Our <span className="italic text-orange-400">Clients Say.</span>
          </h2>
          <p className="font-['Montserrat'] text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
            Don't just take our word for it. Here is what our partners have to
            say about scaling their business with Aussie Growth Media.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation Buttons */}
          {!isMobile && testimonials.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 xl:-translate-x-12 z-20 w-14 h-14 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-[#e36a2e] transition-all duration-300 border border-gray-100 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 ml-[-2px]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 xl:translate-x-12 z-20 w-14 h-14 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-[#e36a2e] transition-all duration-300 border border-gray-100 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 mr-[-2px]" />
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <div className="min-h-[400px]">
            {" "}
            {/* Prevents layout jumping */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`grid ${isMobile ? "grid-cols-1 max-w-lg mx-auto" : "grid-cols-3"} gap-6 lg:gap-8`}
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                  >
                    {/* Watermark Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-20 h-20 text-gray-50 transform rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />

                    <div className="relative z-10 flex-grow flex flex-col">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">{renderStars()}</div>

                      {/* Content */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-10 flex-grow">
                        "{testimonial.content}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#e36a2e] rounded-full flex items-center justify-center border-2 border-white">
                            <Quote className="w-3 h-3 text-white fill-current" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-[#e36a2e] font-medium mt-0.5">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-2.5">
            {isMobile
              ? // Mobile dots
                testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-[#e36a2e] w-8"
                        : "bg-gray-300 w-2.5 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))
              : // Desktop dots (grouped by 3)
                Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
                  (_, groupIndex) => {
                    const isActive =
                      Math.floor(currentIndex / 3) === groupIndex;
                    return (
                      <button
                        key={groupIndex}
                        onClick={() => setCurrentIndex(groupIndex * 3)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#e36a2e] w-8"
                            : "bg-gray-300 w-2.5 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide group ${groupIndex + 1}`}
                      />
                    );
                  },
                )}
          </div>
        </div>
      </div>
    </section>
  );
}
