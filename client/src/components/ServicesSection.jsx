import React from "react";
import { Globe, Palette, Heart, Target, Cloud, Users } from "lucide-react";

const FILTER_PILLS = [
  // Row 1
  { name: "e-commerce Websites", color: "#a855f7" }, 
  { name: "Virtual Assistant Services", color: "#a855f7" },
  { name: "Google Ads Management", color: "#2563eb" },
  // Row 2
  { name: "White Label Digital Marketing", color: "#2563eb" },
  { name: "Meta Ads", color: "#e36a2e" }, 
  { name: "Search Engine Optimization (SEO)", color: "#22c55e" },
];

const SERVICE_CARDS = [
  {
    title: "Web Design & Development",
    desc: "Your website is up on the internet even when you are not. With our professional team of web design and development in World...",
    cta: "Web Design Services",
    icon: <Globe className="w-14 h-14 text-blue-600 animate-matrix-all" />,
  },
  {
    title: "Branding & Logo Design",
    desc: "Captivate the world with one look at your brand and logo. Our graphic design team is all about making unforgettable first impressions...",
    cta: "Branding & Logo Design Services",
    icon: <Palette className="w-14 h-14 text-purple-500 animate-matrix-all" />,
  },
  {
    title: "Digital Marketing",
    desc: "Don't follow the trend, but be one with our remarkable digital marketing service in Australia. We go above and beyond to create strategies...",
    cta: "Digital Marketing Services",
    icon: <Heart className="w-14 h-14 text-pink-400 animate-matrix-all" />,
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Optimizing conversion rates is vital for reaching potential buyers. Our Conversion Rate Optimization service ensures businesses reach their peak...",
    cta: "Conversion Rate Optimization Services",
    icon: <Target className="w-14 h-14 text-cyan-500 animate-matrix-all" />,
  },
  {
    title: "Managed Hosting",
    desc: "Looking for a managed hosting provider? Our agency provides comprehensive enterprise grade hosting solutions for WordPress websites.",
    cta: "Managed WordPress Hosting",
    icon: <Cloud className="w-14 h-14 text-blue-400 animate-matrix-all" />,
  },
  {
    title: "Go High Level CRM",
    desc: "GoHighLevel is an all-in-one CRM and marketing automation platform for agencies and small businesses, simplifying lead management.",
    cta: "GoHighLevel CRM Services",
    icon: <Users className="w-14 h-14 text-blue-700 animate-matrix-all" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 px-6 font-[Montserrat]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
          Our Growth Services
        </h2>
        <p className="text-base lg:text-lg text-gray-900 mb-10 max-w-2xl mx-auto font-semibold leading-tight">
          we Are A Full-Service Digital Marketing Agency With Expertise In The Following Areas.
        </p>

        {/* Colorful Banners in 2 Rows */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTER_PILLS.slice(0, 3).map((pill, i) => (
              <span key={i} className="px-4 py-2 rounded-md text-white font-bold text-xs shadow-sm" style={{ backgroundColor: pill.color }}>
                {pill.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {FILTER_PILLS.slice(3).map((pill, i) => (
              <span key={i} className="px-4 py-2 rounded-md text-white font-bold text-xs shadow-sm" style={{ backgroundColor: pill.color }}>
                {pill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Full 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-zinc-200 shadow-[0_5px_18px_rgba(0,0,0,0.06)] flex flex-col items-start text-left transition-transform hover:-translate-y-1">
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
              <button className="py-2 px-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-[11px] uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

