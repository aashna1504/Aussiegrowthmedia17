import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./Footer";
import FormData from "./components/FormData";

const SOCIALS = [
  {
    icon: <Facebook size={18} />,
    href: "#",
    label: "Facebook",
    bg: "bg-blue-600",
  },
  {
    icon: <Twitter size={18} />,
    href: "#",
    label: "Twitter",
    bg: "bg-sky-500",
  },
  {
    icon: <Instagram size={18} />,
    href: "#",
    label: "Instagram",
    bg: "bg-pink-600",
  },
  {
    icon: <Linkedin size={18} />,
    href: "#",
    label: "LinkedIn",
    bg: "bg-blue-700",
  },
  {
    icon: <Youtube size={18} />,
    href: "#",
    label: "YouTube",
    bg: "bg-red-600",
  },
];

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const fn = () => {};
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#fafaf8] font-['Montserrat']">
      <ToastContainer position="top-right" theme="dark" />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 px-4 sm:px-6">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-100/40 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-orange-50/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60
              px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em]
              uppercase text-[#e36a2e] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e36a2e] animate-pulse" />
            Get In Touch
          </div>

          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-800
              leading-tight tracking-tight mb-5"
          >
            Ready to{" "}
            <span className="text-[#e36a2e] relative inline-block">
              Grow
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 120 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3 Q15 0 30 3 Q45 6 60 3 Q75 0 90 3 Q105 6 120 3"
                  stroke="#e36a2e"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.4"
                />
              </svg>
            </span>{" "}
            Your Business?
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Let's discuss
            how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: info cards */}
          <div data-aos="fade-right" className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Phone size={20} />,
                  title: "Call Us",
                  value: "+91 9646174266",
                  href: "tel:+919646174266",
                },
                {
                  icon: <Mail size={20} />,
                  title: "Email Us",
                  value: "support@growthflowmedia.com",
                  href: "mailto:support@growthflowmedia.com",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group bg-white rounded-2xl border border-zinc-200
                    shadow-sm p-6 relative overflow-hidden
                    hover:border-[#e36a2e]/40 hover:shadow-md
                    hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/50
                    flex items-center justify-center text-[#e36a2e] mb-4"
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-blue-800 mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <a
                    href={card.href}
                    className="text-[#e36a2e] font-semibold text-sm hover:text-[#e36a2e] transition-colors break-all"
                  >
                    {card.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Why us */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-700 p-7 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e36a2e]/50 to-transparent" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#e36a2e]/70 font-semibold mb-4">
                Why Work With Us
              </p>
              <h3 className="text-xl font-black text-white mb-5 tracking-tight">
                What you get when
                <br />
                <span className="text-[#e36a2e]">you reach out</span>
              </h3>
              <div className="space-y-3">
                {[
                  "Response within 2 business hours",
                  "Free 30-minute strategy consultation",
                  "No lock-in contracts — ever",
                  "Dedicated account manager assigned",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full bg-[#e36a2e]/20 border border-[#e36a2e]/40
                      flex items-center justify-center shrink-0"
                    >
                      <span className="text-[#e36a2e] text-[9px] font-black">
                        ✓
                      </span>
                    </div>
                    <span className="text-zinc-300 text-sm font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-semibold mb-4">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`${s.bg} w-10 h-10 rounded-xl flex items-center
                      justify-center text-white transition-all duration-200
                      hover:scale-110 hover:shadow-lg`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: form — clearly visible dark card */}
          <div
            data-aos="fade-left"
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#111116",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Top orange accent line */}
            <div className="h-[3px] bg-gradient-to-r from-[#e36a2e] via-[#ff8c55] to-[#e36a2e]" />

            <FormData />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

