import React, { useEffect, useState } from "react";
const image6 = "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRightCircle,
  Search,
  BarChart,
  Target,
  Settings,
  FileText,
  Link as LinkIcon,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const SEO = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const serviceItems = [
    { name: "Website Design", path: "/webdesign" },
    { name: "ECommerce Websites", path: "/ecommerce" },
    { name: "Service Website", path: "/service-site" },
    { name: "Branding & Logo Design", path: "/branding&logodesign" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "Search Engine Optimisation", path: "/seo" },
    { name: "Google Ads Management", path: "/googleads" },
    { name: "Meta Ads Management", path: "/metaads" },
    { name: "Conversion Rate Optimization", path: "/conversionrate" },
    { name: "Managed Hosting", path: "/hosting" },
    { name: "Go High Level CRM", path: "/gohigh" },
    { name: "Ai Agents/Automation", path: "/ai" },
    { name: "White Label Marketing", path: "/whitelabel" },
    { name: "Lead Generation", path: "/lead" },
  ];

  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Premium Floating Header */}

      {/* Dark Hero & Strategy Bento Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-16 lg:mb-24 fade-in">
            <p className="text-[#e36a2e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Search Engine Optimization
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Dominate the <br />
              <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                search results.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Capture high-intent traffic and outrank your competitors with our
              comprehensive, data-backed SEO strategies and technical expertise.
            </p>
          </div>

          {/* Strategy Bento Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Top Left: Strategy Statement */}
            <div
              data-aos="fade-right"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl transition-colors hover:border-zinc-700 flex flex-col justify-center"
            >
              <div className="flex items-center mb-8">
                <div className="bg-[#e36a2e]/10 p-4 rounded-2xl border border-[#e36a2e]/20 mr-5">
                  <Search className="w-8 h-8 text-[#e36a2e]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Comprehensive <br /> Strategy
                </h2>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We implement holistic SEO strategies that combine technical
                optimization, content excellence, and authoritative link
                building to improve your search visibility and drive sustainable
                organic growth.
              </p>
            </div>

            {/* Top Right: Technical Foundation */}
            <div
              data-aos="fade-left"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl transition-colors hover:border-zinc-700"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Technical Foundation
              </h3>
              <ul className="space-y-5">
                {[
                  "Site speed optimization & Core Web Vitals",
                  "Mobile-first indexing & responsiveness",
                  "Structured data markup & schema implementation",
                  "Crawlability & indexation improvements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#e36a2e] mr-4 shrink-0" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Left: Metrics Dashboard */}
            <div
              data-aos="fade-up"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-4 mb-8">
                <TrendingUp className="w-6 h-6 text-[#e36a2e]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Expected Metrics
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-zinc-300 font-medium">
                      Organic Traffic Growth
                    </span>
                    <span className="text-white font-bold tracking-wider">
                      +150%
                    </span>
                  </div>
                  <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-[#e36a2e] h-full rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-zinc-300 font-medium">
                      Keyword Rankings
                    </span>
                    <span className="text-white font-bold tracking-wider">
                      +300
                    </span>
                  </div>
                  <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-[#e36a2e] h-full rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-zinc-300 font-medium">
                      Domain Authority
                    </span>
                    <span className="text-white font-bold tracking-wider">
                      +25
                    </span>
                  </div>
                  <div className="w-full bg-zinc-950 rounded-full h-3 border border-zinc-800">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-[#e36a2e] h-full rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right: Content Strategy */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl transition-colors hover:border-zinc-700 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Content Engine
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Our content-first approach focuses on creating valuable,
                relevant content that satisfies user intent and builds topical
                authority.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-5">
                  <div className="text-lg font-bold text-[#e36a2e] mb-2">
                    Topic Clusters
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">
                    Comprehensive pillars
                  </div>
                </div>
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-5">
                  <div className="text-lg font-bold text-[#e36a2e] mb-2">
                    Intent Mapping
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">
                    User-focused creation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light SEO Pillars Section */}
      <section className="py-20 lg:py-32 relative bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 tracking-tight mb-6"
              data-aos="fade-up"
            >
              Our core <span className="text-[#e36a2e]">SEO Pillars.</span>
            </h2>
            <p
              className="text-gray-500 text-lg sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A successful SEO campaign requires balance. We build your organic
              visibility on these three uncompromising foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {/* Pillar 1: Technical */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                <Settings className="w-8 h-8 text-[#e36a2e]" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Technical SEO
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Website infrastructure optimization for seamless search engine
                crawling and indexing.
              </p>
              <ul className="space-y-4">
                {[
                  "Site speed optimization",
                  "Mobile responsiveness",
                  "Structured data & Schema",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group/item">
                    <div className="w-2 h-2 rounded-full bg-[#e36a2e] mr-4 transition-transform group-hover/item:scale-150"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Content */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                <FileText className="w-8 h-8 text-[#e36a2e]" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Content SEO
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Strategic content creation and optimization engineered perfectly
                for your target keywords.
              </p>
              <ul className="space-y-4">
                {[
                  "Deep Keyword research",
                  "Content optimization",
                  "Topic clustering",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group/item">
                    <div className="w-2 h-2 rounded-full bg-[#e36a2e] mr-4 transition-transform group-hover/item:scale-150"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Authority */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                <LinkIcon className="w-8 h-8 text-[#e36a2e]" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Authority Building
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                High-quality link building and brand authority development to
                boost domain trust.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium Link acquisition",
                  "Digital PR & Mentions",
                  "Local SEO dominance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group/item">
                    <div className="w-2 h-2 rounded-full bg-[#e36a2e] mr-4 transition-transform group-hover/item:scale-150"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Block */}
          <div
            data-aos="zoom-in"
            className="relative bg-zinc-950 rounded-3xl p-10 sm:p-16 overflow-hidden shadow-2xl text-center"
          >
            {/* Inner Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e36a2e]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Dominate Search Results?
              </h3>
              <p className="text-zinc-400 mb-10 text-lg">
                Let's implement an SEO strategy that drives sustainable organic
                growth and positions your brand as an untouchable industry
                authority.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-3 bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
              >
                Let's Start Ranking
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;

