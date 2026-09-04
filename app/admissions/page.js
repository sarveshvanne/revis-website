import {
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Users,
  BookOpen,
  Trophy,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Admissions Open | Revi's Group Tuitions",
  description:
    "Admissions open for Std V to X at Revi's Group Tuitions, Kalyan (West). State Board & CBSE. Limited seats. Call 93210 16779.",
};

const benefits = [
  {
    icon: BookOpen,
    title: "Complete Curriculum",
    text: "State Board & CBSE curriculum covered systematically.",
    accent: C.red,
  },
  {
    icon: Users,
    title: "Small Batches",
    text: "15–20 students per batch for better attention.",
    accent: C.gold,
  },
  {
    icon: Trophy,
    title: "Proven Results",
    text: "Strong academic performance and consistent results.",
    accent: C.purple,
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2008",
    text: "Experienced teaching with regular parent interaction.",
    accent: C.navy,
  },
];

const included = [
  "State Board & CBSE curriculum",
  "Std V to X, all subjects under one roof",
  "Small batches (15–20 students)",
  "Experienced faculty since 2008",
  "Regular oral & written tests",
  "A/c classrooms",
  "Career guidance",
  "Regular parent interaction",
];

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        @keyframes admissionHeroMove {
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

        @keyframes admissionGlow {
          0%,
          100% {
            opacity: .20;
            transform: scale(1);
          }

          50% {
            opacity: .48;
            transform: scale(1.08);
          }
        }

        @keyframes admissionSparkle {
          0%,
          100% {
            opacity: .2;
            transform: scale(.75);
          }

          50% {
            opacity: .95;
            transform: scale(1.18);
          }
        }

        @keyframes admissionCard {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes admissionFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes admissionShine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        .admission-sparkle {
          animation: admissionSparkle 3s ease-in-out infinite;
        }

        .admission-card {
          animation: admissionCard .7s ease both;
        }

        .admission-card:nth-child(2) {
          animation-delay: .1s;
        }

        .admission-card:nth-child(3) {
          animation-delay: .2s;
        }

        .admission-card:nth-child(4) {
          animation-delay: .3s;
        }

        .admission-float {
          animation: admissionFloat 4s ease-in-out infinite;
        }

        .admission-shine {
          position: absolute;
          inset: 0;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.24),
            transparent
          );
          transform: translateX(-120%);
          animation: admissionShine 6s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(
            135deg,
            ${C.navyDeep},
            ${C.navy},
            #164A7A,
            ${C.navyDeep}
          )`,
          backgroundSize: "300% 300%",
          animation: "admissionHeroMove 12s ease infinite",
        }}
      >
        {/* Golden glow */}
        <div
          className="absolute -top-28 left-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{
            backgroundColor: C.gold,
            animation: "admissionGlow 7s ease-in-out infinite",
          }}
        />

        {/* Purple glow */}
        <div
          className="absolute -bottom-36 right-[5%] w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{
            backgroundColor: C.purple,
            animation: "admissionGlow 9s ease-in-out infinite",
          }}
        />

        {/* Subtle sparkles */}
        <Sparkles
          className="admission-sparkle absolute top-16 left-[17%]"
          size={18}
          color={C.gold}
        />

        <Sparkles
          className="admission-sparkle absolute top-28 right-[18%]"
          size={14}
          color="#fff"
          style={{ animationDelay: "1s" }}
        />

        <Sparkles
          className="admission-sparkle absolute bottom-14 left-[28%]"
          size={12}
          color={C.gold}
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-20 text-center">
          <Ribbon>Admissions Open</Ribbon>

          <h1
            style={{
              ...disp,
              color: "#fff",
            }}
            className="text-4xl md:text-6xl font-extrabold mt-6 mb-5 leading-tight"
          >
            Give Your Child
            <span
              className="block"
              style={{
                color: C.gold,
                textShadow: "0 0 28px rgba(255,193,7,.28)",
              }}
            >
              The Right Foundation.
            </span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Std V to X · State Board &amp; CBSE · All Subjects
            <br className="hidden sm:block" />
            Small batches designed for focused learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GradButton
              href="tel:9321016779"
              icon={Phone}
              variant="red"
            >
              Call Now
            </GradButton>

            <GradButton
              href="https://wa.me/919321016779"
              icon={MessageCircle}
              variant="gold"
              external
            >
              WhatsApp Us
            </GradButton>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70 text-xl md:text-xl font-semibold">
            <span>✓ Since 2008</span>
            <span>✓ Small Batches</span>
            <span>✓ Regular Testing</span>
            <span>✓ Parent Interaction</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIAL OFFER
      ========================================================= */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(
            90deg,
            ${C.goldDeep},
            ${C.gold},
            #FFD54F,
            ${C.gold}
          )`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <Sparkles
            size={40}
            color={C.navyDeep}
            className="admission-sparkle"
          />

          <span
            style={{
              color: C.navyDeep,
            }}
            className="font-extrabold text-sm md:text-base"
          >
            Special Offer: Discount on Group of 3 Admissions —
            Enroll Together, Save Together
          </span>

          <Sparkles
            size={19}
            color={C.navyDeep}
            className="admission-sparkle"
            style={{
              animationDelay: ".8s",
            }}
          />
        </div>
      </section>

      {/* =========================================================
          WHY JOIN / BENEFITS
      ========================================================= */}

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background: `
            radial-gradient(
              circle at 5% 15%,
              rgba(255,193,7,.10),
              transparent 25%
            ),
            radial-gradient(
              circle at 95% 80%,
              rgba(123,31,162,.08),
              transparent 28%
            ),
            ${C.sky}
          `,
        }}
      >
        <div
          className="absolute top-16 right-8 w-24 h-24 rounded-full border-2 opacity-25"
          style={{
            borderColor: C.gold,
          }}
        />

        <div
          className="absolute bottom-20 left-8 w-16 h-16 rounded-full border opacity-25"
          style={{
            borderColor: C.red,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow>Why Families Choose Revi&apos;s</Eyebrow>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-3xl md:text-4xl font-extrabold mt-2"
            >
              More than tuition.
              <span
                className="block"
                style={{
                  color: C.red,
                }}
              >
                A stronger academic journey.
              </span>
            </h2>

            <p className="text-gray-600 mt-3 leading-relaxed">
              A focused environment where students receive guidance,
              practice and personal attention throughout the academic year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(
              ({ icon: Icon, title, text, accent }) => (
                <div
                  key={title}
                  className="admission-card group relative overflow-hidden bg-white rounded-3xl p-6 shadow-lg border border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="admission-shine" />

                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `${accent}18`,
                      }}
                    >
                      <Icon
                        size={25}
                        color={accent}
                      />
                    </div>

                    <h3
                      style={{
                        ...disp,
                        color: C.navy,
                      }}
                      className="font-extrabold text-lg mb-2"
                    >
                      {title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU GET + ENQUIRY FORM
      ========================================================= */}

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-start">

            {/* LEFT */}
            <div>
              <Eyebrow>What You Get</Eyebrow>

              <h2
                style={{
                  ...disp,
                  color: C.navy,
                }}
                className="text-3xl md:text-4xl font-extrabold mb-4"
              >
                Everything included,
                <span
                  className="block"
                  style={{
                    color: C.red,
                  }}
                >
                  nothing hidden.
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-7">
                From classroom learning to regular testing and parent
                interaction, the aim is to give every student a structured
                and supportive academic experience.
              </p>

              <div className="space-y-3">
                {included.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:-translate-x-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? `${C.red}12`
                            : `${C.gold}25`,
                      }}
                    >
                      <CheckCircle2
                        size={19}
                        color={
                          index % 2 === 0
                            ? C.red
                            : C.goldDeep
                        }
                      />
                    </div>

                    <span className="text-sm md:text-base font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small trust panel */}
              <div
                className="relative overflow-hidden mt-7 rounded-3xl p-5 shadow-lg"
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${C.navy},
                    ${C.navyDeep}
                  )`,
                }}
              >
                <Sparkles
                  className="admission-sparkle absolute top-4 right-5"
                  size={16}
                  color={C.gold}
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className="admission-float w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: C.gold,
                    }}
                  >
                    <Trophy
                      size={24}
                      color={C.navyDeep}
                    />
                  </div>

                  <div>
                    <div className="text-white font-extrabold">
                      Focused on stronger results
                    </div>

                    <div className="text-white/65 text-sm mt-1">
                      Consistent practice, guidance and support.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — EXISTING FORM */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] blur-xl opacity-20"
                style={{
                  backgroundColor: C.gold,
                }}
              />

              <div className="relative">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO ENQUIRE
      ========================================================= */}

      <section
        className="relative overflow-hidden py-14 md:py-16"
        style={{
          background: `
            radial-gradient(
              circle at 20% 20%,
              rgba(255,193,7,.10),
              transparent 30%
            ),
            ${C.skyDeep}
          `,
        }}
      >
        <div className="max-w-5xl mx-auto px-5 text-center">
          <Eyebrow>Simple Next Step</Eyebrow>

          <h2
            style={{
              ...disp,
              color: C.navy,
            }}
            className="text-3xl md:text-4xl font-extrabold mt-2"
          >
            Ready to know more?
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Call us or send a WhatsApp message to ask about available
            batches, subjects and admission details.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <GradButton
              href="tel:9321016779"
              icon={Phone}
              variant="red"
            >
              93210 16779
            </GradButton>

            <GradButton
              href="https://wa.me/919321016779"
              icon={MessageCircle}
              variant="gold"
              external
            >
              WhatsApp Us
            </GradButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(
            120deg,
            ${C.redDeep},
            ${C.red},
            #C51610
          )`,
        }}
      >
        <div
          className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-3xl opacity-25"
          style={{
            backgroundColor: C.gold,
          }}
        />

        <Sparkles
          className="admission-sparkle absolute top-8 left-[15%]"
          size={18}
          color={C.gold}
        />

        <Sparkles
          className="admission-sparkle absolute bottom-8 right-[20%]"
          size={14}
          color="#fff"
          style={{
            animationDelay: "1.5s",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 py-14 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-7">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Sparkles
                  size={18}
                  color={C.gold}
                />

                <span className="text-xs font-black uppercase tracking-[0.25em] text-white/80">
                  Admissions Open
                </span>
              </div>

              <h2
                style={{
                  ...disp,
                  color: "#fff",
                }}
                className="text-3xl md:text-4xl font-extrabold"
              >
                Give your child
                <span
                  className="block"
                  style={{
                    color: C.gold,
                  }}
                >
                  a confident start.
                </span>
              </h2>

              <p className="text-white/75 mt-2">
                Std V to X · State Board &amp; CBSE · Limited seats.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <GradButton
                href="tel:9321016779"
                icon={Phone}
                variant="white"
              >
                Call Now
              </GradButton>

              <a
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-extrabold shadow-lg hover:scale-105 transition-transform"
                style={{
                  backgroundColor: C.gold,
                  color: C.navyDeep,
                }}
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}