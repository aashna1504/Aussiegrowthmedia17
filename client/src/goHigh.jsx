import React, { useEffect } from "react";
import {
  ChevronRight,
  Layers,
  CheckCircle2,
  Award,
  Zap,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import FormData from "./components/FormData";

const GoHighLevelCRM = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      category: "Marketing Automation",
      icon: <Zap className="w-8 h-8 text-[#e36a2e]" />,
      items: [
        "Email Marketing & Sequences",
        "SMS Campaigns & Triggers",
        "Advanced Lead Scoring",
        "Workflow Automation",
        "Multi-channel Campaigns",
      ],
    },
    {
      category: "CRM & Sales Pipeline",
      icon: <BarChart3 className="w-8 h-8 text-[#e36a2e]" />,
      items: [
        "Visual Pipeline Management",
        "Lead Tracking & Routing",
        "Automated Appointment Scheduling",
        "Sales Analytics & Dashboards",
        "Team Management",
      ],
    },
    {
      category: "Client Management",
      icon: <Users className="w-8 h-8 text-[#e36a2e]" />,
      items: [
        "Secure Client Portals",
        "Automated Billing & Invoicing",
        "Custom Form Builders",
        "Reputation Management",
        "Review Generation System",
      ],
    },
  ];

  const benefits = [
    {
      title: "All-in-One Platform",
      description:
        "Replace 10+ expensive tools with a single, deeply integrated platform.",
      icon: <Layers className="w-6 h-6 text-[#e36a2e]" />,
    },
    {
      title: "Custom Workflows",
      description:
        "Tailor complex automations exactly to your specific business processes.",
      icon: <Settings className="w-6 h-6 text-[#e36a2e]" />,
    },
    {
      title: "White-label Ready",
      description:
        "Brand it completely as your own and resell it to your clients.",
      icon: <Award className="w-6 h-6 text-[#e36a2e]" />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Make data-driven decisions with comprehensive, cross-channel reporting.",
      icon: <BarChart3 className="w-6 h-6 text-[#e36a2e]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Dark Hero & Dashboard Bento Section */}
      <section className="relative bg-zinc-950 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div data-aos="fade-right">
              <p className="text-[#e36a2e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Platform Implementation
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Scale faster with <br />
                <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                  GoHighLevel.
                </span>
              </h1>
              <p className="text-zinc-400 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
                The ultimate all-in-one CRM platform to manage clients, automate
                your marketing, and scale your operations without limits.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="group px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-white bg-[#e36a2e] hover:bg-[#e36a2e] transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
                >
                  Book a Demo{" "}
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Right: Dashboard Bento Grid */}
            <div
              className="relative grid grid-cols-2 gap-4 sm:gap-6"
              data-aos="fade-left"
            >
              {/* Full Width Image Card */}
              <div className="col-span-2 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-zinc-900/50 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="GoHighLevel Dashboard"
                  className="w-full h-56 sm:h-72 object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Complete Agency Solution
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Eliminate the need for multiple software subscriptions.
                    Everything you need is right here.
                  </p>
                </div>
              </div>

              {/* Bento Box 1 */}
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col justify-center items-center text-center transition-colors hover:border-zinc-700">
                <div className="text-3xl font-extrabold text-[#e36a2e] mb-2">
                  90%
                </div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Software Cost
                  <br />
                  Reduction
                </div>
              </div>

              {/* Bento Box 2 */}
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-xl flex flex-col justify-center items-center text-center transition-colors hover:border-zinc-700">
                <div className="text-3xl font-extrabold text-white mb-2">
                  3x
                </div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Faster Client
                  <br />
                  Onboarding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Features Grid Section */}
      <section className="py-20 lg:py-32 relative bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 tracking-tight mb-6"
              data-aos="fade-up"
            >
              Everything you need,{" "}
              <span className="text-[#e36a2e]">in one place.</span>
            </h2>
            <p
              className="text-gray-500 text-lg sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              GoHighLevel provides a complete suite of tools to manage all
              aspects of your business, from lead capture to campaign
              management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((category, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-8 pb-4 border-b border-gray-100">
                  {category.category}
                </h3>
                <ul className="space-y-5">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group/item">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-[#e36a2e]/10 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#e36a2e]" />
                      </div>
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Benefits Section */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#e36a2e]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16 tracking-tight"
            data-aos="fade-up"
          >
            Why Partner With Us for Implementation?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Contact Split Section */}
      <section className="relative py-20 lg:py-32 bg-zinc-950 overflow-hidden border-t border-zinc-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column: Latest News */}
            <div data-aos="fade-right" className="flex flex-col h-full">
              <div className="mb-10 sm:mb-14">
                <p className="text-[#e36a2e] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  Insights
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Latest News & <br /> Updates.
                </h2>
                <p className="text-zinc-400 text-lg">
                  Stay up to date with the latest strategies, case studies, and
                  insights from our team.
                </p>
              </div>

              <div className="space-y-6 flex-grow flex flex-col justify-center">
                {/* Article Card 1 */}
                <div className="group flex flex-col sm:flex-row gap-5 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 sm:p-5 hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                  <div className="h-48 sm:h-40 w-full sm:w-40 shrink-0 rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                      alt="PPC"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-2">
                    <p className="text-[#e36a2e] text-xs font-bold tracking-wider uppercase mb-2">
                      January 3, 2026
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-[#e36a2e]">
                      How We Deliver High-Performance Marketing Campaigns
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                      Marketing automation is the foundation stone for the
                      success of businesses today. Discover how instantaneous
                      reach can transform your ROI.
                    </p>
                  </div>
                </div>

                {/* Article Card 2 */}
                <div className="group flex flex-col sm:flex-row gap-5 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 sm:p-5 hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                  <div className="h-48 sm:h-40 w-full sm:w-40 shrink-0 rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                      alt="CRM"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-2">
                    <p className="text-[#e36a2e] text-xs font-bold tracking-wider uppercase mb-2">
                      December 26, 2025
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-[#e36a2e]">
                      Why Your Agency Needs a White-Label CRM Solution
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                      A dedicated CRM plays a crucial role in today's market,
                      where managing your client pipeline is the difference
                      between scaling and stalling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div data-aos="fade-left">
              <FormData />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoHighLevelCRM;

