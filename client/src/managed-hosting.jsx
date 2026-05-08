import React, { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  TrendingUp,
  Globe,
  BarChart,
  Users,
  Target,
  CheckCircle2,
  Server,
  Phone,
  Mail,
  Settings,
  ChevronRight,
} from "lucide-react";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Hosting = () => {
  const navigate = useNavigate();

  const [uptimePercentage, setUptimePercentage] = useState(99.0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimePercentage((prev) => {
        const newVal = prev + 0.01;
        return newVal >= 99.99 ? 99.99 : newVal;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Dark Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden min-h-screen">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center bg-[#e36a2e]/10 border border-[#e36a2e]/20 rounded-full px-6 py-2.5 mb-8">
              <span className="text-xs sm:text-sm font-bold text-[#e36a2e] tracking-[0.2em] uppercase">
                Enterprise-Grade Infrastructure
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Hosting that <br />
              <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                never sleeps.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Lightning-fast, ultra-secure, fully managed hosting with a 99.99%
              uptime guarantee. Focus on your business while we handle the
              infrastructure.
            </p>

            {/* Live Uptime Counter Bento */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-b from-[#e36a2e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl sm:text-8xl font-black text-[#e36a2e] mb-2 tracking-tighter">
                  {uptimePercentage.toFixed(2)}%
                </div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-6">
                  Uptime Guarantee
                </div>
                <div className="bg-zinc-950 rounded-full h-3 overflow-hidden border border-zinc-800 p-0.5">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-[#e36a2e] h-full rounded-full transition-all duration-300"
                    style={{ width: `${uptimePercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Features Section */}
      <section className="py-20 lg:py-32 relative bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 lg:mb-24" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
              Premium Features <span className="text-[#e36a2e]">Included.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
              Everything you need for a fast, secure, and scalable website—no
              hidden fees or surprise charges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Zap />,
                title: "Blazing Fast Speed",
                description:
                  "SSD storage, CDN integration, advanced caching, and optimized servers deliver sub-second page load times globally.",
                specs: [
                  "NVMe SSD Storage",
                  "Global CDN",
                  "HTTP/3 Support",
                  "Server-level Caching",
                ],
              },
              {
                icon: <Shield />,
                title: "Advanced Security",
                description:
                  "Enterprise-grade security with automatic malware scanning, DDoS protection, firewall, and free SSL certificates.",
                specs: [
                  "Free SSL Certificates",
                  "DDoS Protection",
                  "Malware Scanning",
                  "Firewall Protection",
                ],
              },
              {
                icon: <TrendingUp />,
                title: "Auto-Scaling",
                description:
                  "Automatically scale resources based on traffic. Handle viral moments and traffic spikes without slowdowns.",
                specs: [
                  "Auto Resource Scaling",
                  "Load Balancing",
                  "Traffic Spike Protection",
                  "Unlimited Bandwidth",
                ],
              },
              {
                icon: <Server />,
                title: "Daily Backups",
                description:
                  "Automated daily backups with 30-day retention. One-click restore to any previous version with zero data loss.",
                specs: [
                  "Automated Daily Backups",
                  "30-Day Retention",
                  "One-Click Restore",
                  "Offsite Storage",
                ],
              },
              {
                icon: <Target />,
                title: "Staging Environment",
                description:
                  "Test changes safely in a staging environment before pushing to production. Perfect for updates and development.",
                specs: [
                  "Full Staging Site",
                  "Git Integration",
                  "One-Click Deploy",
                  "Environment Sync",
                ],
              },
              {
                icon: <BarChart />,
                title: "Performance Monitoring",
                description:
                  "Real-time monitoring of server health, uptime, and performance metrics with instant alerts for any issues.",
                specs: [
                  "24/7 Monitoring",
                  "Performance Metrics",
                  "Instant Alerts",
                  "Detailed Analytics",
                ],
              },
              {
                icon: <Users />,
                title: "Expert Support",
                description:
                  "24/7/365 expert support from real humans who know hosting inside out. Average response time under 15 minutes.",
                specs: [
                  "24/7/365 Support",
                  "<15min Response",
                  "Expert Engineers",
                  "Priority Handling",
                ],
              },
              {
                icon: <Globe />,
                title: "Optimized Stack",
                description:
                  "Latest versions of PHP, MySQL, Node.js, and more. Optimized server configurations for maximum performance.",
                specs: [
                  "Latest PHP/MySQL",
                  "Node.js Support",
                  "Redis/Memcached",
                  "Custom Configs",
                ],
              },
              {
                icon: <Settings />,
                title: "Developer Tools",
                description:
                  "SSH access, WP-CLI, Git integration, composer, and all the tools developers need for efficient workflows.",
                specs: [
                  "SSH/SFTP Access",
                  "WP-CLI Support",
                  "Git Integration",
                  "Composer & NPM",
                ],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 text-[#e36a2e] transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm font-medium text-gray-700 group/spec"
                    >
                      <div className="w-1.5 h-1.5 bg-[#e36a2e] rounded-full mr-3 transition-transform group-hover/spec:scale-150"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Infrastructure Section */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-24" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              World-Class Infrastructure
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
              Built on enterprise-grade architecture trusted by Fortune 500
              companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              {/* Server Specs Bento */}
              <div
                data-aos="fade-right"
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Server className="text-[#e36a2e]" /> Server Specs
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "CPU", value: "Intel Xeon / AMD EPYC" },
                    { label: "RAM", value: "DDR4 ECC Memory" },
                    { label: "Storage", value: "NVMe SSD RAID 10" },
                    { label: "Network", value: "10Gbps Redundant" },
                    { label: "OS", value: "Ubuntu/AlmaLinux" },
                    { label: "PHP", value: "v7.4 - v8.3" },
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-zinc-800 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-zinc-500 text-sm font-semibold tracking-wider uppercase">
                        {spec.label}
                      </span>
                      <span className="text-zinc-200 font-medium">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global CDN Bento */}
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Globe className="text-[#e36a2e]" /> Global CDN
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Content delivered from 200+ edge locations worldwide ensuring
                  lightning-fast load times regardless of visitor location.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "North America",
                    "Europe",
                    "Asia Pacific",
                    "South America",
                    "Middle East",
                    "Africa",
                  ].map((region, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-center"
                    >
                      <div className="text-xs font-semibold text-zinc-300">
                        {region}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Security Layers Bento */}
              <div
                data-aos="fade-left"
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Shield className="text-[#e36a2e]" /> Security Layers
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      layer: "Layer 7",
                      protection: "Application DDoS Protection",
                    },
                    { layer: "Layer 4", protection: "Network DDoS Mitigation" },
                    { layer: "Layer 3", protection: "IP Reputation Filtering" },
                    { layer: "SSL/TLS", protection: "Encrypted Connections" },
                    { layer: "Firewall", protection: "Advanced WAF Rules" },
                    { layer: "Malware", protection: "Real-time Scanning" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between group hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="text-[#e36a2e] text-xs font-bold uppercase tracking-wider mb-1">
                          {item.layer}
                        </span>
                        <span className="text-zinc-300 text-sm font-medium">
                          {item.protection}
                        </span>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLA Bento */}
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Uptime SLA
                </h3>
                <div className="text-center mb-8">
                  <div className="text-6xl font-black text-orange-500 tracking-tighter mb-2">
                    99.99%
                  </div>
                  <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
                    Guaranteed Uptime
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 mb-4 flex justify-between items-center">
                  <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">
                    Max Downtime / Year
                  </div>
                  <div className="text-xl font-bold text-white">52 min</div>
                </div>
                <div className="text-xs text-zinc-500 text-center font-medium">
                  * We credit your account for any SLA violations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Managed Services */}
      <section className="py-20 lg:py-32 relative bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 lg:mb-24" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
              Fully Managed <span className="text-[#e36a2e]">Service.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
              We handle all the technical details so you can focus exclusively
              on growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                category: "Server Management",
                tasks: [
                  "OS updates & security patches",
                  "Software installation & updates",
                  "Performance optimization",
                  "Resource monitoring & scaling",
                  "Load balancing configuration",
                  "Database optimization",
                ],
              },
              {
                category: "Security Management",
                tasks: [
                  "SSL certificate installation",
                  "Firewall configuration",
                  "Malware scanning & removal",
                  "Security audit & hardening",
                  "DDoS attack mitigation",
                  "Intrusion detection",
                ],
              },
              {
                category: "Backup Management",
                tasks: [
                  "Automated daily backups",
                  "Backup verification & testing",
                  "Offsite backup storage",
                  "Disaster recovery planning",
                  "Quick restore service",
                  "Version control rollbacks",
                ],
              },
              {
                category: "Application Management",
                tasks: [
                  "CMS updates (WordPress, etc.)",
                  "Plugin and theme updates",
                  "Compatibility testing",
                  "Performance profiling",
                  "Cache configuration",
                  "Database cleanup",
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-8">
                  <div className="w-3 h-3 bg-[#e36a2e] rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-blue-800">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#e36a2e] mr-3 shrink-0" />
                      <span className="text-gray-600 font-medium">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Migration & Support & CTA */}
      <section className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e36a2e]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-32">
          {/* Free Migration Block */}
          <div data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Free Website Migration
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Switching hosts? We'll handle everything. Zero downtime, zero
                hassle, zero cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  step: "01",
                  title: "Sign Up",
                  desc: "Choose your hosting plan",
                },
                {
                  step: "02",
                  title: "Submit Details",
                  desc: "Provide current host info",
                },
                {
                  step: "03",
                  title: "We Migrate",
                  desc: "Expert team handles transfer",
                },
                { step: "04", title: "Go Live", desc: "Update DNS when ready" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 border border-zinc-800 text-center hover:border-zinc-700 transition-colors"
                >
                  <div className="text-4xl font-black text-[#e36a2e] mb-4">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm text-zinc-400">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800 text-center">
                <div className="pt-4 sm:pt-0">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    $0
                  </div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    Migration Cost
                  </div>
                </div>
                <div className="pt-6 sm:pt-0">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    0 hrs
                  </div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    Downtime
                  </div>
                </div>
                <div className="pt-6 sm:pt-0">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    24-48
                  </div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    Hours to Complete
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Block */}
          <div data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                24/7/365 Expert Support
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Real humans, real expertise, real fast response times.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center hover:border-zinc-700 transition-colors">
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-6 h-6 text-[#e36a2e]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Instant help via live chat. Average response time under 2
                  minutes.
                </p>
                <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                  &lt;2 min
                </div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Response Time
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center hover:border-zinc-700 transition-colors">
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-6 h-6 text-[#e36a2e]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Email Support
                </h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Detailed support via email with attachments and screenshots.
                </p>
                <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                  &lt;15 min
                </div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Response Time
                </div>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 text-center hover:border-zinc-700 transition-colors">
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-6 h-6 text-[#e36a2e]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Phone Support
                </h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Talk to an expert directly for complex issues and urgent
                  situations.
                </p>
                <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                  &lt;5 min
                </div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Wait Time
                </div>
              </div>
            </div>

            {/* What we cover grid */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center max-w-5xl mx-auto">
              <h3 className="text-sm font-bold text-zinc-400 tracking-widest uppercase mb-8">
                What Our Support Covers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Server Issues",
                  "Website Errors",
                  "Email Problems",
                  "Database Issues",
                  "SSL Certificates",
                  "DNS Config",
                  "Performance",
                  "Security",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#e36a2e]" />
                    <div className="text-xs font-medium text-zinc-300 uppercase tracking-wider">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA Block */}
          <div
            data-aos="zoom-in"
            className="relative bg-zinc-950 rounded-3xl p-10 sm:p-16 overflow-hidden shadow-2xl text-center border border-zinc-800"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e36a2e]/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                Ready for Better Hosting?
              </h3>
              <p className="text-zinc-400 mb-10 text-lg">
                Experience the difference of truly managed, enterprise-grade
                hosting. Free migration included.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-3 bg-[#e36a2e] hover:bg-[#e36a2e] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
              >
                Get Started Now
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Add missing lucide-react import component locally if needed by the code above
const MessageSquare = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default Hosting;

