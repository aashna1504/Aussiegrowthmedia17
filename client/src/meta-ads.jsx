import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Target,
  Palette,
  BarChart2,
  Search,
  Zap,
  ShoppingCart,
  MessageCircle,
  Globe,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";
const MetaAdsManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: "ROAS", value: "5.2x", desc: "Return on Ad Spend" },
    { label: "CTR", value: "3.8%", desc: "Click-Through Rate" },
    { label: "CPA", value: "-62%", desc: "Cost Per Acquisition" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".pop").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
    
        
        .pop {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .pop-in {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes float-wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          75% { transform: translateY(10px) rotate(-2deg); }
        }
        
        .float-wave {
          animation: float-wave 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .stat-card {
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden py-20 lg:py-32 bg-zinc-950 min-h-screen">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e36a2e]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pop">
            <div className="inline-flex items-center space-x-2 bg-[#e36a2e]/10 border-2 border-[#e36a2e]/40 rounded-full px-6 py-3 mb-8 mt-16 sm:mt-0">
              <MessageSquare className="w-5 h-5 text-[#e36a2e]" />
              <span className="text-sm font-bold text-[#e36a2e] tracking-wider">
                META ADS MANAGEMENT
              </span>
            </div>

            <div className="mt-5">
              <h1 className="brand-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#e36a2e] mb-6">
                <span className="text-white">Dominate</span>
                Social
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                Expert Facebook & Instagram advertising that turns scroll into
                sales. We create thumb-stopping ads that drive real business
                results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`stat-card bg-zinc-900/50 backdrop-blur-md rounded-2xl p-8 border-2 ${
                      activeMetric === idx
                        ? "border-[#e36a2e]"
                        : "border-zinc-800"
                    }`}
                  >
                    <div className="text-sm text-zinc-400 mb-2">
                      {metric.desc}
                    </div>
                    <div className="brand-font text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#e36a2e] mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-zinc-400 tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-blue-800 mb-6">
              Full-Service Meta Advertising
            </h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your Meta ad
              campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-[#e36a2e]" />,
                title: "Audience Targeting",
                description:
                  "Precision targeting using Meta's advanced audience tools. We identify and reach your ideal customers with laser-focused demographics, interests, and behaviors.",
                features: [
                  "Custom audience building",
                  "Lookalike audiences",
                  "Interest targeting",
                  "Retargeting campaigns",
                ],
              },
              {
                icon: <Palette className="w-10 h-10 text-[#e36a2e]" />,
                title: "Creative Development",
                description:
                  "Eye-catching ad creatives that stop the scroll. Professional graphics, compelling copy, and video content designed to convert.",
                features: [
                  "Static image ads",
                  "Video ads & stories",
                  "Carousel ads",
                  "A/B testing creatives",
                ],
              },
              {
                icon: <BarChart2 className="w-10 h-10 text-[#e36a2e]" />,
                title: "Campaign Strategy",
                description:
                  "Data-driven strategies aligned with your business goals. Whether it's brand awareness, leads, or sales, we optimize for what matters most.",
                features: [
                  "Goal-based campaigns",
                  "Budget optimization",
                  "Funnel development",
                  "Conversion tracking",
                ],
              },
              {
                icon: <Search className="w-10 h-10 text-[#e36a2e]" />,
                title: "Analytics & Reporting",
                description:
                  "Comprehensive performance tracking and transparent reporting. Know exactly where your ad dollars go and what results they generate.",
                features: [
                  "Weekly performance reports",
                  "ROI tracking",
                  "Attribution analysis",
                  "Competitor insights",
                ],
              },
              {
                icon: <Zap className="w-10 h-10 text-[#e36a2e]" />,
                title: "Ad Optimization",
                description:
                  "Continuous testing and refinement to maximize performance. We constantly optimize bids, placements, and creatives for peak efficiency.",
                features: [
                  "Bid strategy optimization",
                  "Placement testing",
                  "Schedule optimization",
                  "Budget allocation",
                ],
              },
              {
                icon: <ShoppingCart className="w-10 h-10 text-[#e36a2e]" />,
                title: "E-commerce Integration",
                description:
                  "Seamless integration with your online store. Dynamic product ads, catalog management, and purchase optimization for maximum sales.",
                features: [
                  "Product catalog sync",
                  "Dynamic product ads",
                  "Shopping campaigns",
                  "Cart abandonment",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="pop bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(227,106,46,0.10)] hover:-translate-y-2 transition-all duration-500 border-l-4 border-l-[#e36a2e]"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div
                  className="mb-6 float-wave w-16 h-16 bg-[#e36a2e]/10 rounded-2xl flex items-center justify-center"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {service.icon}
                </div>
                <h3 className="brand-font text-2xl font-bold text-blue-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-zinc-600"
                    >
                      <svg
                        className="w-4 h-4 text-[#e36a2e] mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Coverage */}
      <div className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Complete Meta Ecosystem
            </h2>
            <p className="text-xl text-zinc-400">
              Advertise across all Meta platforms for maximum reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pop bg-zinc-900/50 backdrop-blur-md border-2 border-[#e36a2e]/40 rounded-3xl p-12 text-white shadow-2xl hover:border-[#e36a2e] transition-colors">
              <div className="w-16 h-16 bg-[#e36a2e]/10 border border-[#e36a2e]/30 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-9 h-9 text-[#e36a2e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="brand-font text-4xl font-black mb-4">
                Facebook Ads
              </h3>
              <p className="text-lg text-zinc-400 mb-6">
                Reach 2.9 billion monthly active users with targeted campaigns
                across News Feed, Stories, Marketplace, and more.
              </p>
              <div className="space-y-3">
                {[
                  "News Feed ads",
                  "Facebook Stories",
                  "Marketplace ads",
                  "Right column placements",
                  "Video feeds",
                  "In-stream videos",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-zinc-300">
                    <div className="w-2 h-2 bg-[#e36a2e] rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pop bg-zinc-900/50 backdrop-blur-md border-2 border-[#e36a2e]/40 rounded-3xl p-12 text-white shadow-2xl hover:border-[#e36a2e] transition-colors"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-[#e36a2e]/10 border border-[#e36a2e]/30 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-9 h-9 text-[#e36a2e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="brand-font text-4xl font-black mb-4">
                Instagram Ads
              </h3>
              <p className="text-lg text-zinc-400 mb-6">
                Connect with 1.4 billion users through visually stunning ads on
                the world's most engaging visual platform.
              </p>
              <div className="space-y-3">
                {[
                  "Instagram Feed",
                  "Instagram Stories",
                  "Reels ads",
                  "Explore page",
                  "Shopping ads",
                  "IGTV ads",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-zinc-300">
                    <div className="w-2 h-2 bg-[#e36a2e] rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pop bg-zinc-900/50 backdrop-blur-md border-2 border-[#e36a2e]/40 rounded-3xl p-12 text-white shadow-2xl hover:border-[#e36a2e] transition-colors"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-[#e36a2e]/10 border border-[#e36a2e]/30 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-9 h-9 text-[#e36a2e]" />
              </div>
              <h3 className="brand-font text-4xl font-black mb-4">
                Messenger Ads
              </h3>
              <p className="text-lg text-zinc-400 mb-6">
                Start conversations and drive engagement with interactive ads in
                Messenger, reaching people where they chat.
              </p>
              <div className="space-y-3">
                {[
                  "Messenger inbox ads",
                  "Sponsored messages",
                  "Click-to-Messenger",
                  "Stories ads",
                  "Chatbot integration",
                  "Lead generation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-zinc-300">
                    <div className="w-2 h-2 bg-[#e36a2e] rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pop bg-zinc-900/50 backdrop-blur-md border-2 border-[#e36a2e]/40 rounded-3xl p-12 text-white shadow-2xl hover:border-[#e36a2e] transition-colors"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-[#e36a2e]/10 border border-[#e36a2e]/30 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-9 h-9 text-[#e36a2e]" />
              </div>
              <h3 className="brand-font text-4xl font-black mb-4">
                Audience Network
              </h3>
              <p className="text-lg text-zinc-400 mb-6">
                Extend your reach beyond Meta platforms to thousands of
                high-quality mobile apps and websites.
              </p>
              <div className="space-y-3">
                {[
                  "Mobile app ads",
                  "Banner ads",
                  "Interstitial ads",
                  "Native ads",
                  "Rewarded videos",
                  "In-article ads",
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-zinc-300">
                    <div className="w-2 h-2 bg-[#e36a2e] rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-blue-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-zinc-500">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description:
                  "We start with a deep dive into your business, goals, and target audience. Competitive analysis and market research inform our strategic approach.",
                icon: <Lightbulb className="w-8 h-8 text-white" />,
              },
              {
                step: "02",
                title: "Creative Production",
                description:
                  "Our design team creates scroll-stopping ad creatives. Multiple variations for A/B testing ensure we find what resonates with your audience.",
                icon: <Palette className="w-8 h-8 text-white" />,
              },
              {
                step: "03",
                title: "Campaign Launch",
                description:
                  "Precise setup of campaigns, ad sets, and ads. Pixel installation, conversion tracking, and quality checks before we go live.",
                icon: <Rocket className="w-8 h-8 text-white" />,
              },
              {
                step: "04",
                title: "Optimization & Scaling",
                description:
                  "Daily monitoring and optimization. We kill underperformers, scale winners, and continuously test new audiences and creatives.",
                icon: <TrendingUp className="w-8 h-8 text-white" />,
              },
              {
                step: "05",
                title: "Reporting & Growth",
                description:
                  "Transparent reporting with actionable insights. Regular strategy sessions to discuss performance and plan for growth.",
                icon: <BarChart2 className="w-8 h-8 text-white" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="pop"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 border-l-8 border-l-[#e36a2e] flex flex-col lg:flex-row items-start lg:items-center gap-8 hover:shadow-[0_20px_40px_rgba(227,106,46,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0 w-24 h-24 bg-[#e36a2e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#e36a2e]/30 flex-col gap-1">
                    {item.icon}
                    <span className="brand-font text-lg font-black text-white leading-none">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="brand-font text-3xl font-black text-blue-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pop relative z-10">
          <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Let's create Meta ad campaigns that drive real ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-12 py-6 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#e36a2e]/30 transform hover:scale-105 transition-all duration-300"
            >
              LET'S START
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MetaAdsManagement;
