import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import image6 from "../images/image6.jpeg";
import FormData from "./components/FormData";
import Footer from "./Footer";

const ConversionRateOptimization = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const steps = [
    {
      number: "01",
      title: "Analysis & Research",
      description: "Comprehensive audit of your current conversion performance",
    },
    {
      number: "02",
      title: "Hypothesis Creation",
      description: "Data-backed theories for improvement opportunities",
    },
    {
      number: "03",
      title: "Testing Strategy",
      description: "A/B testing, multivariate testing implementation",
    },
    {
      number: "04",
      title: "Optimization",
      description: "Implementing winning variations and improvements",
    },
  ];

  const optimizationAreas = [
    {
      area: "Landing Pages",
      improvements: [
        "Clear value proposition",
        "Compelling CTAs",
        "Trust signals",
        "Mobile optimization",
      ],
    },
    {
      area: "Checkout Process",
      improvements: [
        "Reduced steps",
        "Guest checkout",
        "Multiple payments",
        "Security badges",
      ],
    },
    {
      area: "User Experience",
      improvements: [
        "Navigation",
        "Page speed",
        "Mobile responsiveness",
        "Accessibility",
      ],
    },
  ];

  return (
    <>
      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
        {/* Hero heading */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-[#e36a2e]/10 border border-[#e36a2e]/30 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e36a2e] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e36a2e] animate-pulse" />
            Data-Driven Growth
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-5 leading-tight tracking-tight">
            <span className="text-blue-800">Conversion </span>
            <span
              className="relative inline-block"
              style={{ color: "#e36a2e" }}
            >
              Rate
              <svg
                viewBox="0 0 100 12"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 w-full"
                style={{ bottom: "-6px", height: "12px" }}
                preserveAspectRatio="none"
              >
                <path
                  d="M1,8 C8,3 18,10 28,6 C38,2 48,9 58,5 C68,1 78,9 88,5 C93,3 97,7 99,4"
                  stroke="#e36a2e"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-blue-800"> Optimization</span>
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">
            Transform more visitors into customers through data-driven
            optimization of your digital experience.
          </p>
        </div>

        {/* Top 2-col grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Why CRO card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-8 service-card hover:shadow-[0_16px_56px_rgba(227,106,46,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-[#e36a2e] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4 tracking-tight">
              Why CRO is Essential
            </h2>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              Conversion Rate Optimization isn't just about improving
              numbers—it's about understanding your users and providing them
              with the best possible experience that naturally leads to
              conversions.
            </p>
            <div className="bg-gradient-to-br from-[#e36a2e]/5 to-orange-50 border border-[#e36a2e]/20 rounded-2xl p-6">
              <div className="text-center mb-3">
                <div className="text-4xl font-black text-[#e36a2e] tracking-tight">
                  Average 35–75%
                </div>
                <div className="text-zinc-500 text-sm font-medium mt-1 tracking-wide uppercase">
                  Conversion Increase
                </div>
              </div>
              <p className="text-zinc-600 text-center text-sm leading-relaxed">
                Our clients typically see conversion improvements within the
                first 90 days
              </p>
            </div>
          </div>

          {/* Framework card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#e36a2e]/5 via-orange-50 to-[#fafafa] rounded-3xl border border-[#e36a2e]/15 p-8 h-full">
              <img
                src={image6}
                alt="CRO Analytics Dashboard"
                className="rounded-2xl shadow-xl w-full h-48 sm:h-64 object-cover mb-6 border border-[#e36a2e]/10"
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-3 tracking-tight">
                Our CRO Framework
              </h3>
              <p className="text-zinc-500 mb-5 leading-relaxed text-sm">
                We use a systematic approach to identify and fix conversion
                barriers across your digital properties.
              </p>
              <div className="space-y-3">
                <div className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-orange-50 hover:border-[#e36a2e]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#e36a2e]/10 flex items-center justify-center text-[#e36a2e] font-bold text-sm mr-4 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm">
                      Heatmap Analysis
                    </h4>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      See where users click, scroll, and hesitate
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-orange-50 hover:border-[#e36a2e]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#e36a2e]/10 flex items-center justify-center text-[#e36a2e] font-bold text-sm mr-4 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm">
                      A/B Testing
                    </h4>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      Test variations to find what converts best
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps row */}
        <div className="grid md:grid-cols-4 gap-5 mb-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 p-6 service-card hover:shadow-[0_8px_32px_rgba(227,106,46,0.15)] hover:-translate-y-1 hover:border-[#e36a2e]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#e36a2e]/5 rounded-bl-full opacity-60" />
              <div className="text-4xl font-black text-[#e36a2e] mb-4 tracking-tighter relative">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-blue-800 mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optimization areas banner */}
        <div
          className="rounded-3xl p-8 text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #e36a2e 0%, #e36a2e 50%, #b85322 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-3xl font-black mb-2 tracking-tight relative">
            Key Optimization Areas
          </h2>
          <p className="text-orange-100 text-sm mb-8 relative">
            Where we focus to move the needle
          </p>
          <div className="grid md:grid-cols-3 gap-5 relative">
            {optimizationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold mb-4 tracking-tight">
                  {area.area}
                </h3>
                <ul className="space-y-2.5">
                  {area.improvements.map((improvement, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-orange-50"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-200 rounded-full shrink-0"></div>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LATEST NEWS + FORM SECTION ── */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-14">
            {/* News column */}
            <div>
              <h2
                data-aos="slide-right"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight"
              >
                Latest News & Updates
              </h2>
              <p
                data-aos="slide-up"
                className="text-[#e36a2e] text-lg sm:text-xl mb-10 sm:mb-12 font-medium"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                Stay up To Date With The Latest From Aussie Growth Media.
              </p>

              <div className="space-y-5 sm:space-y-6 mb-8">
                <div
                  data-aos="slide-right"
                  className="flex flex-col sm:flex-row gap-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 sm:p-6 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="h-40 w-full sm:w-72 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      How Aussie Growth Media Delivers High-Performance PPC
                      Management in Brisbane
                    </h3>
                    <p className="text-[#e36a2e] text-xs mb-2 tracking-wide uppercase font-medium">
                      January 3, 2026
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      PPC management is becoming the foundation stone for the
                      success of businesses in Brisbane. The instantaneous reach
                      that it offers
                    </p>
                  </div>
                </div>

                <div
                  data-aos="slide-right"
                  className="flex flex-col sm:flex-row gap-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 sm:p-6 hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="h-40 w-full sm:w-72 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      Why Your Business Needs a Professional Website Design
                      Agency in Brisbane
                    </h3>
                    <p className="text-[#e36a2e] text-xs mb-2 tracking-wide uppercase font-medium">
                      December 26, 2025
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Website Design Agency in Brisbane plays a crucial role in
                      today's market, where your website is often the very first
                    </p>
                  </div>
                </div>
              </div>

              <button
                data-aos="slide-left"
                className="bg-[#e36a2e] text-white px-7 sm:px-9 py-3 rounded-full font-semibold hover:bg-[#e36a2e] hover:shadow-lg hover:shadow-[#e36a2e]/30 flex items-center gap-2 text-sm sm:text-base transition-all duration-200"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dark form column */}
            <FormData />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ConversionRateOptimization;

