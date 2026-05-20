import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const LeadGeneration = () => {
  const navigate = useNavigate();
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setLeadCount((prev) => (prev >= 2500 ? 0 : prev + 47));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".bounce").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <style>{`
       
        .bounce {
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .bounce-in {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes phone-ring {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); }
          20%, 40%, 60%, 80% { transform: rotate(10deg); }
        }
        
        .phone-ring {
          animation: phone-ring 2s ease-in-out infinite;
        }
        
        .lead-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .lead-card:hover {
          transform: translateY(-12px) rotate(2deg);
          box-shadow: 0 25px 50px -12px rgba(227, 106, 46, 0.35);
        }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden py-20 lg:py-32 bg-zinc-950">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bounce">
            <div className="inline-flex items-center bg-[#e36a2e]/10 border-2 border-[#e36a2e]/30 rounded-full px-6 py-3 mb-8 mt-16 sm:mt-0">
              <svg
                className="w-5 h-5 text-[#e36a2e] mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="bold-font text-sm text-[#e36a2e] tracking-wider">
                LEAD GENERATION EXPERTS
              </span>
            </div>

            <h1 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#e36a2e] mb-6 leading-none">
              FILL YOUR
              <span className="block font-extrabold text-white">PIPELINE</span>
            </h1>

            <p className="bold-font text-xl sm:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Generate high-quality, ready-to-convert leads through
              multi-channel campaigns. We bring you customers who are actively
              looking for what you sell.
            </p>

            <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-zinc-800 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="bold-font text-6xl sm:text-7xl text-[#e36a2e] mb-2">
                    {leadCount.toLocaleString()}+
                  </div>
                  <div className="text-sm text-zinc-400 font-semibold uppercase">
                    Leads Generated This Month
                  </div>
                </div>
                <div>
                  <div className="bold-font text-6xl sm:text-7xl text-[#e36a2e] mb-2">
                    47%
                  </div>
                  <div className="text-sm text-zinc-400 font-semibold uppercase">
                    Average Conversion Rate
                  </div>
                </div>
                <div>
                  <div className="bold-font text-6xl sm:text-7xl text-[#e36a2e] mb-2">
                    $23
                  </div>
                  <div className="text-sm text-zinc-400 font-semibold uppercase">
                    Average Cost Per Lead
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Gen Methods */}
      <div className="py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bounce">
            <h2 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-blue-800 mb-6">
              MULTI-CHANNEL LEAD GENERATION
            </h2>
            <p className="bold-font text-xl text-gray-500 max-w-3xl mx-auto">
              We deploy proven strategies across multiple channels to maximize
              your lead volume and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Paid Advertising",
                description:
                  "Targeted PPC campaigns on Google, Facebook, LinkedIn, and industry-specific platforms that capture high-intent buyers.",
                tactics: [
                  "Google Search Ads",
                  "Social Media Ads",
                  "Display Advertising",
                  "Retargeting Campaigns",
                ],
              },
              {
                icon: "📝",
                title: "Content Marketing",
                description:
                  "High-value content that attracts and educates prospects, establishing authority and building trust throughout the buyer journey.",
                tactics: [
                  "Lead Magnets & eBooks",
                  "Case Studies",
                  "Webinars & Videos",
                  "Blog Content",
                ],
              },
              {
                icon: "✉️",
                title: "Email Campaigns",
                description:
                  "Personalized email sequences that nurture leads from awareness to purchase with targeted messaging and offers.",
                tactics: [
                  "Drip Campaigns",
                  "Newsletter Series",
                  "Abandoned Cart",
                  "Re-engagement Emails",
                ],
              },
              {
                icon: "🔍",
                title: "SEO & Organic",
                description:
                  "Rank for high-converting keywords that bring in organic traffic ready to buy. Long-term sustainable lead generation.",
                tactics: [
                  "Keyword Optimization",
                  "Technical SEO",
                  "Link Building",
                  "Local SEO",
                ],
              },
              {
                icon: "💼",
                title: "LinkedIn Outreach",
                description:
                  "B2B lead generation through strategic LinkedIn campaigns, InMail, and connection requests to decision-makers.",
                tactics: [
                  "Profile Optimization",
                  "Connection Campaigns",
                  "InMail Sequences",
                  "Group Engagement",
                ],
              },
              {
                icon: "📱",
                title: "Landing Pages",
                description:
                  "Conversion-optimized landing pages with compelling copy, strong CTAs, and forms designed to maximize conversions.",
                tactics: [
                  "A/B Testing",
                  "Form Optimization",
                  "Speed Optimization",
                  "Mobile Responsive",
                ],
              },
            ].map((method, idx) => (
              <div
                key={idx}
                className="bounce lead-card bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-4 border-l-[#e36a2e]"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div
                  className="text-6xl mb-4 phone-ring"
                  style={{ animationDelay: `${idx * 0.5}s` }}
                >
                  {method.icon}
                </div>
                <h3 className="bold-font font-extrabold text-3xl text-blue-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.tactics.map((tactic, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-[#e36a2e] rounded-full mr-3"></div>
                      {tactic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Quality */}
      <div className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 bounce">
            <p className="bold-font text-[#e36a2e] text-sm tracking-[0.2em] uppercase mb-4">
              Quality First
            </p>
            <h2 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              QUALITY OVER QUANTITY
            </h2>
            <p className="bold-font text-xl text-zinc-400 max-w-3xl mx-auto">
              We don't just generate leads—we generate qualified leads that
              actually convert into customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stage: "Lead Scoring",
                desc: "Automatic scoring based on behavior and demographics",
                score: "A-F Grade",
              },
              {
                stage: "Qualification",
                desc: "Multi-point verification ensures lead quality",
                score: "95% Accuracy",
              },
              {
                stage: "Enrichment",
                desc: "Complete contact info with social profiles",
                score: "20+ Data Points",
              },
              {
                stage: "Routing",
                desc: "Instant delivery to your CRM or sales team",
                score: "<60 Seconds",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bounce bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-700 transition-colors"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="bold-font text-2xl text-white mb-3">
                  {item.stage}
                </div>
                <p className="text-sm text-zinc-400 mb-4">{item.desc}</p>
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3">
                  <div className="text-3xl font-bold text-[#e36a2e]">
                    {item.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-20 lg:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bounce">
            <h2 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-blue-800 mb-6">
              PROVEN RESULTS ACROSS INDUSTRIES
            </h2>
            <p className="bold-font text-xl text-gray-500 max-w-3xl mx-auto">
              We've generated millions of leads across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Real Estate",
              "Insurance",
              "Financial Services",
              "Home Services",
              "Healthcare",
              "Legal Services",
              "Education",
              "SaaS & Tech",
              "E-commerce",
              "Automotive",
              "B2B Services",
              "Franchises",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bounce bg-gradient-to-br from-[#e36a2e] to-orange-600 rounded-2xl p-6 shadow-xl text-center text-white font-bold hover:scale-105 transition-transform cursor-pointer"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 bounce">
            <p className="bold-font text-[#e36a2e] text-sm tracking-[0.2em] uppercase mb-4">
              How It Works
            </p>
            <h2 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-white mb-6">
              OUR PROCESS
            </h2>
            <p className="bold-font text-xl text-zinc-400">
              A systematic approach to generating consistent, high-quality leads
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                desc: "Understand your ideal customer profile, market, and unique selling propositions",
              },
              {
                step: "02",
                title: "Strategy Development",
                desc: "Create multi-channel campaign strategy with clear KPIs and conversion goals",
              },
              {
                step: "03",
                title: "Campaign Launch",
                desc: "Deploy campaigns across selected channels with tracking and analytics setup",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous A/B testing and refinement to improve cost-per-lead and conversion rates",
              },
              {
                step: "05",
                title: "Scale & Grow",
                desc: "Expand successful campaigns and explore new channels for maximum lead volume",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bounce bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 flex items-center gap-8 hover:border-zinc-700 transition-colors"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-[#e36a2e]/10 border border-[#e36a2e]/20 rounded-2xl flex items-center justify-center">
                  <span className="bold-font text-5xl text-[#e36a2e]">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="bold-font font-extrabold text-3xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 lg:py-32 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bounce relative z-10">
          <p className="text-[#e36a2e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Let's Get Started
          </p>
          <h2 className="bold-font font-extrabold text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            READY TO GROW?
          </h2>
          <p className="bold-font text-xl text-zinc-400 mb-12">
            Start generating qualified leads that turn into paying customers
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-12 py-6 rounded-full bold-font text-2xl shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeadGeneration;
