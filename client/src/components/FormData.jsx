import React, { useState } from "react";
import { ArrowRightCircle, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const image6 = "https://res.cloudinary.com/dbpzzvcik/image/upload/v1778231875/logoflat_euvua9.png";

const DEFAULT_RADIO_OPTIONS = [
  "Website Design",
  "ECommerce Websites",
  "Service Website",
  "Branding & Logo Design",
  "Digital Marketing",
  "Search Engine Optimisation",
  "Google Ads Management",
  "Meta Ads Management",
  "Content Marketing",
  "Conversion Rate Optimization",
  "Managed Hosting",
  "Go High Level CRM",
  "AI Agents/Automation Development",
  "White Label Marketing",
  "Lead Generation",
];

const ContactForm = ({
  logoSrc = image6,
  logoAlt = "Aussie Growth Media",
  brandName,
  accentColor = "#e36a2e",
  apiRoute = "http://localhost:5000/api/enquiry/enquiry-insert",
  successPath = "/success-page",
  radioOptions = DEFAULT_RADIO_OPTIONS,
  formTitle = "Send us a message",
  formSubtitle = "Let's Talk",
  submitLabel = "Submit Request",
  footerNote = "We respond within 2 business hours · No spam, ever.",
  className = "",
}) => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: "",
    service: "",
  });

  const accent = accentColor;
  const accentFaint = `${accent}1F`;
  const accentMid = `${accent}99`;

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.name) {
      toast.error("Please fill out your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Direct axios call to local backend — no Vercel, no api client
      await axios.post(apiRoute, formData);

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        callback: "",
        service: "",
      });
      navigate(successPath);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Form Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { ph: "Full Name", name: "name", type: "text" },
    { ph: "Email Address", name: "email", type: "email" },
    { ph: "Phone Number", name: "phone", type: "tel" },
    { ph: "Preferred Callback Time", name: "callback", type: "text" },
  ];

  return (
    <div
      className={`relative rounded-3xl overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(160deg, #18181f 0%, #111116 60%, #0e0e12 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Decorative corner glows */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accent}0F 0%, transparent 70%)`,
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${accent}, ${accent}ee, ${accent}, transparent)`,
          boxShadow: `0 0 12px ${accent}80`,
        }}
      />

      <form onSubmit={handleSubmit} className="relative p-7 sm:p-9">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 mb-7 pb-6 border-b border-white/5">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-12 sm:h-14 lg:h-15 w-auto drop-shadow-lg"
            />
          ) : (
            <span className="text-xl font-bold text-white tracking-wide">
              {brandName}
            </span>
          )}
        </div>

        {/* Heading */}
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-1 h-3 rounded-full"
              style={{ background: accent }}
            />
            <p
              className="text-[10px] tracking-[0.3em] uppercase font-bold"
              style={{ color: accent }}
            >
              {formSubtitle}
            </p>
          </div>
          <h2 className="text-2xl font-black text-white leading-snug tracking-tight">
            {formTitle}
          </h2>
        </div>

        {/* Text inputs */}
        <div className="space-y-3 mb-7">
          {inputFields.map(({ ph, name, type }) => (
            <div key={name} className="relative group">
              <div
                className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300"
                style={{
                  background: focused === name ? accent : "transparent",
                  opacity: focused === name ? 1 : 0,
                }}
              />
              <input
                id={`input-${name}`}
                type={type}
                name={name}
                placeholder={ph}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused("")}
                className="w-full pl-5 pr-10 py-3.5 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-all duration-200 font-medium"
                style={{
                  background:
                    focused === name
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    focused === name
                      ? `1px solid ${accentMid}`
                      : "1px solid rgba(255,255,255,0.09)",
                  letterSpacing: "0.01em",
                }}
                required={name === "name" || name === "email"}
              />
              {formData[name] && (
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Radio label */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[10px] tracking-[0.28em] uppercase text-zinc-500 font-bold whitespace-nowrap">
            How can we help?
          </p>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Radio list */}
        <div
          className="space-y-0.5 mb-7 max-h-52 overflow-y-auto pr-2 custom-scrollbar"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: `${accent}33 transparent`,
          }}
        >
          {radioOptions.map((opt, index) => {
            const active = formData.service === opt;
            const radioId = `service-opt-${index}`;
            return (
              <label
                key={opt}
                htmlFor={radioId}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-colors duration-150 relative hover:bg-white/5"
                style={{
                  background: active ? accentFaint : undefined,
                  border: active
                    ? `1px solid ${accent}4D`
                    : "1px solid transparent",
                }}
              >
                {active && (
                  <div
                    className="absolute left-0 top-2 bottom-2 w-[2.5px] rounded-full"
                    style={{
                      background: accent,
                      boxShadow: `0 0 8px ${accent}80`,
                    }}
                  />
                )}
                <div
                  className="w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center transition-all duration-150"
                  style={{
                    border: active
                      ? `2px solid ${accent}`
                      : "1px solid rgba(255,255,255,0.18)",
                    background: active ? accentFaint : "transparent",
                  }}
                >
                  {active && (
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: accent,
                        boxShadow: `0 0 4px ${accent}`,
                      }}
                    />
                  )}
                </div>
                <input
                  id={radioId}
                  type="radio"
                  name="service"
                  value={opt}
                  checked={active}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span
                  className="text-xs font-medium transition-colors duration-150"
                  style={{
                    color: active ? "#ffb085" : "rgba(255,255,255,0.4)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {opt}
                </span>
              </label>
            );
          })}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full overflow-hidden font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 text-white hover:-translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`,
            boxShadow: `0 4px 16px ${accent}40`,
          }}
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="relative">
            {isSubmitting ? "Sending..." : submitLabel}
          </span>
          {isSubmitting ? (
            <Loader2 size={15} className="relative animate-spin" />
          ) : (
            <ArrowRightCircle size={15} className="relative" />
          )}
        </button>

        {footerNote && (
          <p className="text-center text-[10px] text-zinc-700 mt-4 tracking-widest uppercase font-medium">
            {footerNote}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
