import React from "react";
import { useEffect, useState } from "react";
const image6 =
  "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRightCircle,
  Phone,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const ManagedHosting = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Handle service selection
  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };
  const menuItems = [
    "Our Services",
    "Our Products",
    "Our Work",
    "Industries",
    "The Agency",
  ];
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const hostingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      features: [
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Monitoring",
        "Basic Support",
      ],
      recommended: false,
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Daily Backups + 30-day retention",
        "24/7 Priority Support",
        "CDN Included",
        "Advanced Security",
        "Staging Environment",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "200 GB NVMe Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Real-time Backups + 90-day retention",
        "24/7 Dedicated Support",
        "Global CDN",
        "Enterprise Security",
        "Multiple Staging Environments",
        "Custom Server Configuration",
        "White-glove Migration",
      ],
      recommended: false,
    },
  ];
  const quickLinks = [
    "World Local SEO",
    "Website Design World",
    "Digital Marketing World",
    "SEO World",
    "Website Design Gold Coast",
    "SEO Gold Coast",
    "Who We Are",
    "What We Do",
    "Our Expertise",
    "Contact",
  ];
  const navigate = useNavigate();
  const handleChangeSelection = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };
  const packages = [
    "Website Design Packages",
    "Business Website Package",
    "Search Engine Optimisation Packages",
    "Meta Ads Management Package",
    "Google Ads Management Packages",
    "Pay Per Lead",
    "Facebook Ads Services",
    "Digital Marketing Consultancy",
    "Social Media Marketing",
    "SEO Consultancy / Free SEO Audit",
    "AI Voice Automation",
    "Landing Pages",
    "PPC Management",
  ];

  const service = [
    "Website Design",
    "ECommerce Websites",
    "Service Website",
    "Branding & Logo Design",
    "Digital Marketing",
    "Search Engine Optimisation",
    "Google Ads Management",
    "Meta Ads Management",
    "Content Marketing",
    "Conversion Rate Optimization",
    "Managed Hosting",
    "Go High Level CRM",
    "Ai Agents/Automation Development",
    "White Label Marketing",
    "Lead Generation",
  ];

  const industries = [
    "Mortgage & Finance",
    "Automotive",
    "Construction & Building",
    "ECommerce",
    "Health & Medical",
    "NDIS",
    "Professional Services",
    "Trade",
    "Hospitality",
    "Lawyers & Immigration Agent",
    "NDIS Website Designs & Marketing",
  ];
  const features = [
    {
      icon: "⚡",
      title: "Blazing Fast Speed",
      description:
        "NVMe SSD storage and optimized servers for maximum performance",
    },
    {
      icon: "🛡️",
      title: "Top-tier Security",
      description:
        "Enterprise-grade security with DDoS protection and malware scanning",
    },
    {
      icon: "🔄",
      title: "Automatic Backups",
      description: "Daily automated backups with easy one-click restoration",
    },
    {
      icon: "📱",
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and instant issue resolution",
    },
  ];
  const serviceItems = [
    { name: "Website Design", path: "/webdesign" },
    { name: "Lead Generation", path: "/lead" },
    { name: "Go High Level CRM", path: "/gohigh" },
    { name: "Ai Agents/Automation Development", path: "/ai" },

    { name: "White Label Marketing", path: "/whitelabel" },

    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "Managed Hosting", path: "/hosting" },

    { name: "Conversion Rate Optimization", path: "/conversionrate" },

    { name: "Service Website", path: "/service-site" },
    { name: "Meta Ads Management", path: "/metaads" },

    { name: "Search Engine Optimisation", path: "/seo" },

    { name: "Branding & Logo Design", path: "/branding&logodesign" },

    { name: "ECommerce Websites", path: "/ecommerce" },

    { name: "Google Ads Management", path: "/googleads" },
  ];
  return (
    <>
      {/* Header */}
      <header
        className="relative z-50 w-full bg-[#f7f7f7] py-4"
        data-aos="slide-down"
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center justify-between rounded-2xl bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
            {/* Logo */}
            <div
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center gap-2"
            >
              <img
                src={image6}
                alt="Aussie Growth Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Menu - Desktop */}
            <ul className="hidden z-50 lg:flex  items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700">
              <li className="group relative cursor-pointer z-50">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="flex items-center gap-1 hover:text-black whitespace-nowrap"
                >
                  Home
                </div>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center font-medium transition-colors hover:text-gray-700 ${
                      serviceItems.some(
                        (item) => location.pathname === item.path,
                      )
                        ? "text-gray-700"
                        : "text-gray-700"
                    }`}
                  >
                    Services
                    <FaChevronDown
                      className={`ml-2 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                      >
                        {serviceItems.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleServiceSelect(service.path)}
                            className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-primary-600 transition-colors text-gray-700 font-medium"
                          >
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>

              <li
                onClick={() => {
                  navigate("/contact");
                }}
                className="group relative cursor-pointer"
              >
                <div className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                  Contact us
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#e36a2e] whitespace-nowrap"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Get Started Now{" "}
              <span>
                <ArrowRightCircle size={18} className="text-black" />
              </span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg">
              <ul className="cursor-pointer space-y-3">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                  className="py-2 border-b border-gray-100"
                >
                  Home
                </li>

                <li className="py-2 border-b border-gray-100">
                  <div className="py-3 ">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-primary-600"
                    >
                      <span>Services</span>
                      <FaChevronDown
                        className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-2">
                            {serviceItems.map((service) => (
                              <button
                                key={service.name}
                                onClick={() =>
                                  handleServiceSelect(service.path)
                                }
                                className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600 text-gray-600 font-medium"
                              >
                                {service.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>

                <li>
                  <li
                    onClick={() => {
                      navigate("/contact");
                    }}
                    className="py-2 border-b border-gray-100"
                  >
                    Contact
                  </li>
                  <button
                    className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e36a2e]"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Get Started Now{" "}
                    <ArrowRightCircle size={18} className="text-black" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Managed Hosting</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focus on your business while we handle the technical complexities.
            Reliable, secure, and high-performance hosting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 service-card">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-2xl">☁️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Hosting?
            </h2>
            <p className="text-gray-600 mb-6">
              We take the hassle out of website hosting with fully managed
              solutions that ensure maximum uptime, security, and performance
              for your business.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 text-xl">99.9%</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Uptime Guarantee
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Industry-leading reliability with SLA-backed uptime
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 text-xl">1s</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Lightning Fast
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Optimized servers for instant page loads
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 h-full">
              <img
                src="/images/hosting.jpg"
                alt="Hosting Infrastructure"
                className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Infrastructure
              </h3>
              <p className="text-gray-600 mb-6">
                We use state-of-the-art data centers with redundant systems to
                ensure your website stays online and performs optimally 24/7.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-600">
                    Global CDN
                  </div>
                  <div className="text-sm text-gray-600">
                    Fast delivery worldwide
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-600">
                    SSL Included
                  </div>
                  <div className="text-sm text-gray-600">
                    Free with all plans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12 items-stretch">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 service-card h-full flex flex-col"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Latest News Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2
                data-aos="slide-right"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                Latest News & Updates
              </h2>
              <p
                data-aos="slide-up"
                className="text-orange-500 text-lg sm:text-xl mb-8 sm:mb-12"
              >
                Stay up To Date With The Latest From Aussie Growth Media.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div
                  data-aos="slide-right"
                  className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 w-full sm:w-80 border rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      How Aussie Growth Media Delivers High-Performance PPC
                      Management in World
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">
                      January 3, 2026
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      PPC management is becoming the foundation stone for the
                      success of businesses in World. The instantaneous reach
                      that it offers
                    </p>
                  </div>
                </div>

                <div
                  data-aos="slide-right"
                  className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 w-full sm:w-80 border rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Why Your Business Needs a Professional Website Design
                      Agency in World
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">
                      December 26, 2025
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Website Design Agency in World plays a crucial role in
                      today's market, where your website is often the very first
                    </p>
                  </div>
                </div>
              </div>

              <button
                data-aos="slide-left"
                className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div
              data-aos="slide-left"
              className="bg-black border rounded-lg p-4 sm:p-6 lg:p-8 mt-8 md:mt-0"
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <img
                  src={image6}
                  alt="Aussie Growth Media"
                  className="h-12 sm:h-16 lg:h-20 w-auto"
                />
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />

                <input
                  type="tel"
                  placeholder="Preferd call back time"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                />
              </div>

              <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">
                How We May Help You?
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-60 overflow-y-auto pr-2">
                {[
                  "Website Design",
                  "ECommerce Websites",
                  "Service Website",
                  "Branding & Logo Design",
                  "Digital Marketing",
                  "Search Engine Optimisation",
                  "Google Ads Management",
                  "Meta Ads Management",
                  "Content Marketing",
                  "Conversion Rate Optimization",
                  "Managed Hosting",
                  "Go High Level CRM",
                  "Ai Agents/Automation Development",
                  "White Label Marketing",
                  "Lead Generation",
                ].map((option, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer hover:bg-gray-800"
                  >
                    <input type="radio" name="service" className="w-4 h-4" />
                    <span className="text-black text-xs sm:text-sm">
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-orange-600 text-base sm:text-lg">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ManagedHosting;
