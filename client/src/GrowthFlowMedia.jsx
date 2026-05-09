import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Plus } from "lucide-react";
import {
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ChevronRight,
} from "lucide-react";
import Confetti from "react-confetti";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import designSlideIcon from "../images/design-slide-icon.svg";
import vansh from "../images/study.webp";

const image6 = "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";

import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";

import { useWindowSize } from "react-use";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialsSection from "./Testiminials";
import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import FormData from "./components/FormData";
import Marquee from "./components/Marquee";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./Footer";

export default function GrowthFlowMedia() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { width, height } = useWindowSize();
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // Images for the rotating display
  const designImages = [
    { id: 1, image: image2, text: "Build", color: "text-green-600" },
    { id: 2, image: image3, text: "Develop", color: "text-orange-500" },
    { id: 1, image: image4, text: "Grow", color: "text-blue-600" },
    {
      id: 1,
      image: designSlideIcon,
      text: "Design",
      color: "text-red-500",
      fit: "contain",
    },
  ];
  // Add this to your component's state declarations
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // FAQ data array
  const faqData = [
    {
      question: "What Is The Significance Of Web Designing?",
      answer:
        "Web design is crucial because it creates the first impression of your business online. A well-designed website improves user experience, builds trust with visitors, enhances SEO performance, and increases conversion rates. It's not just about aesthetics but also about functionality and user engagement.",
    },
    {
      question: "Why Is Content Marketing Required?",
      answer:
        "Content marketing is essential because it builds brand awareness, establishes authority in your industry, improves SEO rankings, engages your target audience, and drives qualified traffic to your website. It helps build long-term relationships with customers and generates leads more effectively than traditional advertising.",
    },
    {
      question: "Can I Update The Content On My Site?",
      answer:
        "Yes, absolutely! We provide user-friendly content management systems (CMS) that allow you to easily update text, images, and other content on your website. We also offer training sessions to ensure you're comfortable making updates yourself. Additionally, we provide ongoing support if you need assistance with more complex updates.",
    },
    {
      question: "How Long Does Website Development Take?",
      answer:
        "The timeline varies based on project complexity. A basic website typically takes 2-4 weeks, while e-commerce sites or complex applications may take 6-8 weeks. We provide a detailed project timeline during our initial consultation and maintain transparent communication throughout the development process.",
    },
    {
      question: "What's Included In Your Digital Marketing Packages?",
      answer:
        "Our digital marketing packages include strategy development, SEO optimization, social media management, content creation, PPC campaign management, analytics reporting, and monthly performance reviews. We customize each package based on your specific business goals and budget.",
    },
  ];
  const [helpOpen, setHelpOpen] = useState(false);
  const navigate = useNavigate();
  const handleChangeSelection = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the help button container
      const helpContainer = document.querySelector(".help-button-container");
      if (helpOpen && helpContainer && !helpContainer.contains(event.target)) {
        setHelpOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For mobile touch

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [helpOpen]);
  const ContactSection = useRef(null);
  const scrollToContact = () => {
    ContactSection.current.scrollIntoView({ behavior: "smooth" });
  };
  // Rotate images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % designImages.length,
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(1000px) rotate(360deg);
            opacity: 0;
          }
        }
       @keyframes slideInRight {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(20px);
    opacity: 0;
  }
}

.dropdown-enter {
  animation: slideInRight 0.3s ease-out forwards;
}

.dropdown-exit {
  animation: slideOutRight 0.2s ease-in forwards;
}

/* Better hover effects */
.help-option:hover {
  transform: translateX(-5px);
  background: linear-gradient(90deg, #e36a2e/10 0%, transparent 100%);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .help-dropdown {
    width: 280px !important;
    max-width: 90vw;
    right: 100%;
    margin-right: 8px;
  }
  
  .help-button {
    font-size: 11px !important;
    padding: 8px 12px !important;
  }
}
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
       
        @keyframes popIn {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
       
        .animate-fall {
          animation: fall linear infinite;
        }
       
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
       
        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          40% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
        /* Smooth dropdown animation */
.faq-answer-enter {
  max-height: 0;
  opacity: 0;
}

.faq-answer-enter-active {
  max-height: 500px;
  opacity: 1;
  transition: all 300ms ease-in-out;
}

.faq-answer-exit {
  max-height: 500px;
  opacity: 1;
}

.faq-answer-exit-active {
  max-height: 0;
  opacity: 0;
  transition: all 300ms ease-in-out;
}
        .dot {
          animation: dotBounce 1.4s infinite ease-in-out;
        }
        
        .dot-2 {
          animation-delay: 0.2s;
        }
        
        .dot-3 {
          animation-delay: 0.4s;
        }
        
        @media (max-width: 768px) {
          .logo-text {
            font-size: 18px;
          }
          .hero-heading {
            font-size: 32px;
          }
          .featured-logos {
            font-size: 12px;
          }
          .congrats-heading {
            font-size: 36px;
          }
          .service-card {
            padding: 1.5rem;
          }
          .testimonial-text {
            font-size: 16px;
          }
        }
        
        @media (max-width: 640px) {
          .hero-heading {
            font-size: 28px;
          }
          .section-heading {
            font-size: 32px;
          }
          .why-choose-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Top Bar */}
      <TopBar />

      {/* Hero Section - Updated for Mobile Order */}
      <HeroSection
        designImages={designImages}
        currentImageIndex={currentImageIndex}
        heroImage={vansh}
        badgeText="Design & Digital Marketing Agency Worldwide"
        subHeading="with Aussie Growth Media"
        ctaLabel="Get Started Now"
        onServiceChange={handleChangeSelection}
        onCtaClick={scrollToContact}
      />

      <Marquee />

      {/* Featured In Section with Scrolling Animation */}
      <section className="relative bg-zinc-950 py-12 sm:py-20 overflow-hidden border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <h3
            data-aos="fade-up"
            className="text-center text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase mb-10 sm:mb-14"
          >
            Trusted & Featured In
          </h3>

          {/* The Marquee Container */}
          <div className="relative flex overflow-hidden group">
            {/* Edge Fading Masks (Creates the smooth fade-in/out effect at screen edges) */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none"></div>

            {/* Scrolling Track (Note: hover:pause stops scrolling when user hovers if you add a group-hover:pause class in your Tailwind config, otherwise it just scrolls) */}
            <div className="flex w-max min-w-full shrink-0 animate-scroll items-center gap-12 sm:gap-24 pl-12 sm:pl-24">
              {/* LOGO GROUP 1 */}
              <div className="flex shrink-0 items-center gap-12 sm:gap-24">
                {/* Text Logo: Small Business World Journal */}
                <div className="flex shrink-0 cursor-pointer flex-col items-center border border-zinc-700 p-2 text-zinc-400 transition-all duration-500 hover:border-zinc-300 hover:text-white">
                  <span className="text-[10px] font-bold tracking-widest sm:text-xs">
                    SMALL BUSINESS
                  </span>
                  <span className="text-sm font-serif italic sm:text-lg">
                    WORLD
                  </span>
                  <span className="text-[8px] italic tracking-widest">
                    JOURNAL
                  </span>
                </div>

                {/* Text Logo: The Australia Times */}
                <div className="flex shrink-0 cursor-pointer flex-col text-center text-zinc-400 transition-all duration-500 hover:text-white">
                  <span className="text-[10px] font-bold sm:text-xs">THE</span>
                  <span className="font-serif text-sm sm:text-lg">
                    Australia
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest">
                    times
                  </span>
                </div>

                {/* Text Logo: FOX40 */}
                <div className="shrink-0 cursor-pointer text-2xl font-black tracking-tighter text-zinc-400 transition-all duration-500 hover:text-white sm:text-4xl">
                  FOX
                  <span className="text-red-600 grayscale transition-all duration-500 hover:grayscale-0">
                    40
                  </span>
                </div>

                {/* Text Logo: Innovation News */}
                <div className="flex shrink-0 cursor-pointer flex-col text-zinc-400 transition-all duration-500 hover:text-white">
                  <span className="text-[10px] font-bold sm:text-xs">
                    INNOVATION&
                  </span>
                  <span className="text-[10px] font-light tracking-wide sm:text-xs">
                    ENTREPRENEURSHIP
                  </span>
                  <span className="text-[8px] font-bold tracking-widest">
                    NEWS
                  </span>
                </div>

                {/* Image Logos */}
                <img
                  src={image11}
                  alt="Featured Publication 1"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image12}
                  alt="Featured Publication 2"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image13}
                  alt="Featured Publication 3"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image14}
                  alt="Featured Publication 4"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image15}
                  alt="Featured Publication 5"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
              </div>

              {/* LOGO GROUP 2 (Duplicate for Infinite Scroll) */}
              <div className="flex shrink-0 items-center gap-12 sm:gap-24">
                <div className="flex shrink-0 cursor-pointer flex-col items-center border border-zinc-700 p-2 text-zinc-400 transition-all duration-500 hover:border-zinc-300 hover:text-white">
                  <span className="text-[10px] font-bold tracking-widest sm:text-xs">
                    SMALL BUSINESS
                  </span>
                  <span className="text-sm font-serif italic sm:text-lg">
                    WORLD
                  </span>
                  <span className="text-[8px] italic tracking-widest">
                    JOURNAL
                  </span>
                </div>

                <div className="flex shrink-0 cursor-pointer flex-col text-center text-zinc-400 transition-all duration-500 hover:text-white">
                  <span className="text-[10px] font-bold sm:text-xs">THE</span>
                  <span className="font-serif text-sm sm:text-lg">
                    Australia
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest">
                    times
                  </span>
                </div>

                <div className="shrink-0 cursor-pointer text-2xl font-black tracking-tighter text-zinc-400 transition-all duration-500 hover:text-white sm:text-4xl">
                  FOX
                  <span className="text-red-600 grayscale transition-all duration-500 hover:grayscale-0">
                    40
                  </span>
                </div>

                <div className="flex shrink-0 cursor-pointer flex-col text-zinc-400 transition-all duration-500 hover:text-white">
                  <span className="text-[10px] font-bold sm:text-xs">
                    INNOVATION&
                  </span>
                  <span className="text-[10px] font-light tracking-wide sm:text-xs">
                    ENTREPRENEURSHIP
                  </span>
                  <span className="text-[8px] font-bold tracking-widest">
                    NEWS
                  </span>
                </div>

                <img
                  src={image11}
                  alt="Featured Publication 1"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image12}
                  alt="Featured Publication 2"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image13}
                  alt="Featured Publication 3"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image14}
                  alt="Featured Publication 4"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
                <img
                  src={image15}
                  alt="Featured Publication 5"
                  className="h-8 sm:h-12 w-auto object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Congratulations Section with Confetti Animation */}
      <section className="relative bg-[#060608] py-20 sm:py-28 overflow-hidden">
        {/* Confetti */}
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          gravity={0.2}
          recycle={false}
        />

        {/* Background: layered radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.12),transparent_70%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_70%)]" />
        </div>

        {/* Thin top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 relative z-10">
          {/* Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-['Montserrat'] font-600 tracking-[0.2em] text-white/50 uppercase">
              You Made It
            </span>
          </div>

          {/* Headline */}
          <h2
            data-aos="slide-down"
            className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] mb-6"
          >
            <span className="text-orange-400 italic">Congratulations!</span>
            <br />
            <span className="text-white">You're </span>
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent italic">
              Here.
            </span>
          </h2>

          {/* Subtext */}
          <p
            data-aos="slide-up"
            className="font-['Cormorant_Garamond'] text-white/60 text-xl sm:text-2xl font-light italic mb-12 leading-relaxed"
          >
            because you're ready to grow your business, build a brand,
            <br className="hidden sm:block" />
            and create something incredible...
          </p>

          {/* Rating Pills */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mb-12">
            {/* Google */}
            <div
              data-aos="slide-right"
              className="group flex items-center gap-3 bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] backdrop-blur-sm rounded-2xl px-5 py-3.5 w-full sm:w-auto transition-all duration-400 cursor-default"
            >
              <FaGoogle className="text-[#DB4437] text-lg shrink-0" />
              <div className="w-px h-6 bg-white/10" />
              <span className="font-['Montserrat'] text-2xl font-bold text-white">
                4.9
              </span>
              <div className="flex text-yellow-400 text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="font-['Montserrat'] text-[11px] text-white/40 tracking-wide">
                63 reviews
              </span>
            </div>

            {/* Facebook */}
            <div
              data-aos="slide-left"
              className="group flex items-center gap-3 bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] backdrop-blur-sm rounded-2xl px-5 py-3.5 w-full sm:w-auto transition-all duration-400 cursor-default"
            >
              <FaFacebook className="text-[#1877F2] text-lg shrink-0" />
              <div className="w-px h-6 bg-white/10" />
              <span className="font-['Montserrat'] text-2xl font-bold text-white">
                4.9
              </span>
              <div className="flex text-yellow-400 text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="font-['Montserrat'] text-[11px] text-white/40 tracking-wide">
                33 reviews
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div data-aos="slide-up">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 font-['Montserrat'] text-sm font-semibold tracking-[0.15em] uppercase text-white px-8 py-4 rounded-full border border-white/20 hover:border-orange-500/60 transition-all duration-500 overflow-hidden"
            >
              {/* Hover fill */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative">Get Started Now</span>
              <span className="relative text-orange-400 group-hover:translate-x-1 transition-transform duration-300 text-base">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom thin accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="relative bg-zinc-950 py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* White curve top */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#fafaf9] rounded-b-[50%] z-0" />

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(249,115,22,0.06),transparent_60%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="font-['Montserrat'] text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">
                 Trusted Agency
              </span>
            </div>

            <h2
              data-aos="slide-down"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Why Choose Us For
              <br />
              <span className="italic text-orange-400">
                Digital Marketing
              </span>{" "}
            </h2>

            <p
              data-aos="slide-up"
              className="font-['Montserrat'] text-white/40 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            >
              With so many agencies promising the same results — here's what
              sets Aussie Growth Media apart and why local businesses choose us
              as their long-term marketing partner.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Award-Winning Agency",
                desc: "Over 100 industry awards reflecting our commitment to innovation, performance, and client satisfaction — and the trust businesses place in us to drive real growth.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "No Contracts",
                desc: "We earn loyalty through results, not lock-in. We operate with complete transparency and integrity — clients stay because we deliver value, not obligation.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "No Outsourcing",
                desc: "Every deliverable is handled entirely in-house. This means consistent quality, direct communication, and complete control over every campaign we run.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Local Agency",
                desc: "We understand the local market, audience, and business environment better than anyone. Our team is based locally for direct collaboration and close partnership.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                number: "05",
                title: "Real Results",
                desc: "Measurable impact on business growth — backed by strong case studies, authentic client reviews, and award-winning campaigns that consistently generate success.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
              },
              {
                number: "06",
                title: "Experienced Team",
                desc: "Over 30 years of combined experience across hundreds of businesses and industries — allowing us to craft tailored strategies that deliver sustainable growth and maximum ROI.",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#e36a2e]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#e36a2e]/0 blur-3xl transition-all duration-700 group-hover:bg-[#e36a2e]/20" />

                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center rounded-full border border-[#e36a2e]/25 bg-[#e36a2e]/10 px-3 py-1 font-['Montserrat'] text-[11px] font-semibold tracking-[0.18em] text-[#e36a2e]">
                    STEP {item.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/40 transition-all duration-500 group-hover:border-[#e36a2e]/30 group-hover:bg-[#e36a2e]/10 group-hover:text-[#e36a2e]">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-['Cormorant_Garamond'] text-xl sm:text-2xl font-semibold leading-snug text-white/90 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Thin accent line */}
                <div className="mb-4 h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-[#e36a2e]" />

                {/* Desc */}
                <p className="font-['Montserrat'] text-xs sm:text-sm leading-relaxed font-light text-white/50 transition-colors duration-500 group-hover:text-white/90">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />
      </section>

      {/* About Section */}
      <section className="relative bg-[#060608] py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.07),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.04),transparent_60%)]" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            {/* ── LEFT: Copy ── */}
            <div data-aos="fade-right">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="font-['Montserrat'] text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">
                  About Aussie Growth Media
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] mb-8">
                <span className="text-orange-400 italic block">
                  You Focus on
                  <br />
                  Your Business.
                </span>
                <span className="text-white/80">We'll Take Care of</span>{" "}
                <span className="text-white font-semibold">Your Growth.</span>
              </h2>

              {/* Thin divider */}
              <div className="w-12 h-px bg-orange-500/40 mb-8" />

              {/* Body copy */}
              <p className="font-['Montserrat'] text-white/50 text-sm sm:text-[15px] leading-relaxed font-light mb-5">
                <span className="text-white/90 font-semibold">
                  At Aussie Growth Media,
                </span>{" "}
                we design data-driven strategies that create real impact and
                build strong online visibility. Through expert web design and
                result-oriented digital marketing, we deliver engaging
                experiences for your target audience — and help your brand move
                steadily toward success.
              </p>

              <p className="font-['Montserrat'] text-white/40 text-sm sm:text-[15px] leading-relaxed font-light mb-10">
                Our marketing operations are proudly based in{" "}
                <span className="text-white/70">Australia</span>, staying
                closely connected with our clients and markets. Our technical
                operations are powered by a skilled team in{" "}
                <span className="text-white/70">India</span> — ensuring
                efficiency, innovation, and high-quality execution across every
                project.
              </p>

              {/* Location pills */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2">
                  <span className="text-base leading-none">🇦🇺</span>
                  <span className="font-['Montserrat'] text-[11px] text-white/50 tracking-wide font-medium">
                    Australia
                  </span>
                </div>
                <div className="w-6 h-px bg-white/10" />
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2">
                  <span className="text-base leading-none">🇮🇳</span>
                  <span className="font-['Montserrat'] text-[11px] text-white/50 tracking-wide font-medium">
                    India
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-3 font-['Montserrat'] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden rounded-full px-8 py-4 bg-white hover:bg-orange-400 text-black transition-all duration-300"
              >
                <span className="relative">Get Started Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* ── RIGHT: Image collage ── */}
            <div data-aos="fade-left" className="relative mt-8 md:mt-0">
              {/* Floating stat card */}
              <div className="absolute -left-4 sm:-left-8 top-6 z-20 bg-[#0f0f0f] border border-white/[0.08] rounded-2xl px-4 py-3 backdrop-blur-sm shadow-2xl">
                <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-orange-400 leading-none">
                  100+
                </p>
                <p className="font-['Montserrat'] text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
                  Industry Awards
                </p>
              </div>

              {/* Floating stat card 2 */}
              <div className="absolute -right-3 sm:-right-6 bottom-24 z-20 bg-[#0f0f0f] border border-white/[0.08] rounded-2xl px-4 py-3 backdrop-blur-sm shadow-2xl">
                <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-white leading-none">
                  30<span className="text-orange-400">+</span>
                </p>
                <p className="font-['Montserrat'] text-[10px] text-white/40 tracking-widest uppercase mt-0.5">
                  Years Combined Exp.
                </p>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <img
                  data-aos="fade-up"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop"
                  alt="Team discussion"
                  className="col-span-2 w-full h-52 sm:h-72 object-cover rounded-2xl"
                />

                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                    alt="Team member"
                    className="w-full h-40 sm:h-52 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Overlay shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/60 to-transparent" />
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="180"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                    alt="Team"
                    className="w-full h-40 sm:h-52 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/60 to-transparent" />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-orange-500/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-orange-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQ Section */}
      {/* FAQ Section - Updated with Working Toggle */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-32 border-t border-zinc-900">
        {/* Subtle Background Lighting */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e36a2e]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Text & FAQs */}
            <div>
              <div data-aos="fade-right" className="mb-10 sm:mb-14">
                <p className="text-[#e36a2e] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  FAQ
                </p>
                <h2 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                  Your questions, <br />
                  <span className="text-zinc-500">answered.</span>
                </h2>
              </div>

              <div
                className="space-y-1 mb-10 sm:mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {faqData.slice(0, 3).map((faq, index) => (
                  <div
                    key={index}
                    className="group border-b border-zinc-800 last:border-0"
                  >
                    <button
                      className="w-full py-6 flex justify-between items-center cursor-pointer text-left transition-colors"
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === index ? null : index)
                      }
                    >
                      <span
                        className={`text-base sm:text-lg font-medium pr-8 transition-colors duration-300 ${openFaqIndex === index ? "text-[#e36a2e]" : "text-zinc-200 group-hover:text-white"}`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openFaqIndex === index ? "border-[#e36a2e] bg-[#e36a2e]/10" : "border-zinc-700 group-hover:border-zinc-500"}`}
                      >
                        {/* Note: Make sure to import { Plus } from 'lucide-react' */}
                        <Plus
                          className={`w-4 h-4 transition-transform duration-500 ${
                            openFaqIndex === index
                              ? "rotate-45 text-[#e36a2e]"
                              : "text-zinc-400 group-hover:text-white"
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaqIndex === index
                          ? "max-h-96 opacity-100 pb-8"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <button
                data-aos="fade-up"
                data-aos-delay="200"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-8 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#e36a2e] hover:bg-[#e36a2e]/10 hover:text-[#e36a2e]"
                onClick={() => {
                  alert(
                    "Viewing all FAQs - this would open a modal or navigate to a FAQ page",
                  );
                }}
              >
                View All FAQs
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button> */}
            </div>

            {/* Right Column: Image & Support Card */}
            <div
              className="relative mt-8 lg:mt-0 h-full flex flex-col"
              data-aos="fade-left"
            >
              {/* Main Image */}
              <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Glassmorphic Support Card */}
              <div className="relative z-20 -mt-12 sm:-mt-16 mx-4 sm:mx-8 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
                  Can't find your answer here? Our dedicated support team is
                  ready to jump in and help you out.
                </p>
                <button
                  className="w-full sm:w-auto bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
                  onClick={scrollToContact}
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section
        ref={ContactSection}
        className="relative bg-[#fafaf9] py-20 sm:py-28 lg:py-36 overflow-hidden"
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Background tones */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.04),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.03),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section header */}
          <div className="mb-14 sm:mb-18">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 border border-zinc-200 bg-white rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="font-['Montserrat'] text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
                Get In Touch
              </span>
            </div>
            <h2
              data-aos="slide-left"
              className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-light text-zinc-900 leading-[1.05]"
            >
              Let's <span className="italic text-orange-500">Talk.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* ── LEFT: Contact Form ── */}
            <FormData />

            {/* ── RIGHT: News ── */}
            <div data-aos="fade-left">
              {/* News header */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span className="font-['Montserrat'] text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
                    Latest Updates
                  </span>
                </div>
                <h2
                  data-aos="slide-left"
                  className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-light text-zinc-900 leading-tight"
                >
                  News &{" "}
                  <span className="italic text-orange-500">Insights</span>
                </h2>
              </div>

              {/* News cards */}
              <div className="space-y-px bg-zinc-200 rounded-2xl overflow-hidden border border-zinc-200">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
                    title:
                      "How Aussie Growth Media Delivers High-Performance PPC Management in World",
                    date: "January 3, 2026",
                    excerpt:
                      "PPC management is becoming the foundation stone for the success of businesses in World — the instantaneous reach it offers is unmatched.",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
                    title:
                      "Why Your Business Needs a Professional Website Design Agency in World",
                    date: "December 26, 2025",
                    excerpt:
                      "Your website is often the very first impression a potential customer has of your business — make it count.",
                  },
                ].map((post, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="group bg-white hover:bg-zinc-950 flex flex-col sm:flex-row gap-0 overflow-hidden transition-all duration-500 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="sm:w-44 shrink-0 overflow-hidden">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        <p className="font-['Montserrat'] text-[10px] font-bold tracking-[0.2em] text-zinc-400 group-hover:text-white/40 uppercase mb-3 transition-colors duration-500">
                          {post.date}
                        </p>
                        <h3 className="font-['Cormorant_Garamond'] text-lg sm:text-xl font-semibold text-zinc-900 group-hover:text-white leading-snug mb-3 transition-colors duration-500">
                          {post.title}
                        </h3>
                        <p className="font-['Montserrat'] text-zinc-400 group-hover:text-zinc-500 text-xs leading-relaxed font-light transition-colors duration-500">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read more */}
                      <div className="flex items-center gap-2 mt-4 font-['Montserrat'] text-[11px] font-bold tracking-[0.15em] uppercase text-orange-500 group-hover:text-orange-400 transition-colors duration-500">
                        <span>Read More</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View all button */}
              <div className="mt-5">
                <button className="group inline-flex items-center gap-3 font-['Montserrat'] text-sm font-semibold tracking-[0.15em] uppercase text-zinc-900 border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white rounded-full px-7 py-3.5 transition-all duration-300">
                  View All Articles
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      </section>

      {/* Contact Section */}
      <div className="bg-zinc-950">
        {/* Final CTA Section */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden border-t border-zinc-900">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#e36a2e]/5 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Sidebar: Agency Card */}
            <div
              data-aos="fade-right"
              className="w-full lg:w-80 order-2 lg:order-1 bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800 shadow-2xl flex flex-col items-center text-center"
            >
              <img
                src={image6}
                alt="Aussie Growth Media"
                className="h-12 sm:h-14 w-auto mb-8 object-contain"
              />

              <a
                href="tel:+919646174266"
                className="w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 text-white bg-zinc-800 hover:bg-[#e36a2e] border border-zinc-700 hover:border-[#e36a2e] transition-all duration-300 mb-8"
              >
                <Phone size={16} />
                +91 9646 174 266
              </a>

              {/* Mini Image Grid */}
              <div className="flex justify-center -space-x-4 mb-8">
                <img
                  src={image7}
                  alt="Team"
                  className="w-16 h-16 rounded-full border-2 border-zinc-900 object-cover shadow-lg"
                />
                <img
                  src={image8}
                  alt="Team"
                  className="w-16 h-16 rounded-full border-2 border-zinc-900 object-cover shadow-lg"
                />
                <img
                  src={image9}
                  alt="Team"
                  className="w-16 h-16 rounded-full border-2 border-zinc-900 object-cover shadow-lg"
                />
              </div>

              {/* Sleek Socials */}
              <div className="flex gap-3 justify-center flex-wrap">
                {[Facebook, Linkedin, Instagram, Youtube, Twitter].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-[#e36a2e] hover:border-[#e36a2e] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <Icon size={18} />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white"
              >
                Let's{" "}
                <span className="inline-flex items-center gap-3 px-6 py-2 sm:py-3 rounded-full bg-[#e36a2e] text-white text-2xl sm:text-4xl lg:text-5xl shadow-[0_8px_30px_rgba(227,106,46,0.3)]">
                  Chat
                  <span className="flex gap-1.5 items-center justify-center h-full mt-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  </span>
                </span>
                <br />
                About Your Goals.
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg"
              >
                We love to talk with business owners about achieving incredible
                returns on the web. To find out if we're a good fit for each
                other, the best next step is to have a short discovery call with
                one of our digital experts.
              </p>

              <button
                data-aos="fade-up"
                data-aos-delay="200"
                className="group px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 mx-auto lg:mx-0 text-white bg-[#e36a2e] hover:bg-[#e36a2e] transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
                onClick={scrollToContact}
              >
                Get Started Now
                <ChevronRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>

        <Footer />

        {/* Premium Floating Help Button */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="relative">
            {/* Help Button Tab */}
            <button
              className="group px-3 py-4 text-white text-sm font-bold rounded-l-2xl border-y border-l border-zinc-700 bg-zinc-900/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-zinc-800 hover:border-[#e36a2e] shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              onClick={(e) => {
                e.stopPropagation();
                setHelpOpen(!helpOpen);
              }}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`transition-transform duration-300 text-[#e36a2e] ${helpOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} />
                </span>
                Need Help?
              </span>
            </button>

            {/* Glassmorphic Dropdown Menu */}
            <div
              className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 w-72 sm:w-80 bg-zinc-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-700/50 overflow-hidden transition-all duration-300 origin-right ${
                helpOpen
                  ? "opacity-100 visible scale-100"
                  : "opacity-0 invisible scale-95"
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-zinc-800">
                  <div className="w-12 h-12 rounded-full bg-[#e36a2e]/10 border border-[#e36a2e]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#e36a2e]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      How can we help?
                    </h3>
                    <p className="text-zinc-400 text-xs">
                      We're here for you 24/7
                    </p>
                  </div>
                </div>

                {/* Contact Options */}
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919646174266"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-all group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">
                        Call Us Now
                      </p>
                      <p className="text-zinc-500 text-xs">+91 9646 174 266</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#e36a2e] transition-colors" />
                  </a>

                  <a
                    href="mailto:support@growthflowmedia.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-all group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">
                        Email Support
                      </p>
                      <p className="text-zinc-500 text-xs truncate">
                        support@growthflowmedia.com
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#e36a2e] transition-colors" />
                  </a>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-[#e36a2e] hover:bg-[#e36a2e] text-white text-sm py-2.5 rounded-xl font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHelpOpen(false);
                      navigate("/contact");
                    }}
                  >
                    Get Quote
                  </button>
                  <button
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white text-sm py-2.5 rounded-xl font-medium transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHelpOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




