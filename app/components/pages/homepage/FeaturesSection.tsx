import {
  CheckCircle2,
  ShoppingCart,
  Users,
  Target,
  Radio,
  Building2,
  DollarSign,
  UserCheck,
  Cpu,
} from "lucide-react";

export default function FeaturesSection() {
  const bottomCards = [
    {
      title: "Smart Filtering",
      desc: "Narrow prospects using advanced targeting filters.",
    },
    {
      title: "Buying Signals",
      desc: "Detect companies showing active purchase intent.",
    },
    {
      title: "Export & Outreach",
      desc: "Export leads and start outreach faster with context.",
    },
    {
      title: "Company Growth Tracking",
      desc: "Monitor hiring expansion and growth signals.",
    },
    {
      title: "Lead Search",
      desc: "Narrow prospects using advanced targeting filters.",
    },
    {
      title: "Outreach Context",
      desc: "Get valuable insights to personalize every message.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#000111]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Everything for{" "}
            <span className="text-teal-400">finding clients</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
            Most lead generation tools sell you outdated databases. By the time
            you reach out, the opportunity is gone. LeadFresh captures the exact
            moment a company enters the buying window.
          </p>
        </div>

        {/* 4 Main Bento Cards (1 Col on Mobile, 2 Col on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {/* Card 1: AI Matching */}
          <div className="rounded-3xl p-5 sm:p-7 bg-[#08101c]/90 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <Cpu className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl text-white font-bold">
                  AI Matching
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Automatically match prospects to your ideal customer profile.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-2">
              <div className="flex flex-col gap-2">
                {[
                  "1534528741775-53994a69daeb",
                  "1507003211169-0a1dd7228f2d",
                  "1494790108377-be9c29b29330",
                  "1500648767791-00dcc994a43e",
                ].map((id, i) => (
                  <img
                    key={i}
                    src={`/Ellipse 1467.png`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-teal-500/40 object-cover"
                    alt=""
                  />
                ))}
              </div>

              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1px] shadow-[0_0_20px_rgba(45,212,191,0.4)] flex-shrink-0">
                <div className="w-full h-full bg-[#060b13] rounded-2xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-36 sm:w-44">
                {[
                  {
                    icon: Building2,
                    title: "High Intent",
                    sub: "Software Co.",
                  },
                  {
                    icon: DollarSign,
                    title: "Funding Raised",
                    sub: "Series B",
                  },
                  { icon: UserCheck, title: "Hiring", sub: "Sales Dir." },
                  { icon: Cpu, title: "Tech Fit", sub: "High" },
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-1.5 sm:p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[10px] sm:text-[11px]"
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <tag.icon className="w-3 h-3 text-teal-400 flex-shrink-0" />
                      <span className="font-medium text-slate-200 truncate">
                        {tag.title}
                      </span>
                    </div>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 ml-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Intent Scoring */}
          <div className="rounded-3xl p-5 sm:p-7 bg-[#08101c]/90 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <Target className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl text-white font-bold">
                  Intent Scoring
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Identify high-intent companies most likely to convert.
              </p>
            </div>

            <div className="mt-8 space-y-5 px-1">
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />{" "}
                    Buying Intent
                  </span>
                  <span className="text-slate-200 font-bold">46%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[46%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-teal-400" /> Engagement
                  </span>
                  <span className="text-slate-200 font-bold">85%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Target className="w-3.5 h-3.5 text-cyan-400" /> Fit Score
                  </span>
                  <span className="text-slate-200 font-bold">85%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Real-Time Signals */}
          <div className="rounded-3xl p-5 sm:p-7 bg-[#08101c]/90 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <Radio className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl text-white font-bold">
                  Real-Time Signals
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Track hiring, funding, growth, and buying activity as it
                happens.
              </p>
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-teal-500/20 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-teal-500/30 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-teal-500/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                      <div className="w-4 h-4 bg-[#060b13] rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-6 w-5 h-5 rounded-full overflow-hidden border border-teal-400">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-5 right-5 w-5 h-5 rounded-full overflow-hidden border border-teal-400">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Decision-Maker Contacts */}
          <div className="rounded-3xl p-5 sm:p-7 bg-[#08101c]/90 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <Users className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl text-white font-bold">
                  Decision-Maker Contacts
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Find verified key contacts at target companies.
              </p>
            </div>

            <div className="relative mt-6 flex justify-center items-center">
              <div className="absolute w-48 h-40 rounded-2xl bg-slate-900/60 border border-slate-800 translate-x-8 -translate-y-2 opacity-40 scale-90 pointer-events-none" />
              <div className="relative z-10 w-full max-w-[260px] rounded-2xl bg-[#0b1424] border border-cyan-500/30 p-3.5 shadow-xl space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    className="w-9 h-9 rounded-xl object-cover border border-slate-700"
                    alt="Alex Morgan"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      Alex Morgan
                    </div>
                    <div className="text-[9px] text-slate-400">VP of Sales</div>
                  </div>
                </div>

                <div className="space-y-1 text-[9px] sm:text-[10px] text-slate-300 font-mono">
                  <div className="flex items-center justify-between">
                    <span>✉ alex.morgan@gmail.com</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>✆ +1 656 452 462</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>

                <div className="flex gap-1.5 pt-0.5">
                  <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Budget Owner
                  </span>
                  <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Sales Strategy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 6 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {bottomCards.map((card, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-[#09111e]/90 border border-slate-800/80"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                {card.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
