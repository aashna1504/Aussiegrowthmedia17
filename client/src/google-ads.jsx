import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const GoogleAdsManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".reveal-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Archivo+Black&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .display-font {
          font-family: 'Archivo Black', sans-serif;
        }
        
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }
        
        .slide-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(227, 106, 46, 0.15);
        }
      `}</style>

      {/* Hero */}
      <div className="bg-zinc-950 py-24 lg:py-40 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e36a2e]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center reveal-up">
            <div className="inline-flex items-center bg-[#e36a2e]/10 backdrop-blur-sm border-2 border-[#e36a2e]/40 rounded-full px-6 py-3 mb-8 mt-16 sm:mt-0">
              <span className="text-sm font-bold text-[#e36a2e] tracking-wider">
                GOOGLE ADS CERTIFIED EXPERTS
              </span>
            </div>

            <h1 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              GET FOUND
              <span className="block text-[#e36a2e]">GET RESULTS</span>
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12">
              Dominate Google search with expertly managed PPC campaigns that
              put your business at the top when customers are ready to buy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: "400%", label: "Avg ROI" },
                { value: "2.3%", label: "Conversion Rate" },
                { value: "24/7", label: "Monitoring" },
                { value: "$5M+", label: "Ad Spend Managed" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-6 hover:border-[#e36a2e]/50 transition-colors"
                >
                  <div className="display-font text-4xl text-[#e36a2e] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Types */}
      <div className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-blue-800 mb-6">
              Complete{" "}
              <span
                className="relative inline-block display-font"
                style={{ color: "#e36a2e" }}
              >
                Google Ads
                <svg
                  viewBox="0 0 160 12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 w-full"
                  style={{ bottom: "-6px", height: "12px" }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1,8 C12,3 26,10 40,6 C54,2 68,9 82,5 C96,1 110,9 124,5 C134,2 144,8 152,4 C155,3 157,6 159,4"
                    stroke="#e36a2e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              Solutions
            </h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
              We manage every type of Google Ads campaign to maximize your
              visibility and conversions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
                title: "Search Ads",
                subtitle: "Capture High-Intent Buyers",
                description:
                  "Appear at the top of Google search results when potential customers are actively looking for your products or services. Text ads optimized for maximum click-through and conversion rates.",
                features: [
                  "Keyword research & selection",
                  "Ad copy optimization",
                  "Bid management",
                  "Quality Score improvement",
                  "Negative keyword management",
                  "Ad extensions setup",
                ],
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                ),
                title: "Display Ads",
                subtitle: "Build Brand Awareness",
                description:
                  "Reach millions across the Google Display Network with eye-catching visual ads. Perfect for retargeting, brand awareness, and reaching new audiences at scale.",
                features: [
                  "Responsive display ads",
                  "Banner ad design",
                  "Audience targeting",
                  "Placement optimization",
                  "Remarketing campaigns",
                  "Creative A/B testing",
                ],
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Shopping Ads",
                subtitle: "Showcase Your Products",
                description:
                  "Drive e-commerce sales with product listing ads that show your items, prices, and store name right in search results. Optimized for maximum ROI on product sales.",
                features: [
                  "Product feed optimization",
                  "Smart Shopping campaigns",
                  "Merchant Center management",
                  "Competitive pricing strategy",
                  "Inventory management",
                  "Performance Max integration",
                ],
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "YouTube Ads",
                subtitle: "Engage with Video",
                description:
                  "Reach audiences on the world's second-largest search engine. Video ads that drive awareness, consideration, and action across YouTube and Google video partners.",
                features: [
                  "Video ad production",
                  "TrueView campaigns",
                  "Bumper ads",
                  "Discovery ads",
                  "Audience targeting",
                  "View-through conversions",
                ],
              },
            ].map((campaign, idx) => (
              <div
                key={idx}
                className="reveal-up hover-lift bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#e36a2e]/30"
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#e36a2e]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {campaign.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="display-font text-3xl text-blue-800 mb-2">
                      {campaign.title}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                      {campaign.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-500 mb-6 leading-relaxed text-lg">
                  {campaign.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {campaign.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#e36a2e] mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-zinc-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Not all Google Ads agencies are created equal. Here's what sets us
              apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Google Partner Status",
                description:
                  "We're certified Google Partners with proven expertise and direct access to Google support. Our team holds advanced certifications across all Google Ads platforms.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "Data-Driven Decisions",
                description:
                  "Every optimization is backed by data. We use advanced analytics, conversion tracking, and attribution modeling to make informed decisions that improve your ROI.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
              },
              {
                title: "Transparent Reporting",
                description:
                  "No smoke and mirrors. You get full access to your campaigns and detailed reports showing exactly where your budget goes and what results you're getting.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                ),
              },
              {
                title: "Industry Specialization",
                description:
                  "We've managed successful campaigns across 50+ industries. We understand the unique challenges and opportunities in your market.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"
                    />
                  </svg>
                ),
              },
              {
                title: "Conversion Focus",
                description:
                  "We don't optimize for clicks or impressions—we optimize for conversions. Our strategies are designed to drive real business results, not vanity metrics.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Continuous Optimization",
                description:
                  "Google Ads requires constant attention. We monitor performance daily, test new strategies weekly, and refine campaigns continuously for maximum efficiency.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#e36a2e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                ),
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="reveal-up bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-8 hover:border-[#e36a2e]/50 transition-colors"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-[#e36a2e]/10 rounded-2xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="display-font text-2xl text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-blue-800 mb-6">
              Our{" "}
              <span
                className="relative inline-block display-font"
                style={{ color: "#e36a2e" }}
              >
                PPC
                <svg
                  viewBox="0 0 60 12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 w-full"
                  style={{ bottom: "-6px", height: "12px" }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1,8 C8,3 16,10 24,6 C32,2 40,9 48,5 C52,3 56,7 59,4"
                    stroke="#e36a2e"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              Process
            </h2>
            <p className="text-xl text-zinc-500">
              A systematic approach that consistently delivers results
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#e36a2e]/20"></div>

            <div className="space-y-16">
              {[
                {
                  title: "Account Audit & Strategy",
                  description:
                    "We begin with a comprehensive audit of your current campaigns (if any), analyze competitors, research keywords, and develop a custom strategy aligned with your goals and budget.",
                  duration: "1 Week",
                },
                {
                  title: "Campaign Setup & Launch",
                  description:
                    "Meticulous campaign structure, ad group organization, keyword selection, ad copy creation, conversion tracking setup, and quality assurance before launch.",
                  duration: "1-2 Weeks",
                },
                {
                  title: "Testing & Optimization",
                  description:
                    "A/B test ad copy, landing pages, bidding strategies, and targeting. Gather data to understand what works best for your specific audience.",
                  duration: "2-4 Weeks",
                },
                {
                  title: "Scale & Refine",
                  description:
                    "Increase budgets on high-performing campaigns, expand successful keywords, explore new opportunities, and continuously refine for maximum efficiency.",
                  duration: "Ongoing",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="reveal-up"
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div
                    className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
                  >
                    <div className="flex-1 bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#e36a2e]/30 hover:shadow-[0_20px_40px_rgba(227,106,46,0.10)] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="display-font text-6xl text-[#e36a2e]">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="text-sm font-bold text-[#e36a2e] bg-[#e36a2e]/10 px-4 py-2 rounded-full">
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="display-font text-3xl text-blue-800 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-zinc-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex w-20 h-20 bg-[#e36a2e] rounded-full border-8 border-white shadow-lg shadow-[#e36a2e]/30 flex-shrink-0 items-center justify-center">
                      <span className="display-font text-white text-xl">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="py-24 lg:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Advanced Optimization
            </h2>
            <p className="text-xl text-zinc-400">
              Cutting-edge techniques that maximize every dollar of your ad
              spend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Smart Bidding Strategies",
              "Automated Rules Engine",
              "Quality Score Optimization",
              "Audience Segmentation",
              "Remarketing & RLSA",
              "Competitive Analysis",
              "Landing Page Testing",
              "Call Tracking Integration",
              "Attribution Modeling",
              "Cross-Channel Attribution",
              "Dynamic Search Ads",
              "Performance Max Campaigns",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="reveal-up bg-zinc-900/50 border-2 border-zinc-800 rounded-xl p-6 hover-lift hover:border-[#e36a2e]/50 transition-colors"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-[#e36a2e] mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up relative z-10">
          <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Start Driving Results{" "}
            <span className="text-orange-500 display-font">Today</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Get a free Google Ads audit and discover how much revenue you're
            leaving on the table
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-12 py-6 rounded-full display-font text-lg hover:shadow-2xl hover:shadow-[#e36a2e]/30 transform hover:scale-105 transition-all duration-300"
            >
              LETS START
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoogleAdsManagement;

