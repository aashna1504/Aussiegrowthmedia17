import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// ── COUNTER HOOK ─────────────────────────────────────────────────────────────
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 1200, suffix: "+", label: "Projects Delivered" },
];

const VALUES = [
  {
    num: "01",
    title: "Results First",
    desc: "Every strategy we build is obsessively tied to your bottom line. No vanity metrics — only growth that moves the needle.",
  },
  {
    num: "02",
    title: "Radical Transparency",
    desc: "You see everything — reports, spend, performance — in real time. No smoke, no mirrors, just honest data.",
  },
  {
    num: "03",
    title: "Speed & Agility",
    desc: "Markets move fast. We move faster. From brief to live in days, not months. Momentum is a strategy.",
  },
  {
    num: "04",
    title: "Obsessive Quality",
    desc: "Average is our enemy. Every pixel, every headline, every campaign is held to a standard most agencies don't dare reach.",
  },
];

const TEAM = [
  {
    initials: "VK", // Note: Initials say VK but name is Ishant? You might want to change this to "IK"
    name: "Ishant Kumar",
    role: "Founder & CEO",
    bg: "from-orange-500 to-[#e36a2e]",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    initials: "AS",
    name: "Anika Sharma",
    role: "Head of Design",
    bg: "from-zinc-700 to-zinc-900",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    initials: "RJ",
    name: "Rohan Jain",
    role: "Lead Developer",
    bg: "from-orange-400 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    role: "Digital Marketing Head",
    bg: "from-zinc-600 to-zinc-800",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const WHY = [
  "In-house team — no outsourcing, ever",
  "Dedicated account manager on every project",
  "30-day results guarantee or we work for free",
  "Weekly performance reports, zero fluff",
  "Custom strategy — never cookie-cutter templates",
  "24/7 support across WhatsApp, email & calls",
];

// ── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label }) {
  const [count, ref] = useCounter(value);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center sm:items-start p-6 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl hover:border-zinc-700 transition-colors"
    >
      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter mb-2">
        {count.toLocaleString()}
        <span className="text-[#e36a2e]">{suffix}</span>
      </span>
      <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-zinc-500">
        {label}
      </span>
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#fafafa] overflow-x-hidden font-sans">
      {/* ══════════════════════════════════════════════════════
          DARK HERO BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden border-b border-zinc-900">
        {/* Cinematic Orange Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#e36a2e]/15 rounded-full blur-[150px] pointer-events-none z-0"></div>

        {/* Watermark Word */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-black text-[20vw] leading-none text-zinc-900/50 select-none pointer-events-none whitespace-nowrap">
          ABOUT
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div data-aos="fade-right">
            <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e36a2e] font-bold mb-6">
              <span className="w-8 h-px bg-[#e36a2e] inline-block" />
              Our Story
            </p>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              We Build <br />
              Brands That <br />
              <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                Dominate.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg mb-10">
              Aussie Growth Media is a full-service digital agency born from one
              obsession — making businesses impossible to ignore online.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="group px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-white bg-[#e36a2e] hover:bg-[#e36a2e] transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
            >
              Work With Us{" "}
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right: Glassmorphic Pull-Quote */}
          <div
            className="lg:text-right"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl inline-block text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#e36a2e]"></div>
              <blockquote className="text-white text-2xl sm:text-3xl font-bold leading-snug max-w-sm mb-6">
                "We don't just run campaigns.
                <br />
                <span className="text-[#e36a2e]">We engineer growth."</span>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold">
                  IK
                </div>
                <div>
                  <p className="text-white font-semibold">Ishant Kumar</p>
                  <p className="text-zinc-500 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DARK STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 px-4 sm:px-6 py-12 border-b border-zinc-900 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <StatCard {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LIGHT OUR STORY
      ══════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div data-aos="fade-right">
            <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e36a2e] font-bold mb-5">
              <span className="w-6 h-px bg-[#e36a2e]" />
              Who We Are
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight tracking-tight mb-8">
              Built Different.
              <br />
              <span className="text-[#e36a2e]">Built to Win.</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2012, Aussie Growth Media started with a single
                mission — to give businesses the unfair advantage online that
                enterprise brands take for granted.
              </p>
              <p>
                Today we're a team of{" "}
                <span className="font-bold text-blue-800">
                  designers, developers, marketers, and strategists
                </span>{" "}
                who obsess over one thing: your growth. We've built over 1,200
                projects across 15+ industries and 8 countries.
              </p>
              <p>
                No templates. No outsourcing. No excuses. Just bold, data-driven
                work that makes your competition uncomfortable.
              </p>
            </div>
          </div>

          {/* Visual Block */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e36a2e]/10 rounded-full blur-2xl z-0" />

            <div className="relative z-10 bg-zinc-900 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

              <div className="absolute bottom-10 left-10 text-left">
                <p className="font-black text-6xl text-white leading-none mb-2">
                  12
                </p>
                <p className="text-[#e36a2e] font-bold text-sm tracking-[0.2em] uppercase">
                  Years Strong
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 sm:left-[-2rem] z-20 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl px-6 py-4 border border-gray-100 flex items-center gap-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">
                India's #1 Growth Agency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DARK MISSION & VALUES (Bento Grid)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 px-4 sm:px-6 py-20 lg:py-32 relative overflow-hidden border-y border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#e36a2e]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div
            className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            data-aos="fade-up"
          >
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e36a2e] font-bold mb-4">
                <span className="w-6 h-px bg-[#e36a2e]" />
                What Drives Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Our Core <span className="text-[#e36a2e]">Values.</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              These aren't posters on a wall. They're the uncompromising
              principles that guide every decision we make for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, idx) => (
              <div
                key={v.num}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 sm:p-10 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -bottom-4 -right-4 font-black text-8xl sm:text-[120px] text-zinc-800/30 group-hover:text-[#e36a2e]/10 transition-colors duration-500 select-none pointer-events-none">
                  {v.num}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {v.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed relative z-10">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LIGHT TEAM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center sm:text-left" data-aos="fade-up">
            <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e36a2e] font-bold mb-4">
              <span className="w-6 h-px bg-[#e36a2e] hidden sm:block" />
              The People
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight tracking-tight">
              Meet the Team <br className="hidden sm:block" />
              <span className="text-[#e36a2e]">Behind Your Growth.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Avatar Block */}
                <div
                  className={`bg-gradient-to-br ${member.bg} aspect-square flex items-center justify-center transition-transform duration-700 group-hover:scale-105 relative overflow-hidden`}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full item-center object-fit opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="font-black text-5xl text-white select-none opacity-90 relative z-10">
                      {member.initials}
                    </span>
                  )}
                  {/* Subtle inner overlay for images */}
                  {member.image && (
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  )}
                </div>

                {/* Info Block */}
                <div className="p-6 bg-white relative z-10">
                  <h3 className="font-bold text-blue-800 text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#e36a2e] text-sm font-bold tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US & CTA (Merged Dark Section)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 relative overflow-hidden border-t border-zinc-900 pt-20 pb-32 sm:py-32 px-4 sm:px-6">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left: Why Choose Us List */}
          <div data-aos="fade-right">
            <p className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#e36a2e] font-bold mb-5">
              <span className="w-6 h-px bg-[#e36a2e]" />
              The Difference
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Why 500+ Brands <br />
              <span className="text-[#e36a2e]">Choose Us.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              There are thousands of agencies out there. Here's why the
              businesses that are serious about scaling always end up here.
            </p>

            <div className="space-y-4">
              {WHY.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-zinc-800"
                >
                  <CheckCircle2 className="text-[#e36a2e] shrink-0 w-6 h-6" />
                  <span className="text-zinc-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Premium CTA Card */}
          <div
            data-aos="fade-left"
            className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-[0_20px_40px_rgb(0,0,0,0.4)] text-center flex flex-col justify-center h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#e36a2e]/20 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight relative z-10">
              Ready to Dominate <br /> Your Market?
            </h3>
            <p className="text-zinc-400 text-lg mb-10 relative z-10">
              Book a free 30-minute strategy call. We'll show you exactly where
              your growth is leaking — and how to fix it fast.
            </p>

            <div className="flex flex-col gap-4 relative z-10">
              <button
                onClick={() => navigate("/contact")}
                className="group w-full flex items-center justify-center gap-3 bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
              >
                Book Free Strategy Call
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate("/")} // Or '/work' if you have a portfolio page!
                className="w-full flex items-center justify-center gap-3 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

