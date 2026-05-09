import { ArrowRightCircle, Search } from "lucide-react";

const HeroSection = ({
  designImages = [],
  currentImageIndex = 0,
  heroImage,
  heroImageAlt = "Professional team member",
  badgeText = "Design & Digital Marketing Agency Worldwide",
  subHeading = "with Aussie Growth Media",
  description = "Elevate your online presence with our seamless fusion of cutting-edge design and strategic digital marketing solutions.",
  serviceOptions = [
    { label: "Website Design", value: "/webdesign" },
    { label: "ECommerce Websites", value: "/ecommerce" },
    { label: "Service Website", value: "/service-site" },
    { label: "Branding & Logo Design", value: "/branding&logodesign" },
    { label: "Digital Marketing", value: "/digitalmarketing" },
    { label: "Search Engine Optimisation", value: "/seo" },
    { label: "Google Ads Management", value: "/googleads" },
    { label: "Meta Ads Management", value: "/metaads" },
    { label: "Conversion Rate Optimization", value: "/conversionrate" },
    { label: "Managed Hosting", value: "/hosting" },
    { label: "Go High Level CRM", value: "/gohigh" },
    { label: "AI Agents / Automation Development", value: "/ai" },
    { label: "White Label Marketing", value: "/whitelabel" },
    { label: "Lead Generation", value: "/lead" },
  ],
  onServiceChange,
  onCtaClick,
  ctaLabel = "Get Started Now",
  accentColor = "#e36a2e",
}) => {
  const currentImage = designImages[currentImageIndex] || {};

  return (
    <section className="relative overflow-hidden bg-[#efefef] px-4 sm:px-6 pt-20">
      <style>{`
        @keyframes heroSwapIn {
          0% { transform: scale(0.94) translateY(4px); opacity: 0.75; }
          60% { transform: scale(1.02) translateY(-2px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .hero-swap-in {
          animation: heroSwapIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-zinc-200">
              {badgeText}
            </span>

            <div className="mt-6 flex items-center gap-4">
              <div
                key={currentImage.image || "hero-default-image"}
                className="hero-swap-in h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-xl border border-zinc-300 bg-white shadow-sm"
              >
                {currentImage.image ? (
                  <img
                    src={currentImage.image}
                    alt={currentImage.text || "Hero visual"}
                    className={`h-full w-full ${
                      currentImage.fit === "contain"
                        ? "object-contain p-1"
                        : "object-cover"
                    }`}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-zinc-500">
                    <Search className="h-8 w-8" />
                  </div>
                )}
              </div>
              <h1
                key={currentImage.text}
                className={`hero-swap-in text-5xl sm:text-6xl font-black leading-[0.95] ${
                  currentImage.color || "text-[#9a62d7]"
                }`}
              >
                {currentImage.text || "Grow"}
              </h1>
            </div>

            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-900">
              {subHeading}
            </h2>

            <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-600">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <select
                defaultValue=""
                onChange={onServiceChange}
                className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-700 min-w-[230px] outline-none focus:border-[#e36a2e]"
              >
                <option value="" disabled>
                  How We May Help You?
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={onCtaClick}
                style={{ background: accentColor }}
                className="group flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
              >
                {ctaLabel}
                <ArrowRightCircle className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src={
                "https://www.pngmart.com/files/15/Smiling-Business-Man-Standing-PNG-Image.png"
              }
              alt={heroImageAlt}
              className="mx-auto h-[430px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
