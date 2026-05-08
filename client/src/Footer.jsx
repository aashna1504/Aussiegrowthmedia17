import React from "react";
import { Link } from "react-router-dom"; // Using Link for instant React routing
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ChevronRight,
} from "lucide-react";
const image10 = "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Website Design", path: "/webdesign" },
    { name: "Lead Generation", path: "/lead" },
    { name: "Go High Level CRM", path: "/gohigh" },
    { name: "AI Agents / Automation", path: "/ai" },
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
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#e36a2e]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* ── ABOUT SECTION ── */}
        <div className="md:col-span-4">
          <Link
            to="/"
            className="inline-block mb-6 transition-opacity hover:opacity-80"
          >
            <img
              src={image10}
              alt="Aussie Growth Media"
              className="w-40 object-contain"
            />
          </Link>

          <p className="text-zinc-400 leading-relaxed text-sm mb-8 pr-4">
            At Aussie Growth Media, we pride ourselves on delivering top-tier
            services at some of the most competitive prices in the market. We
            don't just run campaigns, we engineer growth.
          </p>

          <h3 className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-4">
            Connect With Us
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              {
                icon: <Facebook size={18} />,
                color: "hover:bg-blue-600 hover:border-blue-600",
                label: "Facebook",
              },
              {
                icon: <Twitter size={18} />,
                color: "hover:bg-sky-500 hover:border-sky-500",
                label: "Twitter",
              },
              {
                icon: <Instagram size={18} />,
                color: "hover:bg-pink-600 hover:border-pink-600",
                label: "Instagram",
              },
              {
                icon: <Linkedin size={18} />,
                color: "hover:bg-blue-700 hover:border-blue-700",
                label: "LinkedIn",
              },
              {
                icon: <Youtube size={18} />,
                color: "hover:bg-red-600 hover:border-red-600",
                label: "YouTube",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all transform hover:-translate-y-1 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── QUICK LINKS ── */}
        <div className="md:col-span-3 lg:col-span-2">
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              /* ✅ KEY ADDED HERE */
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-zinc-600 group-hover:text-[#e36a2e] transition-colors"
                  />
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── SERVICES ── */}
        <div className="md:col-span-5 lg:col-span-6">
          <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
            Our Services
          </h3>
          {/* Split into 2 columns on larger screens */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {services.map((service) => (
              /* ✅ KEY ADDED HERE & WRAPPED IN <li> */
              <li key={service.name}>
                <Link
                  to={service.path}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-zinc-600 group-hover:text-[#e36a2e] transition-colors shrink-0"
                  />
                  <span className="truncate">{service.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Aussie Growth Media. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-800">|</span>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
