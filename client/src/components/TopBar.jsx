import React from "react";
import { Phone, Mail } from "lucide-react";

/**
 * TopBar — Reusable top announcement / contact bar
 *
 * Props:
 *  @param {string}   phone           - Phone number to display & call  (default: "+91 9646 174 266")
 *  @param {string}   phoneHref       - tel: href value                 (default: "tel:+919646174266")
 *  @param {string}   email           - Full email address              (default: "support@growthflowmedia.com")
 *  @param {string}   emailShort      - Truncated email for mobile      (default: "support@growthflow...")
 *  @param {string}   ctaLabel        - Right-side CTA text             (default: "Contact Support")
 *  @param {function} onCtaClick      - Click handler for the CTA
 *  @param {string}   accentColor     - Hex accent color                (default: "#e36a2e")
 *  @param {string}   className       - Extra classes on the root div
 */
const TopBar = ({
  phone = "+91 9646 174 266",
  phoneHref = "tel:+919646174266",
  email = "support@growthflowmedia.com",
  emailShort = "support@growthflow...",
  ctaLabel = "Contact Support",
  onCtaClick,
  accentColor = "#e36a2e",
  className = "",
}) => {
  return (
    <div
      data-aos="slide-down"
      className={`relative z-[101] w-full bg-white border-b border-zinc-200 px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium tracking-wide text-zinc-600 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between sm:gap-0">
        {/* Contact Info Group */}
        <div className="flex items-center justify-start gap-3 sm:gap-4">
          {/* Phone */}
          <a
            href={phoneHref}
            className="group flex items-center gap-1 sm:gap-1.5 transition-colors duration-300"
            style={{ "--hover-color": accentColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Phone
              size={11}
              className="opacity-80 transition-opacity duration-300 group-hover:opacity-100 shrink-0 sm:w-[13px] sm:h-[13px]"
              style={{ color: accentColor }}
            />
            <span className="whitespace-nowrap">{phone}</span>
          </a>

          {/* Subtle Divider (Desktop Only) */}
          <div className="hidden h-3 w-[1px] bg-gray-200 sm:block" />

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-1 sm:gap-1.5 transition-colors duration-300"
            onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Mail
              size={11}
              className="opacity-80 transition-opacity duration-300 group-hover:opacity-100 shrink-0 sm:w-[13px] sm:h-[13px]"
              style={{ color: accentColor }}
            />
            <span className="hidden whitespace-nowrap sm:inline">{email}</span>
            <span className="whitespace-nowrap sm:hidden">{emailShort}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

// ─── USAGE EXAMPLES ───────────────────────────────────────────────────────────
//
// Drop-in replacement (identical to original):
//   <TopBar onCtaClick={scrollToContact} />
//
// Custom contact details:
//   <TopBar
//     phone="+1 800 123 4567"
//     phoneHref="tel:+18001234567"
//     email="hello@myagency.com"
//     emailShort="hello@myagency..."
//     ctaLabel="Talk to Us"
//     onCtaClick={() => navigate("/contact")}
//   />
//
// Custom accent color:
//   <TopBar accentColor="#3b82f6" onCtaClick={scrollToContact} />
//
// Extra wrapper classes:
//   <TopBar className="sticky top-0" onCtaClick={scrollToContact} />
