"use client";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

const logos = [
  { name: "Livestor", icon: ")" },
  { name: "mojo", icon: "000" },
  { name: "CARV", icon: "◉" },
  { name: "aircall", icon: "▣" },
  { name: "BEEG", icon: "⋘" },
];
export default function HeroSection() {
  const items = [...logos, ...logos];

  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-[#000111]">
      {/* Glow Effects */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-[90%] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text / Info (Centered on Mobile, Left-aligned on Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#56DDB8] bg-transparent backdrop-blur-md">
              <div className="relative w-7 h-7">
                <Image src={"/stars.png"} fill className="w-full h-full" alt="star" />
              </div>
              <span
                className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #56DDB8 0%, #6DA3FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-Powered Sales Intelligence
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.15]">
              Find{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                high-intent client
              </span>{" "}
              before your competitors do.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg text-center">
              LeadFresh AI tracks hiring activity, company growth, and buying
              signals in real time — then turns them into qualified
              opportunities with decision-maker contacts and outreach context.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-2">
              <button className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl font-semibold text-slate-950 bg-[linear-gradient(102.51deg,#A6E657_-6.65%,#40C7E4_94.57%)] hover:opacity-95 transition shadow-[0_0_25px_rgba(45,212,191,0.35)]">
                <span>Start Free Trail</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="md:w-full w-1/2 whitespace-nowrap sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl font-medium text-white border border-slate-700/80 bg-[radial-gradient(76.09%_190.45%_at_102.36%_83.62%,rgba(4,169,173,0.2)_0%,rgba(6,17,36,0.2)_100%)] hover:bg-slate-800/80 transition backdrop-blur-md">
                <span>Watch Demo</span>
                <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex gap-3 pt-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#060b13] object-cover"
                  src="/Ellipse 1467.png"
                  alt="Avatar"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#060b13] object-cover"
                  src="/Ellipse 1467.png"
                  alt="Avatar"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-[#060b13] object-cover"
                  src="/Ellipse 1467.png"
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-col sm:items-start space-y-1">
                <div className="flex items-center gap-0.5">
                  {/* تگ SVG بدون display:none تا مرورگر defs را کامپایل کند */}
                  <svg
                    width="0"
                    height="0"
                    className="absolute w-0 h-0 pointer-events-none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="starGrad"
                        gradientTransform="rotate(167.32 0.5 0.5)"
                      >
                        <stop offset="9.18%" stopColor="#7FC8FF" />
                        <stop offset="94.95%" stopColor="#56DDB8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                      fill="url(#starGrad)"
                      stroke="url(#starGrad)"
                    />
                  ))}
                </div>

                <p className="text-[11px] sm:text-xs text-white text-left">
                  Trusted by{" "}
                  <span className="text-white font-medium">2,000+</span>{" "}
                  agencies & <br /> freelancers
                </p>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup (Stacked Below on Mobile) */}
          <div className="lg:col-span-7 relative w-full [perspective:1000px] md:h-[692px] h-75 rounded-2xl p-3.5 sm:p-5 sm:[transform:rotateY(-7deg)_rotateX(0deg)] hover:[transform:none] transition-all duration-700 mt-4 lg:mt-0">
            <Image src={"/hero.png"} fill className="w-full h-full" alt="star" />
          </div>
        </div>

        <div className="mt-5 sm:mt-10 overflow-x-auto">
          <div className="flex w-max animate-marquee gap-3">
            <img
              className="md:h-19 h-21 md:w-full w-[50%]"
              src="/Group 47804.png"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
