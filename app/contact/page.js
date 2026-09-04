import {
  MapPin,
  Phone,
  Clock,
  Youtube,
  Instagram,
  Facebook,
  Star,
  MessageCircle,
  Navigation,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

export const metadata = {
  title: "Contact Us | Revi's Group Tuitions",
  description:
    "Contact Revi's Group Tuitions — Shop No. 6/8, Sai Sankul Phase 1, Khadakpada, Kalyan (West). Call 93210 16779 / 98336 61297.",
};

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Our Centre",
    text: "Shop No. 6/8, Sai Sankul Phase 1, Nr. Sai Sagar Hotel, Sai Chowk, Khadakpada, Kalyan (W) - 421301",
    accent: C.red,
  },
  {
    icon: Phone,
    title: "Speak With Us",
    text: "93210 16779 (Reshama V. Vanne) / 98336 61297 (Vijay R. Vanne)",
    accent: C.gold,
  },
  {
    icon: Clock,
    title: "Batch Timings",
    text: "Batches run in the afternoon/evening — timings are adjusted to school hours. Call to confirm your child's slot.",
    accent: C.purple,
  },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        @keyframes contactHeroMove {
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

        @keyframes contactGlow {
          0%,
          100% {
            opacity: 0.22;
            transform: scale(1);
          }

          50% {
            opacity: 0.48;
            transform: scale(1.08);
          }
        }

        @keyframes contactFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes contactCardIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactSparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.2);
          }
        }

        @keyframes contactShine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        .contact-card {
          animation: contactCardIn 0.7s ease both;
        }

        .contact-card:nth-child(2) {
          animation-delay: 0.12s;
        }

        .contact-card:nth-child(3) {
          animation-delay: 0.24s;
        }

        .contact-sparkle {
          animation: contactSparkle 3s ease-in-out infinite;
        }

        .contact-float {
          animation: contactFloat 4s ease-in-out infinite;
        }

        .contact-shine {
          position: absolute;
          inset: 0;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );
          transform: translateX(-120%);
          animation: contactShine 6s ease-in-out infinite;
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
          animation: "contactHeroMove 12s ease infinite",
        }}
      >
        {/* Soft golden glow */}
        <div
          className="absolute -top-24 left-[12%] w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor: C.gold,
            animation: "contactGlow 6s ease-in-out infinite",
          }}
        />

        {/* Purple glow */}
        <div
          className="absolute -bottom-32 right-[8%] w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: C.purple,
            animation: "contactGlow 8s ease-in-out infinite",
          }}
        />

        {/* Small premium sparkles */}
        <Sparkles
          className="contact-sparkle absolute top-16 left-[18%]"
          size={17}
          color={C.gold}
        />

        <Sparkles
          className="contact-sparkle absolute top-28 right-[20%]"
          size={13}
          color="#ffffff"
          style={{
            animationDelay: "1s",
          }}
        />

        <Sparkles
          className="contact-sparkle absolute bottom-12 left-[30%]"
          size={12}
          color={C.gold}
          style={{
            animationDelay: "2s",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-20 text-center">
          <Ribbon>Contact Revi&apos;s</Ribbon>

          <h1
            style={{
              ...disp,
              color: "#fff",
            }}
            className="text-4xl md:text-6xl font-extrabold mt-6 mb-5 leading-tight"
          >
            Let&apos;s Talk About
            <span
              className="block"
              style={{
                color: C.gold,
                textShadow: "0 0 25px rgba(255,193,7,.25)",
              }}
            >
              Your Child&apos;s Future.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
            Have a question about admissions, batches or subjects?
            Speak directly with Revi&apos;s Group Tuitions and get the
            information you need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GradButton
              href="tel:9321016779"
              icon={Phone}
              variant="red"
            >
              Call Reshama Teacher
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
          MAIN CONTACT AREA
      ========================================================= */}

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background: `
            radial-gradient(
              circle at 10% 20%,
              rgba(255,193,7,.10),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(123,31,162,.08),
              transparent 30%
            ),
            ${C.sky}
          `,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-16 right-10 w-24 h-24 rounded-full border-2 opacity-30"
          style={{
            borderColor: C.gold,
          }}
        />

        <div
          className="absolute bottom-20 left-8 w-16 h-16 rounded-full border opacity-30"
          style={{
            borderColor: C.red,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-10 items-stretch">

            {/* =====================================================
                MAP
            ===================================================== */}

            <div className="relative group">
              <div
                className="absolute -inset-2 rounded-[2rem] blur-xl opacity-30"
                style={{
                  backgroundColor: C.gold,
                }}
              />

              <div
                className="relative h-full min-h-[430px] rounded-[2rem] overflow-hidden shadow-2xl border-4 bg-white"
                style={{
                  borderColor: C.gold,
                }}
              >
                <iframe
                  title="Revi's Group Tuitions Location"
                  width="100%"
                  height="100%"
                  style={{
                    minHeight: 430,
                    border: 0,
                  }}
                  loading="lazy"
                  src="https://www.google.com/maps?q=Sai+Sankul+Phase+1,+Sai+Chowk,+Khadakpada,+Kalyan+West&output=embed"
                />

                {/* Map label */}
                <div className="absolute left-5 top-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border"
                    style={{
                      borderColor: `${C.gold}88`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: C.red,
                        }}
                      >
                        <MapPin size={18} color="#fff" />
                      </div>

                      <div>
                        <div
                          className="font-extrabold text-sm"
                          style={{
                            color: C.navy,
                          }}
                        >
                          Revi&apos;s Group Tuitions
                        </div>

                        <div className="text-xs text-gray-500">
                          Khadakpada, Kalyan West
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sai+Sankul+Phase+1,+Sai+Chowk,+Khadakpada,+Kalyan+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full px-5 py-3 font-extrabold text-sm shadow-xl hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: C.navyDeep,
                    color: "#fff",
                  }}
                >
                  <Navigation size={17} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}

            <div className="flex flex-col justify-center">
              <div className="mb-7">
                <div
                  className="text-xs font-black uppercase tracking-[0.25em] mb-2"
                  style={{
                    color: C.red,
                  }}
                >
                  Reach Us
                </div>

                <h2
                  style={{
                    ...disp,
                    color: C.navy,
                  }}
                  className="text-3xl md:text-4xl font-extrabold leading-tight"
                >
                  We&apos;re here when
                  <span
                    style={{
                      color: C.red,
                    }}
                  >
                    {" "}
                    you need us.
                  </span>
                </h2>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Whether you are a new parent exploring tuition options
                  or an existing student who needs help, feel free to
                  contact us.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map(
                  ({ icon: Icon, title, text, accent }) => (
                    <div
                      key={title}
                      className="contact-card group relative overflow-hidden bg-white rounded-3xl p-5 md:p-6 shadow-lg border border-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="contact-shine" />

                      <div className="relative flex gap-4 items-start">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: `${accent}18`,
                          }}
                        >
                          <Icon
                            size={22}
                            color={accent}
                          />
                        </div>

                        <div>
                          <div
                            style={{
                              ...disp,
                              color: C.navy,
                            }}
                            className="font-extrabold text-lg mb-1"
                          >
                            {title}
                          </div>

                          <div className="text-sm text-gray-600 leading-relaxed">
                            {text}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Call buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
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
                  WhatsApp
                </GradButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL / CONNECT
      ========================================================= */}

      <section
        className="relative overflow-hidden py-14 md:py-16"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(
              90deg,
              ${C.red},
              ${C.gold},
              ${C.purple},
              ${C.red}
            )`,
          }}
        />

        <div className="max-w-5xl mx-auto px-5 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: `${C.gold}18`,
              color: C.goldDeep,
            }}
          >
            <Sparkles size={16} />

            <span className="text-xs font-black uppercase tracking-widest">
              Stay Connected
            </span>
          </div>

          <h2
            style={{
              ...disp,
              color: C.navy,
            }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Follow Revi&apos;s journey.
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Keep up with our students, achievements, activities and
            updates from Revi&apos;s Group Tuitions.
          </p>

          <div className="flex justify-center gap-4 mt-7 flex-wrap">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@revisgrouptuitions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="contact-float w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              style={{
                backgroundColor: C.red,
              }}
            >
              <Youtube size={24} color="#fff" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/revisgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="contact-float w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              style={{
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                animationDelay: "0.5s",
              }}
            >
              <Instagram size={24} color="#fff" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/revisgroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="contact-float w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              style={{
                backgroundColor: "#1877F2",
                animationDelay: "1s",
              }}
            >
              <Facebook size={24} color="#fff" />
            </a>

            {/* Google */}
            <a
              href="https://www.google.com/search?q=revisgrouptuition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Reviews"
              className="contact-float w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              style={{
                backgroundColor: C.gold,
                animationDelay: "1.5s",
              }}
            >
              <Star
                size={24}
                color={C.navyDeep}
              />
            </a>
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
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30"
          style={{
            backgroundColor: C.gold,
          }}
        />

        <Sparkles
          className="contact-sparkle absolute top-8 left-[15%]"
          size={18}
          color={C.gold}
        />

        <Sparkles
          className="contact-sparkle absolute bottom-8 right-[20%]"
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
                  Admissions &amp; Enquiries
                </span>
              </div>

              <div
                style={{
                  ...disp,
                  color: "#fff",
                }}
                className="text-3xl md:text-4xl font-extrabold"
              >
                Ready to speak with us?
              </div>

              <p className="text-white/75 mt-2">
                One conversation can be the first step towards
                stronger academic confidence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <GradButton
                href="tel:9321016779"
                icon={Phone}
                variant="white"
              >
                93210 16779
              </GradButton>

              <a
                href="/admissions"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-extrabold shadow-lg hover:scale-105 transition-transform"
                style={{
                  backgroundColor: C.gold,
                  color: C.navyDeep,
                }}
              >
                Admissions
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}