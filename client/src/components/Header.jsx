import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRightCircle, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const image6 = "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";

const SERVICE_ITEMS = [
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
  { name: "AI Agents / Automation", path: "/ai" },
  { name: "White Label Marketing", path: "/whitelabel" },
  { name: "Lead Generation", path: "/lead" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [location.pathname]);

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
    setServicesOpen(false);
  };
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] w-full pt-8 px-8 transition-all duration-300 font-['Montserrat'] font-bold"
      data-aos="slide-down"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── NAV PILL ─────────────────────────────────────────────── */}
        <nav
          className={`relative flex items-center justify-between
            rounded-full bg-white/85 backdrop-blur-xl
            px-4 sm:px-6 py-3
            border border-white/50
            transition-all duration-300
            ${
              scrolled
                ? "shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                : "shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            }`}
        >
          {/* ── LOGO ── */}
          <div
            onClick={() => go("/")}
            className="flex items-center gap-2 cursor-pointer
              transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src={image6}
              alt="Aussie Growth Media"
              className="h-10 sm:h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-black
              transition-colors rounded-full hover:bg-gray-100/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {/* Home */}
            <li>
              <button
                onClick={() => go("/")}
                className={`transition-colors hover:text-black whitespace-nowrap
                  ${isActive("/") ? "text-black font-semibold" : ""}`}
              >
                Home
              </button>
            </li>

            {/* Services */}
            <li className="relative" ref={dropRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="group flex items-center gap-1.5 font-medium
                  transition-colors hover:text-black"
              >
                Services
                <ChevronDown
                  size={13}
                  className={`mt-px opacity-70 transition-transform duration-300
                    group-hover:opacity-100
                    ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2
                      w-64 bg-white/95 backdrop-blur-xl
                      rounded-2xl border border-gray-100
                      shadow-[0_20px_40px_rgb(0,0,0,0.10)]
                      overflow-hidden p-2"
                  >
                    {/* orange top accent */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px
                      bg-gradient-to-r from-transparent via-[#e36a2e]/30 to-transparent"
                    />

                    <div
                      className="max-h-80 overflow-y-auto
                        [&::-webkit-scrollbar]:w-[3px]
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-gray-200
                        [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      {SERVICE_ITEMS.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => go(s.path)}
                          className={`group flex items-center gap-2.5 w-full text-left
                            px-4 py-2.5 rounded-xl text-sm font-medium
                            transition-all duration-150
                            ${
                              isActive(s.path)
                                ? "text-[#e36a2e] bg-orange-50"
                                : "text-gray-600 hover:bg-gray-50 hover:text-[#e36a2e]"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors
                            ${
                              isActive(s.path)
                                ? "bg-[#e36a2e]"
                                : "bg-gray-200 group-hover:bg-[#e36a2e]/50"
                            }`}
                          />
                          {s.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* About */}
            <li>
              <button
                onClick={() => go("/about")}
                className={`transition-colors hover:text-black whitespace-nowrap
                  ${isActive("/about") ? "text-black font-semibold" : ""}`}
              >
                About
              </button>
            </li>

            {/* Contact */}
            <li>
              <button
                onClick={() => go("/contact")}
                className={`transition-colors hover:text-black whitespace-nowrap
                  ${isActive("/contact") ? "text-black font-semibold" : ""}`}
              >
                Contact us
              </button>
            </li>
          </ul>

          {/* ── DESKTOP CTA ── */}
          <button
            onClick={scrollToContact}
            className="hidden lg:flex items-center gap-2
              rounded-full bg-[#e36a2e] hover:bg-[#cf5f28] text-white
              font-semibold text-sm px-6 py-2.5 whitespace-nowrap
              transition-all duration-300
              hover:shadow-[0_8px_20px_rgba(227,106,46,0.30)]
              hover:-translate-y-0.5
              relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 translate-x-[-100%]
              group-hover:translate-x-[100%] transition-transform duration-500
              bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <span className="relative">Get Started Now</span>
            <ArrowRightCircle
              size={17}
              className="relative opacity-90 group-hover:translate-x-0.5
                transition-transform duration-300"
            />
          </button>
        </nav>

        {/* ── MOBILE DROPDOWN ──────────────────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4
                bg-white/95 backdrop-blur-xl
                rounded-3xl border border-gray-100
                shadow-[0_20px_40px_rgb(0,0,0,0.10)]
                p-5 overflow-hidden"
            >
              {/* orange top line */}
              <div
                className="absolute top-0 left-8 right-8 h-px
                bg-gradient-to-r from-transparent via-[#e36a2e]/25 to-transparent"
              />

              <ul className="flex flex-col space-y-1">
                {/* Home */}
                <li>
                  <button
                    onClick={() => go("/")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      hover:bg-gray-50 transition-colors cursor-pointer
                      ${isActive("/") ? "text-black font-semibold bg-gray-50" : "text-gray-700"}`}
                  >
                    Home
                  </button>
                </li>

                {/* Services accordion */}
                <li className="flex flex-col">
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="flex items-center justify-between px-4 py-3 w-full
                      text-gray-700 font-medium hover:bg-gray-50
                      rounded-xl transition-colors text-sm"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={13}
                      className={`opacity-60 transition-transform duration-300
                        ${mobileServices ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServices && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pl-4 pr-2 py-2 mt-1 ml-4 space-y-1
                            border-l-2 border-[#e36a2e]/20
                            max-h-56 overflow-y-auto
                            [&::-webkit-scrollbar]:w-[3px]
                            [&::-webkit-scrollbar-track]:bg-transparent
                            [&::-webkit-scrollbar-thumb]:bg-gray-200
                            [&::-webkit-scrollbar-thumb]:rounded-full"
                        >
                          {SERVICE_ITEMS.map((s) => (
                            <button
                              key={s.name}
                              onClick={() => go(s.path)}
                              className={`flex items-center gap-2.5 w-full text-left
                                py-2.5 px-4 rounded-xl text-sm font-medium
                                transition-colors
                                ${
                                  isActive(s.path)
                                    ? "text-[#e36a2e] bg-orange-50"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-[#e36a2e]"
                                }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0
                                ${isActive(s.path) ? "bg-[#e36a2e]" : "bg-gray-300"}`}
                              />
                              {s.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* About */}
                <li>
                  <button
                    onClick={() => go("/about")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      hover:bg-gray-50 transition-colors cursor-pointer
                      ${isActive("/about") ? "text-black font-semibold bg-gray-50" : "text-gray-700"}`}
                  >
                    About
                  </button>
                </li>

                {/* Contact */}
                <li>
                  <button
                    onClick={() => go("/contact")}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      hover:bg-gray-50 transition-colors cursor-pointer
                      ${isActive("/contact") ? "text-black font-semibold bg-gray-50" : "text-gray-700"}`}
                  >
                    Contact
                  </button>
                </li>

                {/* CTA */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      scrollToContact();
                      setMenuOpen(false);
                    }}
                    className="w-full flex justify-center items-center gap-2
                      rounded-full bg-[#e36a2e] hover:bg-[#cf5f28] text-white
                      font-semibold text-sm px-6 py-3.5
                      transition-all duration-300
                      shadow-[0_8px_20px_rgba(227,106,46,0.20)]
                      hover:shadow-[0_8px_24px_rgba(227,106,46,0.35)]"
                  >
                    Get Started Now
                    <ArrowRightCircle size={17} className="text-white" />
                  </button>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
