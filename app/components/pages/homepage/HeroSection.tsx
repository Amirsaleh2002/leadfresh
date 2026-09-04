"use client";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import Header from "../../module/Header";

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
    <section id="hero">
      <Header />
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl w-[90%] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#56DDB8] bg-transparent backdrop-blur-md">
                <div className="relative w-7 h-7">
                  <Image
                    src={"/stars.png"}
                    fill
                    className="w-full h-full"
                    alt="star"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#56DDB8] to-[#6DA3FF] bg-clip-text text-transparent">
                  AI-Powered Sales Intelligence
                </span>
              </div>

              <h1 className="text-2xl sm:text-5xl xl:text-5xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.15] w-full">
                Find{" "}
                <span className="bg-gradient-to-r from-[#4DFF63] via-[#56DDB8] via-[55.04%] to-[#29ADFF] bg-clip-text text-transparent">
                  high-intent client
                </span>{" "}
                before your competitors do.
              </h1>

              <p className="text-sm sm:text-base text-white leading-relaxed max-w-lg text-left">
                LeadFresh AI tracks hiring activity, company growth, and buying
                signals in real time — then turns them into qualified
                opportunities with decision-maker contacts and outreach context.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-2">
                <button className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl font-semibold text-slate-950 bg-[linear-gradient(102.51deg,#A6E657_-6.65%,#40C7E4_94.57%)] hover:opacity-95 transition shadow-[0_0_25px_rgba(45,212,191,0.35)]">
                  <span className="text-black">Start Free Trail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="md:w-full w-1/2 whitespace-nowrap sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl font-medium text-white border border-slate-700/80 bg-[radial-gradient(76.09%_190.45%_at_102.36%_83.62%,rgba(4,169,173,0.2)_0%,rgba(6,17,36,0.2)_100%)] hover:bg-slate-800/80 transition backdrop-blur-md">
                  <span>Watch Demo</span>
                  <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                  </div>
                </button>
              </div>

              <div className="flex gap-3 pt-3">
                <div className="flex -space-x-3 overflow-hidden">
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

            <div className="lg:col-span-6 relative w-full [perspective:1000px] md:h-[692px] h-75 rounded-2xl p-3.5 sm:p-5 sm:[transform:rotateY(-7deg)_rotateX(0deg)] hover:[transform:none] transition-all duration-700 mt-4 lg:mt-0">
              <Image
                src={"/hero.png"}
                fill
                className="w-full h-full"
                alt="star"
              />
            </div>
          </div>
          <div className="relative overflow-x-auto pl-4 py-3 bg-gradient-to-r from-[#56ddb8]/30 via-[#000119]/50 to-transparent">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#56DDB8] to-[#2979FF]" />

            <div className="flex items-center justify-between gap-6">
              <img
                src="/images/Container (4).png"
                className="w-[110px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Mojo (1).png"
                className="w-[83px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Container (3).png"
                className="w-[74px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Aircall (1).png"
                className="w-[86px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Container (2).png"
                className="w-[58px] h-[18px] object-contain"
                alt=""
              />{" "}
              <img
                src="/images/Container (1).png"
                className="w-[110px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Mojo.png"
                className="w-[83px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Container.png"
                className="w-[74px] h-[18px] object-contain"
                alt=""
              />
              <img
                src="/images/Aircall.png"
                className="w-[86px] h-[18px] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
