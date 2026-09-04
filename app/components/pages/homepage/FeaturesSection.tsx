import {
  CheckCircle2,
  Target,
  Radio,
  Building2,
  DollarSign,
  UserCheck,
  Cpu,
  BarChart3,
  ShoppingCart,
  Users,
  SquareUser,
  Mail,
  Phone,
  MapPin,
  ScanFace,
  BadgeCheck,
} from "lucide-react";

import ConnectionFlowIllustration from "@/public/svgs/ConnectionFlowIllustration";
export interface ContactUs {
  name: string;
  img: string;
  role?: string;
  email?: string;
  phone?: string;
  location?: string;
  tags?: string[];
}

const contacts = [
  {
    name: "Alex Morgan",
    role: "VP of Sales",
    email: "Alex.morgan@gmail.com",
    phone: "+1656452462",
    location: "San Francisco",
    img: "images/Rectangle 1430106736.png",
    tags: ["Budget Owner", "Sales Strategy"],
  },
  {
    name: "Alex Tracy",
    img: "images/Rectangle 1430106736.png",
  },
  {
    name: "Lucy Res",
    img: "images/Rectangle 1430106736.png",
  },
  {
    name: "Amy Won",
    img: "images/Rectangle 1430106736.png",
  },
];

const metrics = [
  {
    title: "Buying Intent",
    value: 46,
    icon: ShoppingCart,
    iconColor: "text-[#78E05A]",
    barColor: "bg-[#78E05A]",
    glowColor: "shadow-[0_0_12px_3px_#78E05A99]",
  },
  {
    title: "Engagement",
    value: 85,
    icon: Users,
    iconColor: "text-[#56DDB8]",
    barColor: "bg-[#56DDB8]",
    glowColor: "shadow-[0_0_12px_3px_#56DDB899]",
  },
  {
    title: "Fit Score",
    value: 85,
    icon: Target,
    iconColor: "text-[#3B82F6]",
    barColor: "bg-[#3B82F6]",
    glowColor: "shadow-[0_0_12px_3px_#3B82F699]",
  },
];

const featureCards = [
  {
    title: "Smart Filtering",
    desc: "Narrow prospects using advanced targeting filters.",
    borderGradient: "from-[#89E24E] via-[#89E24E]/40 to-transparent",
    glowColor: "rgba(0, 242, 254, 0.15)",
  },
  {
    title: "Buying Signals",
    desc: "Detect companies showing active purchase intent.",
    borderGradient: "from-[#84E034] via-[#4ADE80]/40 to-transparent",
    glowColor: "rgba(132, 224, 52, 0.18)",
  },
  {
    title: "Export & Outreach",
    desc: "Export leads and start outreach faster with context.",
    borderGradient: "from-[#43E97B] via-[#38F9D7]/40 to-transparent",
    glowColor: "rgba(67, 233, 123, 0.15)",
  },
  {
    title: "Company Growth Tracking",
    desc: "Monitor hiring expansion and growth signals.",
    borderGradient: "from-[#00C6FF] via-[#0072FF]/40 to-transparent",
    glowColor: "rgba(0, 198, 255, 0.15)",
  },
  {
    title: "Lead Search",
    desc: "Narrow prospects using advanced targeting filters.",
    borderGradient: "from-[#2F80ED] via-[#56CCF2]/40 to-transparent",
    glowColor: "rgba(47, 128, 237, 0.15)",
  },
  {
    title: "Outreach Context",
    desc: "Get valuable insights to personalize every message",
    borderGradient: "from-[#7C3AED] via-[#6366F1]/40 to-transparent",
    glowColor: "rgba(124, 58, 237, 0.15)",
  },
];

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
    <section id="feature-section" className="relative py-20 mb-10 sm:py-24">
      <div className="lg:w-[90%] w-[98%] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Everything for{" "}
            <span className="bg-[linear-gradient(90.75deg,#0DFF4D_-10.88%,#2979FF_99.35%)] bg-clip-text text-transparent">
              finding clients
            </span>
          </h2>
          <p className="text-xs sm:text-base text-white leading-relaxed">
            Most lead generation tools sell you outdated databases. By the time
            you reach out, the opportunity is gone. LeadFresh captures the exact
            moment a company enters the buying window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          <div className="rounded-3xl col-span-full lg:col-span-2 p-5 sm:p-8 backdrop-blur-xl flex flex-col border-[0.5px] border-[#56DDB8] bg-[linear-gradient(325.96deg,rgba(1,7,16,0.8)_24.57%,rgba(13,28,43,0.8)_96.93%)] shadow-[0px_0px_16px_0px_rgba(86,221,184,0.16),inset_-10px_-11px_22px_0px_rgba(86,221,184,0.12)]">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <div className="bg-[linear-gradient(140.92deg,rgba(0,58,42,0.5)_22.41%,rgba(0,49,88,0.5)_160.54%)] w-12 h-12 flex justify-center items-center rounded-[17px] shadow-[inset_4px_6px_9px_0px_#00000080]">
                  <Cpu className="w-7.5 h-5" />
                </div>
                <h3 className="text-lg sm:text-3xl text-white font-bold">
                  AI Matching
                </h3>
              </div>
              <p className="text-lg text-white text-light">
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
                    className="w-7 h-7 sm:w-12.5 sm:h-12.5 rounded-full border border-teal-500/40 object-cover"
                    alt=""
                  />
                ))}
              </div>

              <ConnectionFlowIllustration className="lg:w-full w-[30%] max-w-[400px] h-auto" />

              <div className="flex flex-col gap-2.5 w-36 sm:w-51">
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
                    className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-lg border-[0.3px] border-[#56DDB8] bg-[linear-gradient(95.35deg,rgba(7,54,65,0.4)_-22.54%,rgba(0,8,9,0.4)_106.43%)] shadow-[inset_7px_0px_9px_0px_#56DDB81F]"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <tag.icon className="w-3 h-3 sm:w-7 sm:h-7 text-[#56DDB8] flex-shrink-0" />
                      <div className="truncate leading-tight">
                        <div className="text-[7px] sm:text-base font-bold text-white truncate">
                          {tag.title}
                        </div>
                        <div className="text-[5px] sm:text-xs text-slate-300/90 truncate">
                          {tag.sub}
                        </div>
                      </div>
                    </div>

                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-md col-span-full lg:col-span-1 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between border-[0.5px] border-[#56DDB8]/70 bg-[linear-gradient(325.96deg,rgba(1,7,16,0.9)_24.57%,rgba(13,28,43,0.9)_96.93%)] shadow-[0px_0px_20px_0px_#56DDB829,inset_-10px_-11px_22px_0px_#56DDB81A]">
            {/* Header Section */}
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 flex justify-center items-center rounded-2xl bg-[linear-gradient(140.92deg,rgba(0,58,42,0.6)_22.41%,rgba(0,49,88,0.6)_160.54%)] shadow-[inset_4px_6px_9px_0px_#00000080] border border-[#56DDB8]/20 flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#56DDB8]" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Intent Scoring
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Identify high-intent companies most likely to convert.
              </p>
            </div>

            {/* Metrics List */}
            <div className="mt-8 space-y-6">
              {metrics.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <div className="flex items-center gap-3 text-white font-normal">
                      <item.icon
                        className={`w-5 h-5 ${item.iconColor} flex-shrink-0`}
                      />
                      <span>{item.title}</span>
                    </div>
                    <span className="text-white/90 font-semibold">
                      {item.value}%
                    </span>
                  </div>

                  <div className="relative w-full h-2 rounded-full bg-[#111C24] flex items-center">
                    <div
                      className={`h-full rounded-full ${item.barColor}`}
                      style={{ width: `${item.value}%` }}
                    />

                    <div
                      className={`absolute w-3.5 h-3.5 bg-white rounded-full -translate-x-1/2 ${item.glowColor}`}
                      style={{ left: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl col-span-full lg:col-span-1 p-5 sm:p-8 backdrop-blur-xl flex flex-col justify-between border-[0.5px] border-[#56DDB8] bg-[linear-gradient(325.96deg,rgba(1,7,16,0.8)_24.57%,rgba(13,28,43,0.8)_96.93%)] shadow-[0px_0px_16px_0px_#56DDB829,inset_-10px_-11px_22px_0px_#56DDB81F]">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-semibold mb-1">
                <div className="bg-[linear-gradient(140.92deg,rgba(0,58,42,0.5)_22.41%,rgba(0,49,88,0.5)_160.54%)] w-12 h-12 flex justify-center items-center rounded-[17px] shadow-[inset_4px_6px_9px_0px_#00000080]">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-3xl text-white font-bold">
                  Real-Time Signals
                </h3>
              </div>
              <p className="text-lg text-white text-light">
                Track hiring, funding, growth, and buying activity as it
                happens.
              </p>
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <img src="/images/Group 47997.png" className="w-60 h-60" alt="" />
            </div>
          </div>

          <div className="rounded-3xl col-span-full lg:col-span-2 p-5 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden border-[0.5px] border-[#56DDB8]/70 bg-[linear-gradient(325.96deg,rgba(1,7,16,0.9)_24.57%,rgba(13,28,43,0.9)_96.93%)] shadow-[0px_0px_20px_0px_#56DDB829,inset_-10px_-11px_22px_0px_#56DDB81A]">
            <div>
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-12 h-12 flex justify-center items-center rounded-2xl bg-[linear-gradient(140.92deg,rgba(0,58,42,0.6)_22.41%,rgba(0,49,88,0.6)_160.54%)] shadow-[inset_4px_6px_9px_0px_#00000080] border border-[#56DDB8]/20 flex-shrink-0">
                  <SquareUser className="w-6 h-6 text-[#56DDB8]" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
                  Decision-Maker Contacts
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Find verified key contacts at target companies.
              </p>
            </div>

            <div className="relative h-[290px] sm:h-[300px] mt-6">
              {contacts.slice(1).map((c, i) => {
                const styles = [
                  "left-[28%] sm:left-[25%] top-3 rotate-[0deg] opacity-95 z-[20] brightness-[0.9]",
                  "left-[32%] sm:left-[35%] top-6 rotate-[2deg] opacity-70 z-[10] brightness-[0.7]",
                  "left-[36%] sm:left-[45%] top-9 rotate-[9deg] opacity-50 z-[5] brightness-[0.5]",
                ];
                return (
                  <div
                    key={i}
                    className={`absolute w-[240px] rounded-2xl bg-[#0b1424] border border-[#56DDB8]/20 p-4 pointer-events-none select-none blur-[0.5px] ${styles[i]}`}
                  >
                    <ContactBody contact={c} compact />
                  </div>
                );
              })}

              <div className="absolute left-0 sm:left-[10%] top-0 z-10 w-[240px] z-[30] -rotate-[4deg] sm:w-[260px] rounded-2xl bg-[#0b1424]/95 border border-[#56DDB8]/40 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] space-y-3">
                <ContactBody contact={contacts[0]} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:block hidden">
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#2DD4BF"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              opacity="0.35"
            >
              <line x1="1%" y1="50%" x2="30%" y2="50%" />

              <line x1="36%" y1="50%" x2="65%" y2="50%" />

              <line x1="58%" y1="50%" x2="64%" y2="50%" />

              <line x1="95%" y1="50%" x2="70%" y2="50%" />

              <line x1="33.8%" y1="6%" x2="33.8%" y2="38%" />
              <line x1="33.8%" y1="62%" x2="33.8%" y2="94%" />

              <line x1="66.2%" y1="6%" x2="66.2%" y2="38%" />
              <line x1="66.2%" y1="62%" x2="66.2%" y2="94%" />
            </g>
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {featureCards.map((card, index) => (
              <div
                key={index}
                style={{
                  boxShadow: `0 10px 30px -10px ${card.glowColor}`,
                }}
                className={`rounded-[22px] p-[1.5px] bg-gradient-to-r ${card.borderGradient} transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="w-full h-full bg-[#050B14] rounded-[21px] px-7 py-6 flex flex-col justify-center">
                  <h4 className="text-[21px] sm:text-[23px] font-bold text-white tracking-tight leading-tight mb-2">
                    {card.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-400 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:hidden flex overflow-x-auto gap-x-12 gap-y-10">
          {featureCards.map((card, index) => (
            <div
              key={index}
              style={{
                boxShadow: `0 10px 30px -10px ${card.glowColor}`,
              }}
              className={`rounded-[22px] p-[1.5px] bg-gradient-to-r ${card.borderGradient} transition-all duration-300 hover:scale-[1.01]`}
            >
              <div className="w-full h-full whitespace-nowrap bg-[#050B14] rounded-[21px] px-7 py-6 flex flex-col justify-center">
                <h4 className="text-[21px] sm:text-[23px] font-bold text-white tracking-tight leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-slate-400 font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBody({
  contact,
  compact = false,
}: {
  contact: ContactUs;
  compact?: boolean;
}) {
  return (
    <>
      {/* Avatar + Name */}
      <div className="flex items-center gap-3">
        <img
          src={contact.img}
          alt={contact.name}
          className="w-14 h-14 rounded-xl object-cover border border-slate-700 flex-shrink-0"
        />
        <div>
          <div className="text-lg font-bold text-white leading-tight">
            {contact.name}
          </div>
          <div className="text-[11px] text-white font-light">VP of Sales</div>
        </div>
      </div>

      {/* Info Rows */}
      <div className="pt-1 space-y-2 text-[11px] text-slate-200">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2 truncate">
            <Mail className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <span className="truncate">{contact.email}</span>
          </span>
          <BadgeCheck className="w-4 h-4 text-[#16F576] flex-shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-white flex-shrink-0" />
            {contact.phone}
          </span>
          <BadgeCheck className="w-4 h-4 text-[#16F576] flex-shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-white flex-shrink-0" />
            {contact.location}
          </span>
          <BadgeCheck className="w-4 h-4 text-[#16F576] flex-shrink-0" />
        </div>
      </div>

      {/* Decision Maker Badge */}
      <div className="flex items-center gap-2 text-[12px] text-white pt-1">
        <ScanFace className="w-5 h-5 text-[#56DDB8]" />
        Decision Maker
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        <span className="px-2.5 py-1 rounded-md text-xs bg-[#00180F]/10 text-[#04A9AD] border border-[#2979FF]/25">
          Budget Owner
        </span>
        <span className="px-2.5 py-1 rounded-md text-xs bg-[#00180F]/10 text-[#04A9AD] border border-[#2979FF]/25">
          Sales Strategy
        </span>
      </div>
    </>
  );
}
