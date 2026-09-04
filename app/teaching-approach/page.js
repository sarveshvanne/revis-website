import {
  Phone,
  Lightbulb,
  Users,
  HelpCircle,
  ClipboardCheck,
  BarChart3,
  RefreshCw,
  Sparkles,
  BookOpen,
  Target,
  Brain,
  CheckCircle2,
} from "lucide-react";

import { C, disp, body } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";

export const metadata = {
  title: "Teaching Approach | Revi's Group Tuitions Kalyan",
  description:
    "Discover Revi's Group Tuitions teaching approach in Khadakpada, Kalyan West — concept-based learning, small batches, doubt clearing, regular tests, progress reports and revision for Std V to X.",
  alternates: {
    canonical: "/teaching-approach",
  },
  openGraph: {
    title: "Teaching Approach | Revi's Group Tuitions Kalyan",
    description:
      "Concept-based learning, small batches, regular tests and personal attention for Std V to X students in Kalyan West.",
    url: "/teaching-approach",
    type: "website",
  },
};

const teachingMethods = [
  [
    "Concept-Based Learning",
    "Understanding concepts instead of simply memorising answers — marks follow naturally after that.",
    Lightbulb,
  ],
  [
    "Small Batches",
    "15-20 students per batch, so every child gets seen, not just seated in a crowd.",
    Users,
  ],
  [
    "Doubt Clearing",
    "Students get real opportunities to ask, clarify, and strengthen understanding — same week.",
    HelpCircle,
  ],
  [
    "Regular Tests",
    "Continuous oral and written assessment to track academic progress honestly.",
    ClipboardCheck,
  ],
  [
    "Progress Reports",
    "Parents get clarity on exactly where their child is doing well, and where to focus at home.",
    BarChart3,
  ],
  [
    "Revision & Practice",
    "Regular reinforcement of important concepts — syllabus finished with time to spare.",
    RefreshCw,
  ],
];

const timetable = [
  [
    "2:00-3:30 PM",
    [
      "Science (E)",
      "English (E)",
      "Maths (E)",
      "Science (E)",
      "English (E)",
      "Weak Topic (W)",
      "Pending (W)",
    ],
  ],
  [
    "3:45-5:15 PM",
    [
      "Maths (W)",
      "Science (W)",
      "English (W)",
      "Maths (W)",
      "Science (W)",
      "Practice Qs",
      "Previous Yr Qs",
    ],
  ],
  [
    "6:30-8:00 PM",
    [
      "Homework",
      "Test/Quiz",
      "Homework",
      "NCERT Practice",
      "Sample Paper",
      "Revision",
      "Next Wk Plan",
    ],
  ],
  [
    "8:00-9:00 PM",
    [
      "SST (E)",
      "Hindi (E)",
      "Computer (E)",
      "SST (E)",
      "Weekly Revision",
      "Free Read",
      "Early Sleep",
    ],
  ],
];

export default function ApproachPage() {
  return (
    <>
      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes approachGradient {
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

        @keyframes approachGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.10;
          }

          50% {
            transform: scale(1.18);
            opacity: 0.25;
          }
        }

        @keyframes approachSparkle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.6) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
          }
        }

        @keyframes approachFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes approachCardIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes approachShine {
          0% {
            transform: translateX(-150%) rotate(12deg);
            opacity: 0;
          }

          25% {
            opacity: 0.18;
          }

          70% {
            opacity: 0.18;
          }

          100% {
            transform: translateX(150%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes approachLine {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes approachPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 193, 7, 0);
          }

          50% {
            box-shadow: 0 0 28px rgba(255, 193, 7, 0.28);
          }
        }

        @keyframes approachRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
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
            `linear-gradient(135deg, ${C.navy}, #173F70, #735500, #C99A08, ${C.navyDeep})`,
          backgroundSize: "400% 400%",
          animation: "approachGradient 14s ease infinite",
        }}
      >
        {/* Blue glow */}
        <div
          className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#60A5FA",
            animation: "approachGlow 8s ease-in-out infinite",
          }}
        />

        {/* Gold glow */}
        <div
          className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "approachGlow 7s ease-in-out infinite",
          }}
        />

        {/* Glitter */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["7%", "23%", "0s"],
            ["17%", "72%", "1s"],
            ["29%", "15%", "2s"],
            ["42%", "82%", "3s"],
            ["56%", "22%", "1.5s"],
            ["69%", "68%", "4s"],
            ["82%", "17%", "2.5s"],
            ["94%", "58%", "1s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-dot-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left,
                top,
                background: i % 2 === 0 ? "#FFD700" : "#FFF3A3",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 16px #FFD700"
                    : "0 0 14px #FFF3A3",
                animation:
                  "approachSparkle 3.5s ease-in-out infinite",
                animationDelay: delay,
              }}
            />
          ))}

          {[
            ["12%", "47%", "0s"],
            ["25%", "20%", "1.5s"],
            ["37%", "76%", "2s"],
            ["53%", "13%", "3s"],
            ["67%", "43%", "1s"],
            ["81%", "27%", "2.5s"],
            ["93%", "76%", "4s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-star-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: i % 2 === 0 ? "#FFD700" : "#FFF3A3",
                animation:
                  "approachSparkle 3s ease-in-out infinite",
                animationDelay: delay,
              }}
            >
              ✦
            </span>
          ))}

          {/* Moving light */}
          <div
            className="absolute top-0 left-0 w-1/3 h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
              animation:
                "approachShine 10s ease-in-out infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 text-center">
          <div className="flex justify-center">
            <Ribbon>How We Teach</Ribbon>
          </div>

          <h1
            style={{ ...disp, color: "#fff" }}
            className="text-5xl md:text-6xl font-extrabold mt-7 mb-5"
          >
            Better Guidance.
            <br />
            <span style={{ color: C.gold }}>
              Better Concepts.
            </span>
            <br />
            Better Future.
          </h1>

          <p className="text-white/90 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Not just what we teach — how we make sure it actually
            sticks.
          </p>

          {/* Hero badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold backdrop-blur-sm">
              <Brain size={17} color="#FFD700" />
              Concept First
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold backdrop-blur-sm">
              <Users size={17} color="#FFD700" />
              Small Batches
            </div>

            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold backdrop-blur-sm">
              <Target size={17} color="#FFD700" />
              Result Focused
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEACHING METHODS
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F7FF, #FFF9DE, #F3FBFF, #FFFDF0)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#60A5FA",
            animation: "approachGlow 9s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "approachGlow 8s ease-in-out infinite",
          }}
        />

        {/* Background sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            ["6%", "20%"],
            ["17%", "80%"],
            ["32%", "12%"],
            ["48%", "91%"],
            ["65%", "17%"],
            ["82%", "78%"],
            ["94%", "31%"],
          ].map(([left, top], i) => (
            <span
              key={`method-star-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: "#D4A017",
                animation:
                  "approachSparkle 3s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          {/* Heading */}
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
                Our Teaching Philosophy
              </div>
            </div>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-5xl font-extrabold mt-5"
            >
              More than just tuition.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Every part of the learning process has a purpose —
              understand, practise, test, improve and repeat.
            </p>
          </div>

          {/* Teaching cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingMethods.map(([title, description, Icon], i) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl p-7 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  animation:
                    "approachCardIn 0.7s ease-out both",
                  animationDelay: `${i * 0.1}s`,
                  border:
                    i === 0 || i === 4
                      ? "2px solid #F0CE55"
                      : "1px solid rgba(13,43,87,0.08)",
                }}
              >
                {/* Hover shine */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 35%, rgba(255,215,0,0.12) 50%, transparent 65%)",
                    animation:
                      "approachShine 3s ease-in-out",
                  }}
                />

                {/* Number */}
                <div
                  className="absolute top-5 right-5 text-4xl font-black opacity-10"
                  style={{ color: C.navy }}
                >
                  0{i + 1}
                </div>

                {/* Icon */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #FFF4B5, #FFFBE8)"
                        : "linear-gradient(135deg, #E8F7FF, #F7FCFF)",
                    border:
                      i % 2 === 0
                        ? "1px solid #EBCB55"
                        : "1px solid #C7EAF8",
                  }}
                >
                  <Icon
                    size={28}
                    color={
                      i % 2 === 0
                        ? C.goldDeep
                        : C.red
                    }
                  />
                </div>

                <div
                  style={{ ...disp, color: C.navy }}
                  className="font-extrabold text-xl mb-3"
                >
                  {title}
                </div>

                <div className="h-1 w-12 rounded-full mb-4 bg-gradient-to-r from-yellow-400 to-red-500" />

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {description}
                </p>

                {/* Bottom check */}
                <div
                  className="flex items-center gap-2 mt-6 text-xs font-bold"
                  style={{ color: C.navy }}
                >
                  <CheckCircle2
                    size={16}
                    color={C.goldDeep}
                  />
                  Part of our daily approach
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING PROCESS
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "approachGlow 8s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#3B82F6",
            animation: "approachGlow 9s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
              style={{
                background: "rgba(255,193,7,0.13)",
                color: "#FFD700",
                border: "1px solid rgba(255,215,0,0.3)",
              }}
            >
              <BookOpen size={15} />
              How Learning Happens
            </div>

            <h2
              style={{ ...disp }}
              className="text-4xl md:text-5xl font-extrabold text-white mt-5"
            >
              Learn → Practise → Test → Improve
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              A simple cycle, repeated consistently, creates stronger
              understanding and better academic confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["01", "Learn", "Understand the concept clearly.", Lightbulb],
              ["02", "Practise", "Apply it through questions.", BookOpen],
              ["03", "Test", "Check understanding honestly.", ClipboardCheck],
              ["04", "Improve", "Fix gaps and repeat.", RefreshCw],
            ].map(([number, title, desc, Icon], i) => (
              <div
                key={title}
                className="relative rounded-3xl p-7 text-center bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                style={{
                  animation:
                    "approachFloat 5s ease-in-out infinite",
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD700, #E5A800)",
                    color: C.navyDeep,
                    animation:
                      "approachPulse 4s ease-in-out infinite",
                  }}
                >
                  <Icon size={28} />
                </div>

                <div
                  className="text-xs font-black tracking-widest mt-5"
                  style={{ color: "#FFD700" }}
                >
                  {number}
                </div>

                <div
                  style={{ ...disp }}
                  className="text-2xl font-extrabold text-white mt-2"
                >
                  {title}
                </div>

                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  {desc}
                </p>

                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20">
                    <span
                      style={{
                        color: "#FFD700",
                        fontSize: "22px",
                      }}
                    >
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TIMETABLE
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F7FF, #FFF9DD, #F5FCFF)",
        }}
      >
        <div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "approachGlow 8s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <Eyebrow>Sample Weekly Study Timetable</Eyebrow>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-5xl font-extrabold mt-4 mb-3"
            >
              A structure that builds discipline.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Not just attendance — a structured rhythm of learning,
              practice, testing and revision.
            </p>

            <p className="text-gray-500 text-sm mt-3">
              Sample only — timings adjustable to your child&apos;s
              school schedule.
            </p>
          </div>

          {/* Table */}
          <div
            className="overflow-x-auto rounded-3xl shadow-xl border bg-white"
            style={{
              borderColor: "#EBCB55",
            }}
          >
            <table
              className="w-full min-w-[850px] text-sm text-left"
              style={body}
            >
              <thead>
                <tr
                  style={{
                    background:
                      `linear-gradient(135deg, ${C.navy}, #173F70)`,
                  }}
                  className="text-white"
                >
                  <th className="p-4 font-extrabold">
                    Time
                  </th>

                  {[
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                  ].map((day) => (
                    <th
                      key={day}
                      className="p-4 font-extrabold text-center"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {timetable.map(([time, row], rowIndex) => (
                  <tr
                    key={time}
                    className="border-t hover:bg-yellow-50 transition-colors"
                    style={{
                      borderColor: "#EFEFEF",
                    }}
                  >
                    <td
                      className="p-4 font-extrabold whitespace-nowrap"
                      style={{ color: C.red }}
                    >
                      {time}
                    </td>

                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="p-4 text-gray-600 text-center"
                      >
                        <span
                          className="inline-block px-2.5 py-1.5 rounded-lg"
                          style={{
                            background:
                              rowIndex % 2 === 0
                                ? "#F1FAFF"
                                : "#FFFBE8",
                          }}
                        >
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs">
            <div className="flex items-center gap-2 font-semibold text-gray-600">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#60A5FA" }}
              />
              E = Easy Subject / Score Booster
            </div>

            <div className="flex items-center gap-2 font-semibold text-gray-600">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: "#FFD700" }}
              />
              W = Weak Subject / More Focus
            </div>
          </div>
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
          animation: "approachGradient 10s ease infinite",
        }}
      >
        {/* Glitter */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["10%", "25%"],
            ["25%", "70%"],
            ["48%", "15%"],
            ["70%", "78%"],
            ["90%", "35%"],
          ].map(([left, top], i) => (
            <span
              key={`cta-star-${i}`}
              className="absolute text-2xl"
              style={{
                left,
                top,
                color: "#FFD700",
                animation:
                  "approachSparkle 3s ease-in-out infinite",
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
              Revi&apos;s Teaching Approach
            </div>

            <div
              style={{ ...disp, color: "#fff" }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              Discipline today.
              <br />
              Success tomorrow.
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