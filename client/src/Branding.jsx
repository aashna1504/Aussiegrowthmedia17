import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import FormData from "./components/FormData";
import Footer from "./Footer";

const SERVICES = [
  {
    title: "Logo Design",
    desc: "Unique, memorable logos that capture your brand essence",
    icon: "✦",
    features: [
      "Custom Design",
      "Multiple Concepts",
      "Unlimited Revisions",
      "All File Formats",
    ],
  },
  {
    title: "Brand Identity",
    desc: "Complete visual identity system for consistency across platforms",
    icon: "◈",
    features: [
      "Color Palette",
      "Typography",
      "Visual Elements",
      "Brand Guidelines",
    ],
  },
  {
    title: "Brand Strategy",
    desc: "Strategic positioning and messaging framework",
    icon: "◎",
    features: [
      "Target Audience",
      "Brand Voice",
      "Competitive Analysis",
      "Positioning Strategy",
    ],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Discovery & Research",
    desc: "Understanding your business, audience, and competition.",
  },
  {
    num: "02",
    title: "Concept Development",
    desc: "Creating multiple design directions for your brand.",
  },
  {
    num: "03",
    title: "Refinement & Delivery",
    desc: "Perfecting your brand assets and delivering a complete package.",
  },
];

const WHY = [
  "Builds recognition and trust",
  "Creates emotional connections",
  "Differentiates from competitors",
];

const NEWS = [
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    date: "January 3, 2026",
    title:
      "How Aussie Growth Media Delivers High-Performance PPC Management in Brisbane",
    excerpt:
      "PPC management is becoming the foundation stone for the success of businesses in Brisbane. The instantaneous reach that it offers…",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    date: "December 26, 2025",
    title:
      "Why Your Business Needs a Professional Website Design Agency in Brisbane",
    excerpt:
      "Website Design Agency in Brisbane plays a crucial role in today's market, where your website is often the very first…",
  },
];

export default function Branding() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#fafaf8] font-['Montserrat']">
      {/* ══════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-32 pb-20 px-4 sm:px-6">
        {/* orange half-circle top-right */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px]
          rounded-full bg-[#e36a2e]/8 pointer-events-none"
        />
        <div
          className="absolute -top-20 -right-20 w-[300px] h-[300px]
          rounded-full bg-[#e36a2e]/6 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center relative">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60
              px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em]
              uppercase text-[#e36a2e] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e36a2e] animate-pulse" />
            Our Expertise
          </div>

          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-800
              leading-tight tracking-tight mb-6"
          >
            Branding &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#e36a2e]">Logo Design</span>
              {/* underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3 Q25 0 50 3 Q75 6 100 3 Q125 0 150 3 Q175 6 200 3"
                  stroke="#e36a2e"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.4"
                />
              </svg>
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Create a powerful brand identity that resonates with your audience
            and stands out in the market.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY BRANDING + PROCESS
      ══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Why Branding card */}
          <div
            data-aos="fade-right"
            className="relative bg-white rounded-2xl border border-zinc-100
              shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 lg:p-10 overflow-hidden group
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1
              transition-all duration-400"
          >
            {/* top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5
              bg-gradient-to-r from-transparent via-[#e36a2e]/50 to-transparent"
            />

            <div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e36a2e] to-orange-400
              flex items-center justify-center mb-6 shadow-[0_4px_14px_rgba(227,106,46,0.35)]"
            >
              <span className="text-white text-2xl">🎨</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-blue-800 mb-4 tracking-tight">
              Why Branding Matters
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-7 font-light">
              Your brand is more than just a logo — it's the entire experience
              your customers have with your company. It's what sets you apart
              and builds emotional connections.
            </p>

            <div className="space-y-3">
              {WHY.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200/60
                    flex items-center justify-center shrink-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e36a2e]" />
                  </div>
                  <span className="text-zinc-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Process card */}
          <div
            data-aos="fade-left"
            className="relative bg-zinc-900 rounded-2xl
              shadow-[0_4px_24px_rgba(0,0,0,0.12)] p-8 lg:p-10 overflow-hidden
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1
              transition-all duration-400"
          >
            {/* top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5
              bg-gradient-to-r from-transparent via-[#e36a2e]/60 to-transparent"
            />

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full bg-[#e36a2e]" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-semibold">
                Our Process
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 tracking-tight">
              How We Build
              <br />
              <span className="text-[#e36a2e]">Your Brand</span>
            </h2>

            <div className="space-y-6">
              {PROCESS.map((p, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl bg-[#e36a2e]/10 border border-[#e36a2e]/20
                    flex items-center justify-center
                    group-hover:bg-[#e36a2e]/20 transition-colors duration-200"
                  >
                    <span className="text-[#e36a2e] text-xs font-black">
                      {p.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      {p.title}
                    </h4>
                    <p className="text-white/35 text-xs leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICE CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="mb-12">
            <p
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em]
              uppercase text-[#e36a2e] font-semibold mb-3"
            >
              <span className="w-5 h-px bg-[#e36a2e]" />
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-800 tracking-tight">
              Our Branding <span className="text-[#e36a2e]">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="group relative bg-[#fafaf8] rounded-2xl border border-zinc-100
                  p-7 overflow-hidden
                  hover:border-[#e36a2e]/30 hover:shadow-[0_8px_30px_rgba(227,106,46,0.08)]
                  hover:-translate-y-1 transition-all duration-300"
              >
                {/* hover bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5
                  bg-[#e36a2e] scale-x-0 group-hover:scale-x-100
                  transition-transform duration-400 origin-left"
                />

                <div
                  className="text-3xl text-[#e36a2e]/30 font-black mb-4 leading-none
                  group-hover:text-[#e36a2e]/50 transition-colors duration-300"
                >
                  {s.icon}
                </div>

                <h3 className="text-lg font-black text-blue-800 mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-light">
                  {s.desc}
                </p>

                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-zinc-600 text-sm"
                    >
                      <span
                        className="w-4 h-4 rounded-full bg-orange-50 border border-orange-200/60
                        flex items-center justify-center shrink-0"
                      >
                        <span className="text-[#e36a2e] text-[9px] font-black">
                          ✓
                        </span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NEWS + CONTACT FORM
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ── NEWS ── */}
          <div>
            <div data-aos="slide-right" className="mb-10">
              <p
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em]
                uppercase text-[#e36a2e] font-semibold mb-3"
              >
                <span className="w-5 h-px bg-[#e36a2e]" />
                Latest
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-blue-800 tracking-tight mb-2">
                News &amp; Updates
              </h2>
              <p className="text-zinc-400 text-sm font-light">
                Stay up to date with the latest from Aussie Growth Media.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {NEWS.map((n, i) => (
                <div
                  key={i}
                  data-aos="slide-right"
                  data-aos-delay={i * 80}
                  className="group flex gap-4 bg-white rounded-2xl border border-zinc-100
                    p-4 sm:p-5 hover:border-[#e36a2e]/25
                    hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]
                    transition-all duration-300 cursor-pointer"
                >
                  <div className="shrink-0 w-24 sm:w-32 h-24 rounded-xl overflow-hidden">
                    <img
                      src={n.img}
                      alt={n.title}
                      className="w-full h-full object-cover
                        group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold mb-1.5">
                      {n.date}
                    </p>
                    <h3
                      className="text-sm font-bold text-zinc-900 leading-snug mb-2
                      group-hover:text-[#e36a2e] transition-colors duration-200 line-clamp-2"
                    >
                      {n.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light line-clamp-2">
                      {n.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              data-aos="fade-up"
              className="group inline-flex items-center gap-2
                bg-[#e36a2e] hover:bg-[#e36a2e] text-white
                font-semibold text-sm px-7 py-3 rounded-full
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(227,106,46,0.35)]
                hover:-translate-y-0.5 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 translate-x-[-100%]
                group-hover:translate-x-[100%] transition-transform duration-500
                bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative">View All</span>
              <ChevronRight
                size={15}
                className="relative group-hover:translate-x-0.5
                transition-transform duration-300"
              />
            </button>
          </div>

          {/* ── CONTACT FORM ── */}
          <FormData />
        </div>
      </section>

      <Footer />
    </div>
  );
}

