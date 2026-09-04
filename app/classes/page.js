import {
  Phone,
  BookOpen,
  Lightbulb,
  Brain,
  Target,
  GraduationCap,
  Sparkles,
  Star,
} from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

export const metadata = {
  title: "Std V to X Tuition Classes | Kalyan West",
  description:
    "Std V to X tuition classes at Revi's Group Tuitions in Khadakpada, Kalyan West. State Board and CBSE coaching with personal attention in Maths, Science, English, SST and Hindi.",
  alternates: {
    canonical: "/classes",
  },
  openGraph: {
    title: "Std V to X Tuition Classes | Kalyan West",
    description:
      "State Board and CBSE tuition classes for Std V to X students in Khadakpada, Kalyan West, with personal attention and focused preparation.",
    url: "/classes",
    type: "website",
  },
};
const rows = [
  [
    "Std V",
    "Foundation Building",
    "The base year. We build study habits and comfort with every subject before the syllabus gets harder.",
    BookOpen,
  ],
  [
    "Std VI",
    "Concept Strengthening",
    "Concepts get reinforced with more practice, so gaps from primary school don't carry forward silently.",
    Lightbulb,
  ],
  [
    "Std VII",
    "Academic Development",
    "A step up in independence — students solve more on their own, with our doubt-clearing as the safety net.",
    Brain,
  ],
  [
    "Std VIII",
    "Strong Conceptual Preparation",
    "The bridge year before board-level pressure begins. We tighten fundamentals across every subject.",
    Target,
  ],
  [
    "Std IX",
    "Board-Oriented Preparation",
    "SSC board patterns are introduced properly — paper structure, time management, answer-writing.",
    GraduationCap,
  ],
  [
    "Std X",
    "Board Examination Preparation",
    "Full board-exam mode: regular tests, progress tracking, revision built around weak areas.",
    Star,
  ],
];

export default function ClassesPage() {
  return (
    <>
      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes classGradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes classGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.12;
          }

          50% {
            transform: scale(1.18);
            opacity: 0.28;
          }
        }

        @keyframes classSparkle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.6) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
          }
        }

        @keyframes classFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes classCardIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes classShine {
          0% {
            transform: translateX(-150%) rotate(12deg);
            opacity: 0;
          }

          25% {
            opacity: 0.16;
          }

          70% {
            opacity: 0.16;
          }

          100% {
            transform: translateX(150%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes classLine {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes goldPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 193, 7, 0);
          }

          50% {
            box-shadow: 0 0 28px rgba(255, 193, 7, 0.25);
          }
        }
      `}</style>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            `linear-gradient(135deg, ${C.navy}, #173F70, #765600, #D4A017, ${C.navyDeep})`,
          backgroundSize: "400% 400%",
          animation: "classGradient 14s ease infinite",
        }}
      >
        {/* Blue glow */}
        <div
          className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#60A5FA",
            animation: "classGlow 8s ease-in-out infinite",
          }}
        />

        {/* Gold glow */}
        <div
          className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "classGlow 7s ease-in-out infinite",
          }}
        />

        {/* =====================================================
            HERO GLITTER
        ===================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["7%", "25%", "0s"],
            ["16%", "70%", "1s"],
            ["28%", "15%", "2s"],
            ["40%", "82%", "3.5s"],
            ["55%", "20%", "1.5s"],
            ["68%", "72%", "4s"],
            ["80%", "18%", "2.5s"],
            ["92%", "58%", "1s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-dot-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left,
                top,
                background: i % 2 === 0 ? "#FFD700" : "#FFF4B0",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 16px #FFD700"
                    : "0 0 14px #FFF4B0",
                animation: "classSparkle 3.5s ease-in-out infinite",
                animationDelay: delay,
              }}
            />
          ))}

          {[
            ["11%", "48%", "0s"],
            ["23%", "22%", "1.5s"],
            ["35%", "75%", "2s"],
            ["52%", "12%", "3s"],
            ["67%", "44%", "1s"],
            ["82%", "25%", "2.5s"],
            ["94%", "78%", "4s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-star-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: i % 2 === 0 ? "#FFD700" : "#FFF4B0",
                animation: "classSparkle 3s ease-in-out infinite",
                animationDelay: delay,
              }}
            >
              ✦
            </span>
          ))}

          {/* Moving light sweep */}
          <div
            className="absolute top-0 left-0 w-1/3 h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              animation: "classShine 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 text-center">
          <div className="flex justify-center">
            <Ribbon>Classes V to X</Ribbon>
          </div>

          <h1
            style={{ ...disp, color: "#fff" }}
            className="text-5xl md:text-7xl font-extrabold mt-7 mb-5"
          >
            Learn Better.
            <br className="sm:hidden" /> Build Stronger.
          </h1>

          <p className="text-white/90 max-w-2xl mx-auto font-medium text-base md:text-xl leading-relaxed">
            Std V to X, State Board &amp; CBSE — every standard taught with
            a clear focus, from foundation building to board preparation.
          </p>

          {/* Hero badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xl font-bold backdrop-blur-sm">
              <BookOpen size={17} color="#FFD700" />
              Std V–X
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xl font-bold backdrop-blur-sm">
              <Sparkles size={17} color="#FFD700" />
              State Board &amp; CBSE
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xl font-bold backdrop-blur-sm">
              <Target size={17} color="#FFD700" />
              Personal Attention
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLASSES SECTION
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F7FF, #FFF9DD, #F3FBFF, #FFFDF0)",
        }}
      >
        {/* Background glows */}
        <div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#60A5FA",
            animation: "classGlow 9s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "classGlow 8s ease-in-out infinite",
          }}
        />

        {/* Background glitter */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            ["6%", "18%"],
            ["18%", "82%"],
            ["34%", "12%"],
            ["50%", "90%"],
            ["67%", "16%"],
            ["82%", "76%"],
            ["94%", "28%"],
          ].map(([left, top], i) => (
            <span
              key={`section-star-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: "#D4A017",
                animation: "classSparkle 3s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          {/* Section heading */}
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em]"
                style={{
                  background: "#FFF4BF",
                  color: "#9A6B00",
                  border: "1px solid #EBCB55",
                }}
              >
                <Sparkles size={15} />
                A Journey Through School
              </div>
            </div>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-6xl font-extrabold mt-5"
            >
              Every year has a purpose.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-2xl">
              From building the basics in Std V to confidently facing the
              SSC board in Std X, the approach grows with the student.
            </p>
          </div>

          {/* Progress line */}
          <div className="hidden md:flex items-center mb-10 px-8">
            {rows.map(([std], index) => (
              <div
                key={`progress-${std}`}
                className="flex items-center flex-1"
              >
                <div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-4 border-white shadow-lg"
                  style={{
                    background:
                      index === rows.length - 1
                        ? C.red
                        : C.gold,
                    color:
                      index === rows.length - 1
                        ? "#fff"
                        : C.navyDeep,
                  }}
                >
                  {index + 5}
                </div>

                {index < rows.length - 1 && (
                  <div
                    className="h-1 flex-1"
                    style={{
                      background:
                        `linear-gradient(90deg, ${C.gold}, ${C.red}, ${C.gold})`,
                      backgroundSize: "200% 100%",
                      animation: "classLine 5s linear infinite",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* =====================================================
              CLASS CARDS
          ===================================================== */}
          <div className="space-y-6">
            {rows.map(([std, focus, desc, Icon], i) => (
              <div
                key={std}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: "classCardIn 0.7s ease-out both",
                  animationDelay: `${i * 0.12}s`,
                  border:
                    i === rows.length - 1
                      ? "2px solid #FFD700"
                      : "1px solid rgba(13,43,87,0.08)",
                }}
              >
                {/* Gold shine on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, rgba(255,215,0,0.10) 50%, transparent 65%)",
                    animation: "classShine 3s ease-in-out",
                  }}
                />

                <div className="relative z-10 grid md:grid-cols-[190px_1fr]">
                  {/* Standard block */}
                  <div
                    className="relative p-7 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden"
                    style={{
                      background:
                        i % 2 === 0
                          ? `linear-gradient(145deg, ${C.navy}, #173F70)`
                          : `linear-gradient(145deg, ${C.red}, ${C.redDeep})`,
                    }}
                  >
                    {/* Mini sparkle */}
                    <span
                      className="absolute top-4 right-5 text-xl"
                      style={{
                        color: "#FFD700",
                        animation: "classSparkle 2.5s ease-in-out infinite",
                      }}
                    >
                      ✦
                    </span>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <Icon size={28} color="#FFD700" />
                    </div>

                    {/* Standard */}
                    <div
                      style={{ ...disp }}
                      className="text-4xl md:text-5xl font-extrabold text-white"
                    >
                      {std}
                    </div>

                    <div className="text-xs uppercase tracking-widest text-white/70 font-bold mt-2">
                      Standard
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <div
                          className="font-extrabold text-2xl md:text-3xl mb-2"
                          style={{
                            ...disp,
                            color: C.navy,
                          }}
                        >
                          {focus}
                        </div>

                        <div
                          className="h-1 w-16 rounded-full mb-4"
                          style={{
                            background:
                              `linear-gradient(90deg, ${C.gold}, ${C.red})`,
                          }}
                        />

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                          {desc}
                        </p>
                      </div>

                      {/* Number */}
                      <div
                        className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center font-black text-lg"
                        style={{
                          background: "#FFF5C7",
                          color: "#9A6B00",
                          border: "1px solid #EBCB55",
                        }}
                      >
                        {i + 1}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span
                        className="text-xs font-black uppercase tracking-wider mr-1"
                        style={{ color: C.red }}
                      >
                        Subjects
                      </span>

                      {[
                        "Maths",
                        "Science",
                        "English",
                        "SST",
                        "Hindi",
                      ].map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1.5 rounded-full text-xs font-bold"
                          style={{
                            background: "#EFF9FF",
                            color: C.navy,
                            border: "1px solid #D5EFFB",
                          }}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>

                    {/* Special final-class label */}
                    {i === rows.length - 1 && (
                      <div
                        className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wide"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFF1A8, #FFFBE8)",
                          color: "#9A6B00",
                          border: "1px solid #EBCB55",
                          animation:
                            "goldPulse 4s ease-in-out infinite",
                        }}
                      >
                        <Star size={14} fill="#D4A017" />
                        Board Examination Year
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM MESSAGE
      ========================================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, #FFFFFF, #FFF9DF, #EAF8FF)",
        }}
      >
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            opacity: 0.12,
            animation: "classGlow 8s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <Sparkles
            size={32}
            color={C.goldDeep}
            className="mx-auto mb-4"
          />

          <h2
            style={{ ...disp, color: C.navy }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            The right foundation makes
            <span style={{ color: C.red }}> every next step easier.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
            Not sure which batch fits your child? Talk to us and we&apos;ll
            help you understand the right option.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16"
        style={{
          background:
            `linear-gradient(135deg, ${C.red}, #C50A05, ${C.redDeep})`,
          backgroundSize: "200% 200%",
          animation: "classGradient 10s ease infinite",
        }}
      >
        {/* CTA sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["10%", "30%"],
            ["25%", "70%"],
            ["48%", "18%"],
            ["70%", "76%"],
            ["90%", "35%"],
          ].map(([left, top], i) => (
            <span
              key={`cta-star-${i}`}
              className="absolute text-2xl"
              style={{
                left,
                top,
                color: "#FFD700",
                animation: "classSparkle 3s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div
              className="text-sm font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#FFE58A" }}
            >
              Revi&apos;s Group Tuitions
            </div>

            <div
              style={{ ...disp, color: "#fff" }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              Not sure which batch fits
              <br className="hidden md:block" />
              your child? Just ask us.
            </div>
          </div>

          <GradButton
            href="tel:9321016779"
            icon={Phone}
            variant="white"
          >
            Call 93210 16779
          </GradButton>
        </div>
      </section>
    </>
  );
}