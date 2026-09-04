import { Trophy, Phone } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, Starburst, GradButton } from "@/components/UI";

export const metadata = {
  title: "SSC Board Results | Revi's Group Tuitions",
  description:
    "Real SSC board results from Revi's Group Tuitions, Kalyan (West) — consistently 100% result, year after year.",
};

const groups = [
  {
    year: "2025-26",
    students: [
      ["Veda Gunjal", "94.00%", "Vani School"],
      ["Dhanvi Nair", "93.00%", "Vani School"],
      ["Nishad Kudkar", "92.00%", "Vani School"],
      ["Ayushi Rawat", "92.00%", "DBS School"],
      ["Anushka Devade", "90.00%", "Bhagwan Bhoir School"],
      ["Yati Nikam", "89.00%", "Holy Cross School"],
      ["Rishujit Singh", "88.00%", "1st in Millenium School"],
      ["Arush Gaikwad", "87.20%", "K.C. Gandhi School"],
      ["Bhargav Gawade", "86.22%", "St. Thomas School"],
      ["Vedant Wakchavare", "86.70%", "K.C. Gandhi School"],
      ["Vaishnavi Katti", "85.25%", "Vani School"],
      ["Ayush Shetty", "83.20%", "Vani School"],
    ],
  },

  {
    year: "2024-25",
    students: [
      ["Riddhima Kalmegh", "96.20%", ""],
      ["Shravani Mali", "96.00%", ""],
      ["Apeksha Barvankar", "94.00%", ""],
      ["Sakshi Ingle", "93.00%", ""],
      ["Dhrup Rathod", "93.00%", ""],
      ["Aayush Dharpawar", "92.00%", ""],
      ["Aryan Pandav", "90.00%", ""],
      ["Rohit Choudhari", "90.00%", ""],
      ["Nikunj Kadam", "88.00%", ""],
      ["Mayuri Koli", "88.00%", ""],
      ["Ashwini Shribatho", "87.80%", ""],
      ["Vedant Roy", "86.00%", ""],
    ],
  },

  {
    year: "All-Time Toppers",
    students: [
      ["Shreya Unnithan", "96.00%", "Vani School"],
      ["Asmi Joshi", "95.00%", "K.C. Gandhi School"],
      ["Madhura Gaikwad", "94.60%", "Vani School"],
      ["Nishita Kudkar", "94.00%", "Vani School"],
      ["Himanshu Sangle", "94.00%", "Rita Memorial School"],
      ["Vedika Mahajan", "93.00%", ""],
      ["Tejaswini Thakur", "93.00%", "Holy Cross School"],
      ["Darshana Nair", "93.00%", "Vani School"],
      ["Bhargavi Vichare", "92.20%", "Vani School"],
      ["Arjun Sanap", "92.00%", "Rita Memorial School"],
      ["Shriya Shenoy", "90.00%", "K.C. Gandhi School"],
      ["Arshiya Patrale", "90.00%", "K.C. Gandhi School"],
    ],
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes resultCardIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes resultPercentPulse {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.06);
          }
        }

        @keyframes resultsHeroGradient {
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

        @keyframes glitterFloat {
          0% {
            transform: translateY(20px) scale(0.5);
            opacity: 0;
          }

          20% {
            opacity: 0.8;
          }

          50% {
            transform: translateY(-25px) scale(1);
            opacity: 1;
          }

          80% {
            opacity: 0.7;
          }

          100% {
            transform: translateY(-70px) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes sparkleTwinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.6) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-130%) rotate(12deg);
            opacity: 0;
          }

          25% {
            opacity: 0.18;
          }

          70% {
            opacity: 0.18;
          }

          100% {
            transform: translateX(130%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.20;
            transform: scale(1);
          }

          50% {
            opacity: 0.45;
            transform: scale(1.1);
          }
        }

        @keyframes resultBarIn {
          from {
            width: 0%;
          }

          to {
            width: var(--result-width);
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
            `linear-gradient(135deg, #0D2B57, #173F70, #765600, #D4A017, #0D2B57)`,
          backgroundSize: "400% 400%",
          animation: "resultsHeroGradient 12s ease infinite",
        }}
      >
        {/* Gold glow */}
        <div
          className="absolute -top-32 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD400",
            opacity: 0.14,
            animation: "glowPulse 5s ease-in-out infinite",
          }}
        />

        {/* Blue glow */}
        <div
          className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#4DA3FF",
            opacity: 0.18,
            animation: "glowPulse 5s ease-in-out infinite",
          }}
        />

        {/* HERO GLITTER */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {[
            ["8%", "25%", "0s"],
            ["18%", "70%", "1.5s"],
            ["30%", "15%", "3s"],
            ["42%", "82%", "4s"],
            ["55%", "22%", "2s"],
            ["67%", "72%", "5s"],
            ["78%", "18%", "3.5s"],
            ["90%", "58%", "1s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-glitter-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left,
                top,
                background:
                  i % 2 === 0 ? "#FFD700" : "#FFF4B0",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 16px #FFD700"
                    : "0 0 14px #FFF4B0",
                animation:
                  "glitterFloat 5s ease-in-out infinite",
                animationDelay: delay,
              }}
            />
          ))}

          {[
            ["12%", "52%", "0s"],
            ["25%", "30%", "2s"],
            ["38%", "75%", "3.5s"],
            ["60%", "12%", "1s"],
            ["73%", "45%", "2.5s"],
            ["88%", "28%", "4s"],
            ["94%", "78%", "1.5s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-sparkle-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color:
                  i % 2 === 0 ? "#FFD700" : "#FFF4B0",
                animation:
                  "sparkleTwinkle 2.8s ease-in-out infinite",
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
              animation:
                "lightSweep 9s ease-in-out infinite",
            }}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:py-20 text-center">

          {/* Badge */}
          <div className="flex justify-center">
            <Starburst color={C.purple}>
              Consistently
              <br />
              100% Result
            </Starburst>
          </div>

          {/* Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-7 mb-5">

            <Trophy
              size={54}
              strokeWidth={2.5}
              color="#FFD700"
            />

            <h1
              style={{
                ...disp,
                color: "#ffffff",
              }}
              className="text-5xl md:text-6xl font-extrabold"
            >
              SSC Board Results.
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/100 max-w-5x1 mx-auto font-calibri text-xl md:text-xxl leading-relaxed">
            Real students, real percentages, year after year —
            remaining students score above 80%.
          </p>
        </div>
      </section>

      {/* =========================================================
          RESULT GROUPS
      ========================================================= */}
      {groups.map(({ year, students }, si) => (
        <section
          key={year}
          className="relative overflow-hidden py-14 md:py-16"
          style={{
            background:
              si % 2 === 0
                ? "linear-gradient(135deg, #E8F7FF, #FFF8D8, #F8FDFF, #EAF6FF)"
                : "linear-gradient(135deg, #FFFFFF, #FFFBEA, #EAF8FF, #FFFFFF)",
          }}
        >
          {/* =====================================================
              BACKGROUND EFFECTS
          ===================================================== */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* Soft blue glow */}
            <div
              className="absolute w-96 h-96 rounded-full blur-3xl"
              style={{
                background: "#60A5FA",
                opacity: 0.10,
                top: "0%",
                left: "-10%",
                animation:
                  "glowPulse 8s ease-in-out infinite",
              }}
            />

            {/* Soft gold glow */}
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl"
              style={{
                background: "#FFD700",
                opacity: 0.10,
                bottom: "0%",
                right: "-7%",
                animation:
                  "glowPulse 7s ease-in-out infinite",
              }}
            />

            {/* GOLD GLITTER */}
            {[
              ["6%", "20%", "0s"],
              ["15%", "70%", "1.2s"],
              ["28%", "12%", "2.5s"],
              ["40%", "85%", "4s"],
              ["52%", "25%", "1.8s"],
              ["65%", "72%", "3.2s"],
              ["78%", "15%", "5s"],
              ["90%", "58%", "2.2s"],
            ].map(([left, top, delay], i) => (
              <span
                key={`section-glitter-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left,
                  top,
                  background:
                    i % 2 === 0
                      ? "#FFD700"
                      : "#FFF4B0",
                  boxShadow:
                    i % 2 === 0
                      ? "0 0 14px #FFD700"
                      : "0 0 12px #FFF4B0",
                  animation:
                    "glitterFloat 5.5s ease-in-out infinite",
                  animationDelay: delay,
                }}
              />
            ))}

            {/* Sparkles */}
            {[
              ["12%", "42%", "0s"],
              ["35%", "78%", "2s"],
              ["57%", "10%", "1s"],
              ["80%", "38%", "3s"],
              ["93%", "80%", "1.5s"],
            ].map(([left, top, delay], i) => (
              <span
                key={`section-sparkle-${i}`}
                className="absolute text-lg"
                style={{
                  left,
                  top,
                  color: "#D4A017",
                  animation:
                    "sparkleTwinkle 3s ease-in-out infinite",
                  animationDelay: delay,
                }}
              >
                ✦
              </span>
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-6xl mx-auto px-5">

            {/* YEAR HEADING */}
            <div className="flex items-center gap-4 mb-8">
              <Trophy
                size={34}
                strokeWidth={2.3}
                color={C.red}
              />

              <h2
                style={{
                  ...disp,
                  color: C.navy,
                }}
                className="text-3xl md:text-4xl font-extrabold"
              >
                {year}
              </h2>
            </div>

            {/* STUDENT CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {students.map(
                ([name, pct, school], index) => {

                  const percentage = parseFloat(pct);

                  const isTopper =
                    percentage >= 90 ||
                    school
                      .toLowerCase()
                      .includes("1st");

                  return (
                    <div
                      key={name}
                      className={`
                        bg-white
                        p-5
                        rounded-2xl
                        border-l-4
                        hover:shadow-2xl
                        hover:-translate-y-2
                        transition-all
                        duration-300
                        ${
                          isTopper
                            ? "shadow-lg ring-2 ring-yellow-300"
                            : "shadow-md"
                        }
                      `}
                      style={{
                        borderColor: C.gold,
                        animation:
                          "resultCardIn 0.6s ease-out both",
                        animationDelay:
                          `${index * 0.1}s`,
                      }}
                    >

                      {/* STUDENT NAME */}
                      <div
                        className="font-extrabold text-xl mb-2"
                        style={{
                          ...disp,
                          color: C.navy,
                        }}
                      >
                        {name}
                      </div>

                      {/* PERCENTAGE */}
                      <div
                        className="text-4xl font-extrabold mb-2"
                        style={{
                          color: C.red,
                          animation:
                            "resultPercentPulse 1.8s ease-in-out infinite",
                        }}
                      >
                        {pct}
                      </div>

                      {/* SCHOOL */}
                      {school && (
                        <div className="text-xl text-gray-500">
                          {school}
                        </div>
                      )}

                      {/* ACHIEVEMENT BAR */}
                      <div className="mt-4">
                        <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width:
                                `${Math.min(
                                  percentage,
                                  100
                                )}%`,
                              "--result-width":
                                `${Math.min(
                                  percentage,
                                  100
                                )}%`,
                              background:
                                `linear-gradient(90deg, #FFD700, ${C.red})`,
                              animation:
                                "resultBarIn 1.2s ease-out both",
                              animationDelay:
                                `${index * 0.1 + 0.2}s`,
                            }}
                          />
                        </div>
                      </div>

                      {/* STAR PERFORMER */}
                      {isTopper && (
                        <div
                          className="mt-3 text-xs font-extrabold uppercase tracking-wider"
                          style={{
                            color: "#B8860B",
                          }}
                        >
                          ★ Star Performer
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      ))}

      {/* =========================================================
          RECORD NOTE
      ========================================================= */}
      <section
        className="relative overflow-hidden py-10"
        style={{
          background:
            `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div className="relative z-15 max-w-7xl mx-auto px-4 text-center text-white/100 text-xl md:text-4xl font-calibri">
          Remaining all students in every batch scored above 80%.
          Full topper records are displayed at our GALLERY SECTION.
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        className="relative overflow-hidden py-14"
        style={{
          background:
            `linear-gradient(135deg, ${C.red}, ${C.redDeep})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div
            style={{
              ...disp,
              color: "#ffffff",
            }}
            className="text-2xl md:text-3xl font-extrabold text-center lg:text-left"
          >
            Your child could be on this list next year.
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