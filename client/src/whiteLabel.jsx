import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const WhiteLabelMarketing = () => {
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Mulish:wght@300;400;500;600;700&display=swap');
        .wlm-root  { font-family:'Mulish',sans-serif; }
        .wlm-h    { font-family:'Syne',sans-serif; }

        .wlm-tag  { display:inline-flex;align-items:center;gap:8px;background:rgba(227,106,46,0.1);border:1px solid rgba(227,106,46,0.3);color:#e36a2e;font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;padding:6px 16px;border-radius:9999px;font-family:'Mulish',sans-serif; }
        .wlm-dot  { width:6px;height:6px;border-radius:50%;background:#e36a2e;animation:wdot 2s infinite; }
        @keyframes wdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.7)}}

        .wlm-divider { height:3px;background:linear-gradient(90deg,transparent,#e36a2e,#e36a2e,transparent);border-radius:9999px; }

        /* Cards */
        .wlm-card { background:#fff;border-radius:24px;border:1px solid #f3e8e1;box-shadow:0 4px 24px rgba(227,106,46,.06);transition:all .3s ease; }
        .wlm-card:hover { box-shadow:0 18px 52px rgba(227,106,46,.13);transform:translateY(-5px);border-color:#f0c4aa; }

        /* Feature boxes inside cards */
        .wlm-feat { background:linear-gradient(135deg,#fff7f4,#fff3ee);border:1px solid #f0c4aa;border-radius:18px;padding:20px;transition:all .2s; }
        .wlm-feat:hover { box-shadow:0 6px 20px rgba(227,106,46,.1);transform:translateY(-2px); }

        /* Benefit rows */
        .wlm-brow { display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:16px;border:1px solid #fff7f4;background:#fffaf8;transition:all .2s ease;margin-bottom:8px;cursor:default; }
        .wlm-brow:hover { background:#fff7f4;border-color:#f0c4aa;transform:translateX(4px); }
        .wlm-badge { width:32px;height:32px;border-radius:10px;background:#fff7f4;border:1px solid #f0c4aa;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:#e36a2e;flex-shrink:0;font-family:'Syne',sans-serif; }

        /* Check rows */
        .wlm-crow { display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #fff7f4;transition:padding .2s; }
        .wlm-crow:last-child { border-bottom:none; }
        .wlm-crow:hover { padding-left:8px; }
        .wlm-cicon { width:24px;height:24px;border-radius:50%;background:#fff7f4;border:1px solid #f0c4aa;display:flex;align-items:center;justify-content:center;flex-shrink:0; }

        /* Portfolio banner */
        .wlm-banner { border-radius:24px;padding:36px;position:relative;overflow:hidden;background:linear-gradient(135deg,#e36a2e 0%,#e36a2e 100%); }
        .wlm-banner::before { content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,0.06); }
        .wlm-banner::after  { content:'';position:absolute;bottom:-40px;left:-40px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,0.04); }
        .wlm-slabel { font-size:10px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:14px;font-family:'Mulish',sans-serif; }

        /* Partner cards */
        .wlm-pcard { background:#fff;border:1px solid #f3e8e1;border-radius:24px;padding:36px 32px;text-align:center;transition:all .35s cubic-bezier(.34,1.4,.64,1);position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(227,106,46,.06); }
        .wlm-pcard::after { content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#e36a2e,#e36a2e);transform:scaleX(0);transform-origin:left;transition:transform .35s ease; }
        .wlm-pcard:hover { transform:translateY(-10px);border-color:#f0c4aa;box-shadow:0 28px 60px rgba(227,106,46,.15); }
        .wlm-pcard:hover::after { transform:scaleX(1); }

        .wlm-pill { display:flex;align-items:center;gap:10px;padding:7px 0; }
        .wlm-pdot { width:6px;height:6px;border-radius:50%;background:#e36a2e;flex-shrink:0; }

        /* CTA */
        .wlm-cta { border-radius:28px;padding:64px 48px;position:relative;overflow:hidden;background:linear-gradient(135deg,#e36a2e 0%,#e36a2e 100%);box-shadow:0 32px 72px rgba(227,106,46,.3);text-align:center; }
        .wlm-cta::before { content:'';position:absolute;top:0;left:50%;width:500px;height:500px;border-radius:50%;background:rgba(255,255,255,.04);transform:translate(-50%,-50%); }
        .wlm-cta::after  { content:'';position:absolute;bottom:0;right:0;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.03);transform:translate(30%,30%); }
        .wlm-cbtn { display:inline-flex;align-items:center;gap:10px;background:#18181b;color:#fff;font-weight:900;font-family:'Syne',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;padding:16px 40px;border-radius:9999px;border:none;cursor:pointer;transition:all .3s ease;box-shadow:0 8px 24px rgba(0,0,0,.25); }
        .wlm-cbtn:hover { background:#27272a;box-shadow:0 14px 36px rgba(0,0,0,.35);transform:translateY(-2px); }
      `}</style>

      <div
        className="wlm-root min-h-screen mt-16 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "#fafafa",
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(227,106,46,.07) 0%,transparent 65%)",
            transform: "translate(30%,-30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(207,95,40,.05) 0%,transparent 65%)",
            transform: "translate(-30%,30%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* ── HERO ── */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="wlm-tag mb-5">
              <span className="wlm-dot" />
              Agency Partnership
            </div>
            <h1
              className="wlm-h text-blue-800 mb-5 leading-tight"
              style={{
                fontSize: "clamp(48px,8vw,88px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              White Label <span style={{ color: "#e36a2e" }}>Marketing</span>
            </h1>
            <div className="wlm-divider mb-8 mx-auto" style={{ width: 180 }} />
            <p className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Scale your agency with our comprehensive white label marketing
              services delivered under your brand
            </p>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            <div className="lg:col-span-2 space-y-7">
              {/* Branded Solutions */}
              <div className="wlm-card p-9">
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "#fff7f4",
                      border: "1px solid #f0c4aa",
                    }}
                  >
                    <svg
                      className="w-7 h-7"
                      style={{ color: "#e36a2e" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h2 className="wlm-h text-3xl font-bold text-blue-800 tracking-tight leading-tight mt-1">
                    Branded Marketing Solutions
                  </h2>
                </div>
                <p className="text-zinc-500 text-base leading-relaxed mb-7 font-light">
                  We provide fully white-labeled marketing services that allow
                  your agency to offer comprehensive digital marketing solutions
                  under your own brand name. Our team becomes your extended
                  marketing department.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="wlm-feat">
                    <h4
                      className="wlm-h font-bold mb-2"
                      style={{ color: "#c0530f" }}
                    >
                      Complete White Label
                    </h4>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "#c0530f" }}
                    >
                      All deliverables branded with your logo and identity
                    </p>
                  </div>
                  <div className="wlm-feat">
                    <h4
                      className="wlm-h font-bold mb-2"
                      style={{ color: "#c0530f" }}
                    >
                      Direct Client Access
                    </h4>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "#c0530f" }}
                    >
                      Client-facing communication through your channels
                    </p>
                  </div>
                </div>
              </div>

              {/* Portfolio banner */}
              <div className="wlm-banner">
                <h3 className="wlm-h text-2xl font-bold text-white mb-1 relative z-10 tracking-tight">
                  White Label Services Portfolio
                </h3>
                <p className="text-orange-100 text-sm mb-8 font-light relative z-10">
                  Everything your clients need, under your brand
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <p className="wlm-slabel">Digital Marketing</p>
                    <ul>
                      {[
                        "SEO & Content Marketing",
                        "Social Media Management",
                        "PPC Campaign Management",
                      ].map((item) => (
                        <li key={item} className="wlm-pill">
                          <span
                            className="wlm-pdot"
                            style={{ background: "#fde8d8" }}
                          />
                          <span className="text-white text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="wlm-slabel">Creative Services</p>
                    <ul>
                      {[
                        "Website Design & Development",
                        "Brand Identity Design",
                        "Video Production",
                      ].map((item) => (
                        <li key={item} className="wlm-pill">
                          <span
                            className="wlm-pdot"
                            style={{ background: "#fde8d8" }}
                          />
                          <span className="text-white text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="wlm-card p-7">
                <div className="wlm-tag mb-4">
                  <span className="wlm-dot" />
                  Agency Gains
                </div>
                <h3 className="wlm-h text-xl font-bold text-blue-800 mb-5 tracking-tight">
                  Benefits for Your Agency
                </h3>
                <div>
                  {[
                    {
                      title: "Expand Service Offerings",
                      desc: "Add premium services without overhead",
                    },
                    {
                      title: "Increase Profit Margins",
                      desc: "Higher margins with no staffing costs",
                    },
                    {
                      title: "Scale Rapidly",
                      desc: "Take on more clients without constraints",
                    },
                    {
                      title: "Maintain Brand Control",
                      desc: "All deliverables under your brand",
                    },
                  ].map((benefit, index) => (
                    <div key={benefit.title} className="wlm-brow">
                      <div className="wlm-badge">{index + 1}</div>
                      <div>
                        <h4 className="wlm-h font-bold text-blue-800 text-sm">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-zinc-500 mt-0.5 font-light">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal features */}
              <div className="wlm-card p-7">
                <div className="wlm-tag mb-4">
                  <span className="wlm-dot" />
                  Platform
                </div>
                <h3 className="wlm-h text-xl font-bold text-blue-800 mb-5 tracking-tight">
                  Client Portal Features
                </h3>
                <div>
                  {[
                    "White-labeled dashboard",
                    "Custom reporting tools",
                    "Direct communication channels",
                  ].map((item) => (
                    <div key={item} className="wlm-crow">
                      <div className="wlm-cicon">
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: "#e36a2e" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-zinc-700 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── PARTNERSHIP MODELS ── */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <div className="wlm-tag mb-4">
                <span className="wlm-dot" />
                Flexible Engagement
              </div>
              <h2
                className="wlm-h text-blue-800 mb-4 leading-tight"
                style={{
                  fontSize: "clamp(36px,6vw,64px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Partnership Models
              </h2>
              <div className="wlm-divider mx-auto" style={{ width: 120 }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🤝",
                  title: "Project-Based",
                  desc: "Individual project collaboration with white label delivery",
                  items: [
                    "Fixed project pricing",
                    "Complete brand control",
                    "Flexible engagement",
                  ],
                },
                {
                  emoji: "📊",
                  title: "Retainer Model",
                  desc: "Monthly retainer for ongoing white label services",
                  items: [
                    "Predictable monthly costs",
                    "Priority support",
                    "Dedicated team",
                  ],
                },
                {
                  emoji: "🚀",
                  title: "Full Service",
                  desc: "Comprehensive white label marketing department",
                  items: [
                    "Full service portfolio",
                    "24/7 support",
                    "Strategic partnership",
                  ],
                },
              ].map((model) => (
                <div key={model.title} className="wlm-pcard">
                  <div className="text-5xl mb-5">{model.emoji}</div>
                  <h3 className="wlm-h text-xl font-bold text-blue-800 mb-2 tracking-tight">
                    {model.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-7 font-light leading-relaxed">
                    {model.desc}
                  </p>
                  <ul className="text-left">
                    {model.items.map((item) => (
                      <li key={item} className="wlm-pill">
                        <span className="wlm-pdot" />
                        <span className="text-zinc-600 text-sm font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div>
            <div className="wlm-cta">
              <div className="relative z-10">
                <div
                  className="wlm-tag mb-5"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.2)",
                    color: "#fde8d8",
                    display: "inline-flex",
                  }}
                >
                  <span className="wlm-dot" style={{ background: "#fde8d8" }} />
                  Let's Partner
                </div>
                <h3
                  className="wlm-h text-white mb-4 leading-tight"
                  style={{
                    fontSize: "clamp(36px,6vw,60px)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Ready to Scale Your Agency?
                </h3>
                <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  Partner with us to offer premium marketing services under your
                  brand and accelerate your agency growth.
                </p>
                <button
                  className="wlm-cbtn"
                  onClick={() => navigate("/contact")}
                >
                  Start White Label Partnership
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhiteLabelMarketing;

