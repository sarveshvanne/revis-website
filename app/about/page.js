import Image from "next/image";
import { Target, Eye, Heart, Phone, Sparkles, Award, BookOpen, Users } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";

export const metadata = {
  title: "About Us | Revi's Group Tuitions",
  description:
    "Revi's Group Tuitions was established in 2008 by Reshama V. Vanne and Vijay R. Vanne, bringing 20+ years of teaching experience to Khadakpada, Kalyan (West).",
};

export default function AboutPage() {
  return (
    <>
      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>{`
        @keyframes aboutGradient {
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

        @keyframes aboutGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.16;
          }

          50% {
            transform: scale(1.18);
            opacity: 0.32;
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes aboutSparkle {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.6) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.2) rotate(45deg);
          }
        }

        @keyframes aboutShine {
          0% {
            transform: translateX(-150%) rotate(12deg);
            opacity: 0;
          }

          20% {
            opacity: 0.15;
          }

          70% {
            opacity: 0.15;
          }

          100% {
            transform: translateX(150%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes aboutCardIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes goldPulse {
          0%, 100% {
            box-shadow: 0 0 0 rgba(255, 193, 7, 0);
          }

          50% {
            box-shadow: 0 0 30px rgba(255, 193, 7, 0.25);
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
          animation: "aboutGradient 14s ease infinite",
        }}
      >
        {/* Background glows */}
        <div
          className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#FFD700",
            animation: "aboutGlow 7s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#60A5FA",
            animation: "aboutGlow 9s ease-in-out infinite",
          }}
        />

        {/* Glitter */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["7%", "25%", "0s"],
            ["17%", "70%", "1s"],
            ["28%", "15%", "2s"],
            ["42%", "80%", "3s"],
            ["55%", "22%", "1.5s"],
            ["68%", "68%", "4s"],
            ["79%", "18%", "2.5s"],
            ["91%", "55%", "1s"],
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
                animation: "aboutSparkle 3.5s ease-in-out infinite",
                animationDelay: delay,
              }}
            />
          ))}

          {[
            ["12%", "48%", "0s"],
            ["24%", "25%", "1.5s"],
            ["38%", "72%", "2s"],
            ["59%", "15%", "3s"],
            ["73%", "45%", "1s"],
            ["88%", "25%", "2.5s"],
            ["94%", "75%", "4s"],
          ].map(([left, top, delay], i) => (
            <span
              key={`hero-star-${i}`}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: i % 2 === 0 ? "#FFD700" : "#FFF4B0",
                animation: "aboutSparkle 3s ease-in-out infinite",
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
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              animation: "aboutShine 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 text-center">
          <div className="flex justify-center">
            <Ribbon>About Revi&apos;s Group Tuitions</Ribbon>
          </div>

          <h1
            style={{ ...disp, color: "#fff" }}
            className="text-5xl md:text-5xl font-extrabold mt-7 mb-5"
          >
            Building Strong
            <br className="sm:hidden" /> Foundations Since 2008.
          </h1>

          <p className="text-white/100 max-w-2xl mx-auto font-calibri text-base md:text-2xl leading-relaxed">
            - Run by Reshama Teacher &amp; Vijay Sir, right here in
            Khadakpada, Kalyan (W).
          </p>

          {/* Small achievement strip */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-lg font-bold backdrop-blur-sm">
              <Award size={17} color="#FFD700" />
              Since 2008
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-lg font-bold backdrop-blur-sm">
              <BookOpen size={17} color="#FFD700" />
              Std V–X
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-lg font-bold backdrop-blur-sm">
              <Users size={17} color="#FFD700" />
              Small Batches
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #FFFFFF, #EAF8FF, #FFF9DF, #FFFFFF)",
        }}
      >
        {/* Background sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <span
            className="absolute top-20 left-[8%] text-3xl"
            style={{
              color: "#D4A017",
              animation: "aboutSparkle 3s ease-in-out infinite",
            }}
          >
            ✦
          </span>

          <span
            className="absolute bottom-24 right-[8%] text-2xl"
            style={{
              color: "#D4A017",
              animation: "aboutSparkle 3.5s ease-in-out infinite",
            }}
          >
            ✦
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <Eyebrow>Who We Are</Eyebrow>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              20+ years of teaching experience,
              <span style={{ color: C.red }}> with an institute since 2008.</span>
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed text-base md:text-lg">
              Revi&apos;s Group Tuitions was formally established in 2008 by{" "}
              <strong>Reshama V. Vanne</strong> and{" "}
              <strong>Vijay R. Vanne</strong> — known to generations of
              students as Reshama Teacher and Vijay Sir. Our educators had
              already been guiding students for years before the institute
              itself opened its doors.
            </p>

            <p className="text-gray-600 mb-7 leading-relaxed text-base md:text-lg">
              Today, that adds up to over two decades of hands-on classroom
              experience, teaching Std V to X, State Board and CBSE, from the
              same neighbourhood in Khadakpada, Kalyan (West).
            </p>

            {/* Quote */}
            <div
              className="relative p-5 rounded-2xl border-l-4 bg-white shadow-md"
              style={{
                borderColor: C.gold,
                animation: "goldPulse 4s ease-in-out infinite",
              }}
            >
              <Sparkles
                size={20}
                color={C.goldDeep}
                className="absolute top-4 right-4"
              />

              <div
                className="italic text-xl"
                style={{ ...disp, color: C.red }}
              >
                &quot;Namo Budhai, Namo Bhimai&quot;
              </div>

              <div className="text-sm text-gray-500 mt-2">
                A simple belief in learning, discipline and guidance.
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative"
            style={{
              animation: "aboutFloat 6s ease-in-out infinite",
            }}
          >
            <div
              className="absolute -inset-3 rounded-[2rem] blur-xl"
              style={{
                background: "rgba(255,193,7,0.22)",
              }}
            />

            <div
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 bg-white"
              style={{
                borderColor: C.gold,
              }}
            >
              <Image
                src="/images/balloon.jpg"
                alt="Opening day at Revi's Group Tuitions"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />

              {/* Image shine */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)",
                  animation: "aboutShine 7s ease-in-out infinite",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl shadow-xl border-2 bg-white"
              style={{
                borderColor: C.gold,
                animation: "aboutFloat 5s ease-in-out infinite",
              }}
            >
              <div
                className="text-2xl font-extrabold"
                style={{ ...disp, color: C.navy }}
              >
                20+
              </div>

              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Years Experience
              </div>
            </div>

            {/* Floating gold badge */}
            <div
              className="absolute -top-5 -right-5 px-4 py-3 rounded-2xl shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${C.gold}, #FFE58A)`,
                animation: "aboutFloat 4s ease-in-out infinite",
              }}
            >
              <div className="text-xs font-black uppercase tracking-wider text-[#081A38]">
                Since 2008
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION / TRUST
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F7FF, #FFF8D8, #EAF7FF)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "#FFD700",
            opacity: 0.10,
            animation: "aboutGlow 8s ease-in-out infinite",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <Eyebrow>What We Stand For</Eyebrow>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-5xl font-extrabold mt-3"
            >
              Teaching with purpose.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Strong foundations, personal attention and a commitment to
              every student&apos;s progress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                Target,
                "Our Mission",
                "To build strong conceptual foundations in every student — real understanding that lasts beyond Std X.",
              ],
              [
                Eye,
                "Our Vision",
                "To be the most trusted name for Std V–X tuitions in Kalyan, known for teaching quality and results.",
              ],
              [
                Heart,
                "Why Parents Trust Us",
                "Small batches, regular communication, and 20+ years of the same two people overseeing every student's progress.",
              ],
            ].map(([Icon, title, desc], index) => (
              <div
                key={title}
                className="group relative bg-white p-7 md:p-8 rounded-3xl shadow-md border-t-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                style={{
                  borderColor: index === 1 ? C.gold : C.red,
                  animation: "aboutCardIn 0.7s ease-out both",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Gold corner sparkle */}
                <div
                  className="absolute top-4 right-5"
                  style={{
                    color: C.gold,
                    animation: "aboutSparkle 3s ease-in-out infinite",
                  }}
                >
                  ✦
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      index === 1
                        ? "linear-gradient(135deg, #FFF3B0, #FFFBEA)"
                        : C.sky,
                  }}
                >
                  <Icon size={27} color={C.red} />
                </div>

                <div
                  className="font-extrabold text-xl mb-3"
                  style={{ ...disp, color: C.navy }}
                >
                  {title}
                </div>

                <div className="text-base text-gray-600 leading-relaxed">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR JOURNEY
      ========================================================= */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #FFFFFF, #F0FAFF, #FFF9E5, #FFFFFF)",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <Eyebrow>Our Journey</Eyebrow>

            <h2
              style={{ ...disp, color: C.navy }}
              className="text-4xl md:text-5xl font-extrabold mt-3"
            >
              From one classroom to a name
              <br className="hidden md:block" /> Kalyan parents recognise.
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="hidden md:block absolute top-10 left-[8%] right-[8%] h-1 rounded-full"
              style={{
                background:
                  `linear-gradient(90deg, ${C.gold}, ${C.red}, ${C.gold}, ${C.red})`,
                backgroundSize: "200% 100%",
                animation: "aboutGradient 8s linear infinite",
              }}
            />

            <div className="grid md:grid-cols-4 gap-6">
              {[
                [
                  "2008",
                  "Revi's Group Tuitions formally established in Khadakpada, Kalyan (W).",
                ],
                [
                  "Since",
                  "Consistently 100% SSC results, batch after batch.",
                ],
                [
                  "2024-25",
                  "Riddhima Kalmegh tops our batch with 96.20%.",
                ],
                [
                  "Today",
                  "20+ years combined teaching experience, Std V–X.",
                ],
              ].map(([y, t], index) => (
                <div
                  key={y}
                  className="relative group"
                  style={{
                    animation: "aboutCardIn 0.7s ease-out both",
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex justify-center mb-5">
                    <div
                      className="w-6 h-6 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300"
                      style={{
                        backgroundColor: C.gold,
                      }}
                    />
                  </div>

                  <div
                    className="p-6 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    style={{
                      background:
                        `linear-gradient(145deg, ${C.navy}, ${C.navyDeep})`,
                    }}
                  >
                    <div
                      style={{ ...disp, color: C.gold }}
                      className="text-3xl font-extrabold mb-3"
                    >
                      {y}
                    </div>

                    <div className="text-white/85 text-sm md:text-base leading-relaxed">
                      {t}
                    </div>
                  </div>
                </div>
              ))}
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
          animation: "aboutGradient 10s ease infinite",
        }}
      >
        {/* Gold sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            ["10%", "30%"],
            ["25%", "70%"],
            ["48%", "20%"],
            ["70%", "75%"],
            ["90%", "35%"],
          ].map(([left, top], i) => (
            <span
              key={`cta-sparkle-${i}`}
              className="absolute text-4xl"
              style={{
                left,
                top,
                color: "#FFD700",
                animation: "aboutSparkle 2.8s ease-in-out infinite",
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
              className="text-3xl md:text-5xl font-extrabold"
            >
              Meet the team behind
              <br className="hidden md:block" />
              two decades of results.
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