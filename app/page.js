"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Users,
  BookOpen,
  ClipboardCheck,
  Award,
  Star,
  ChevronRight,
  CheckCircle2,
  Youtube,
  Instagram,
  Facebook,
  PlayCircle,
  Compass,
  Trophy,
  Phone,
  MessageCircle,
  MapPin,
  X,
  Sparkles,
  Heart,
  GraduationCap,
} from "lucide-react";

import { C, disp, classes } from "@/lib/theme";

import {
  Ribbon,
  Starburst,
  Eyebrow,
  GradButton,
} from "@/components/UI";

/* =========================================================
   SSC TOPPERS
   ========================================================= */

const toppers = [
  {
    name: "Riddhima Kalmegh",
    pct: "96.20%",
    year: "2024-25",
    image: "/images/students/riddhima_kalmegh.jpg",
  },
  {
    name: "Shreya Unnithan",
    pct: "96.00%",
    year: "2024-25",
    image: "/images/students/Shreya_unnithan.jpg",
  },
  {
    name: "Shravani Mali",
    pct: "96.00%",
    year: "2024-25",
    image: "/images/students/shravani_mali.jpg",
  },
  {
    name: "Asmi Joshi",
    pct: "95.00%",
    year: "2024-25",
    image: "/images/students/asmi_joshi.jpg",
  },
  {
    name: "Madhura Gaikwad",
    pct: "94.60%",
    year: "2024-25",
    image: "/images/students/madhura_gaikwad.jpg",
  },
  {
    name: "Veda Gunjal",
    pct: "94.00%",
    year: "2025-26",
    image: "/images/students/veda_gunjal.jpg",
  },
  {
    name: "Apeksha Barvankar",
    pct: "94.00%",
    year: "2024-25",
    image: "/images/students/apeksha_barvankar.jpg",
  },
  {
    name: "Himanshu Sangle",
    pct: "94.00%",
    year: "2024-25",
    image: "/images/students/himanshu_sangle.jpg",
  },
];

/* =========================================================
   FEATURES
   ========================================================= */

const features = [
  {
    icon: Users,
    title: "Limited Students Per Batch",
    desc: "15-20 per batch, so attention is never divided too thin.",
  },
  {
    icon: BookOpen,
    title: "All Subjects Under One Roof",
    desc: "Science, Maths, English, SST, Hindi & more.",
  },
  {
    icon: Award,
    title: "20+ Years Teaching Experience",
    desc: "Established in 2008, with experienced faculty.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Oral & Written Tests",
    desc: "Consistent checkpoints, not exam-time cramming.",
  },
  {
    icon: CheckCircle2,
    title: "Syllabus Before Time",
    desc: "Full room left for revision, not a last-minute rush.",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    desc: "Direction for what comes after Std X, not just marks.",
  },
];

/* =========================================================
   VISIT PHOTOS
   ========================================================= */

const visitPhotos = [
  {
    src: "/images/bag.jpg",
    alt: "Revi's Group Tuitions school bag",
  },
  {
    src: "/images/gallery/bag_2.jpg",
    alt: "Revi's Group Tuitions branded school bag",
  },
  {
    src: "/images/gallery/revis.jpg",
    alt: "Revi's Group Tuitions",
  },
  {
    src: "/images/gallery/revis_card.jpg",
    alt: "Revi's Group Tuitions identity card",
  },
];

/* =========================================================
   JOURNEY PHOTOS
   ========================================================= */

const journeyPhotos = [
  {
    src: "/images/gallery/teacher&students.jpg",
    title: "Learning Together",
    text: "Every student deserves attention, encouragement and the confidence to ask questions.",
  },
  {
    src: "/images/gallery/teaching.jpg",
    title: "Teaching With Purpose",
    text: "Concepts first. Practice next. Confidence follows.",
  },
  {
    src: "/images/gallery/teacher&students (2).jpg",
    title: "A Supportive Environment",
    text: "A classroom where students can learn, participate and grow.",
  },
];

/* =========================================================
   VIDEOS
   ========================================================= */

const videos = [
  {
    src: "/images/gallery/17 years of success.mp4",
    title: "17 Years of Success",
    text: "A glimpse into the journey of Revi's Group Tuitions.",
  },
  {
    src: "/images/gallery/activity.mp4",
    title: "Student Activities",
    text: "Learning is more than textbooks and examinations.",
  },
  {
    src: "/images/gallery/flute_cmpetition.mp4",
    title: "Student Activity",
    text: "Encouraging students beyond academics.",
  },
];

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showAdmissionVideo, setShowAdmissionVideo] = useState(false);
  return (
    <>
      {/* =====================================================
          GLOBAL ANIMATION STYLES
      ===================================================== */}

      <style jsx global>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatReverse {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(12px) rotate(4deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.16;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.25;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .revi-float {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .revi-float-reverse {
          animation: floatReverse 6s ease-in-out infinite;
        }

        .revi-sparkle {
          animation: sparkle 2.5s ease-in-out infinite;
        }

        .revi-pulse {
          animation: softPulse 2s ease-in-out infinite;
        }

        .revi-slide {
          animation: slideUp 0.8s ease-out both;
        }

        .story-photo {
          transition:
            transform 0.6s ease,
            opacity 0.6s ease;
        }

        .story-photo:hover {
          transform: scale(1.04);
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

     <section
  className="relative overflow-hidden"
  style={{
    background: `
      radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.35), transparent 35%),
      radial-gradient(circle at 85% 25%, rgba(124, 58, 237, 0.28), transparent 35%),
      radial-gradient(circle at 50% 90%, rgba(250, 180, 0, 0.12), transparent 35%),
      linear-gradient(135deg, #061B3A 0%, #0A2854 45%, #07152F 100%)
    `,
  }}
>

{/* ================= ANIMATED HERO BACKGROUND ================= */}

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

  {/* Main blue atmospheric glow */}
  <div
    className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full blur-[120px] opacity-40 animate-pulse"
    style={{ backgroundColor: "#2563EB" }}
  />

  {/* Purple glow */}
  <div
    className="absolute top-[35%] -left-48 w-[500px] h-[500px] rounded-full blur-[130px] opacity-25 animate-pulse"
    style={{ backgroundColor: "#7C3AED" }}
  />

  {/* Golden glow behind admission card */}
  <div
    className="absolute top-[25%] right-[12%] w-[420px] h-[420px] rounded-full blur-[110px] opacity-20 animate-pulse"
    style={{ backgroundColor: C.gold }}
  />

  {/* Large rotating orbit */}
  <div
    className="absolute top-[18%] right-[5%] w-[600px] h-[600px] rounded-full border border-blue-400/10 animate-[spin_30s_linear_infinite]"
  />

  {/* Second orbit */}
  <div
    className="absolute top-[23%] right-[8%] w-[500px] h-[500px] rounded-full border border-yellow-400/10 animate-[spin_22s_linear_infinite_reverse]"
  />

  {/* Third orbit */}
  <div
    className="absolute top-[29%] right-[11%] w-[400px] h-[400px] rounded-full border border-purple-400/10 animate-[spin_16s_linear_infinite]"
  />

  {/* Floating light 1 */}
  <div
    className="absolute top-[18%] left-[8%] w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(250,204,21,0.5)] animate-bounce"
  />

  {/* Floating light 2 */}
  <div
    className="absolute top-[32%] left-[48%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_18px_5px_rgba(96,165,250,0.5)] animate-pulse"
  />

  {/* Floating light 3 */}
  <div
    className="absolute top-[12%] right-[28%] w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_20px_6px_rgba(192,132,252,0.5)] animate-pulse"
  />

  {/* Floating light 4 */}
  <div
    className="absolute bottom-[22%] left-[35%] w-1.5 h-1.5 rounded-full bg-red-300 shadow-[0_0_18px_5px_rgba(250,204,21,0.5)] animate-bounce"
  />

  {/* Tiny stars */}
  <div className="absolute top-[20%] left-[42%] text-yellow-300 text-xl animate-pulse">
    ✦
  </div>

  <div className="absolute top-[65%] right-[42%] text-blue-300 text-lg animate-pulse">
    ✦
  </div>

  <div className="absolute top-[10%] right-[8%] text-yellow-300 text-2xl animate-spin">
    ✧
  </div>

  {/* Subtle dot pattern */}
  <div
    className="absolute top-0 right-0 w-[280px] h-[280px] opacity-[0.08]"
    style={{
      backgroundImage:
        "radial-gradient(circle, white 1px, transparent 1px)",
      backgroundSize: "18px 18px",
    }}
  />

  {/* Bottom atmospheric glow */}
  <div
    className="absolute -bottom-60 left-1/3 w-[700px] h-[350px] rounded-full blur-[100px] opacity-20"
    style={{ backgroundColor: "#3B82F6" }}
  />

</div>
        {/* Decorative glow */}

        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 revi-pulse"
          style={{
            backgroundColor: C.gold,
            filter: "blur(70px)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 revi-pulse"
          style={{
            backgroundColor: C.sky,
            filter: "blur(80px)",
          }}
        />

        {/* Floating stars */}

        <Sparkles
          className="absolute top-24 right-[42%] revi-sparkle"
          size={25}
          color={C.gold}
        />

        <Sparkles
          className="absolute bottom-20 right-10 revi-sparkle"
          size={18}
          color={C.gold}
        />

        <div className="max-w-6xl mx-auto px-5 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="revi-slide">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <Ribbon>Since 2008</Ribbon>

              <Starburst>
                Consistently
                <br />
                100% Result
              </Starburst>
            </div>

            <h1
              style={disp}
              className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            >
              📚 We Construct{" "}
              <span style={{ color: C.gold }}>
                Strong Foundation
              </span>{" "}
              for a Better Future📚.
            </h1>

            <p className="text-white/85 text-base md:text-lg mb-8 max-w-md font-medium">
              
            📕 20+ years of teaching experience. Std 5th to 10th
              (State Board & CBSE). Small batches, real progress
              reports, and toppers to prove it.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <GradButton
                href="/admissions"
                icon={ChevronRight}
                variant="red"
              >
                Enquire Now
              </GradButton>

              <GradButton
                href="tel:9321016779"
                icon={Phone}
                variant="gold"
              >
                Call Now
              </GradButton>
            </div>
{/* Floating message */}
<div
  className="mt-5 bg-white rounded-2xl shadow-xl px-3 py-2 revi-float inline-block"
  style={{ borderLeft: `4px solid ${C.gold}` }}
>
  <div
    className="text-14 font-extrabold"
    style={{ color: C.navy }}
  >
    Small batches
  </div>

  <div className="text-[14px] text-gray-500">
    Personal attention
  </div>
</div>

     <div className="flex gap-8 text-white flex-wrap">
              {[
            ["20+", "Years Experience"],
            ["96.2%", "Highest Score"],
            ["100%", "Consistent Result"],
              ].map(([number, label]) => (
                <div key={label}>
                  <div
                    style={{
                      ...disp,
                      color: C.gold,
                    }}
                    className="text-3xl font-extrabold"
                  >
                    {number}
                  </div>

                  <div className="text-[11px] uppercase tracking-wide text-white/70 font-bold">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="relative revi-slide">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: C.gold }}
            >
              <Image
                src="/images/admission-video.jpg"
                alt="Students learning at Revi's Group Tuitions"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>

         
          <button
  type="button"
  onClick={() => setShowAdmissionVideo(true)}
  className="absolute -bottom-81 -left-1 flex items-center gap-2 px-6 py-3.5 rounded-full shadow-xl font-extrabold text-sm hover:scale-90 hover:shadow-3xl transition-all duration-300"
  style={{
    backgroundColor: C.gold,
    color: C.navyDeep,
  }}
>
  <PlayCircle size={20} />
  Watch Admission Video
</button>
    </div>
  </div>
  </section>


{/* ========================================================= */}
{/* PARENT + CHILD → REVI'S ANIMATED JOURNEY */}
{/* ========================================================= */}

<div className="absolute z-30 left-[40%] bottom-[-14%] hidden lg:block pointer-events-none">

  {/* Small parent + child visual */}
  <div
    className="relative w-[145px] h-[105px] rounded-2xl overflow-hidden shadow-xl"
    style={{
      border: "3px solid rgba(255,255,255,0.9)",
      boxShadow:
        "0 10px 35px rgba(0,0,0,0.30), 0 0 40px rgba(250,180,0,0.25)",
      animation: "familyFloat 2s ease-in-out infinite",
    }}
  >
    <img
      src="/images/parent-student.jpg"
      alt="Parent encouraging child"
      className="w-full h-full object-cover"
      style={{
        objectPosition: "10% center",
      }}
    />

    {/* Soft overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.18), transparent 75%)",
      }}
    />
  </div>


  {/* Parent message */}
  <div
    className="absolute -top-[150px] left-[-10px] bg-white rounded-xl px-3 py-2 shadow-xl whitespace-nowrap"
    style={{
      animation: "messageFloat 5s ease-in-out infinite",
    }}
  >
    <div
      className="text-[14px] font-extrabold"
      style={{ color: C.navy }}
    >
      Don't worry 😊
    </div>

    <div
      className="text-[10px] font-bold"
      style={{ color: C.gold }}
    >
      Let's join Revi's!
    </div>
  </div>


  {/* ===================================================== */}
  {/* SINGLE CONTINUOUS ARROW */}
  {/* ===================================================== */}

  <svg
    className="absolute left-[140px] top-[-60px] w-[200px] h-[185px] overflow-visible"
    viewBox="0 0 560 230"
    fill="none"
  >

    {/* Soft outer glow */}
    <path
      d="
        M 5 170
        C 70 220, 125 195, 125 140
        C 125 90, 95 65, 130 38
        C 185 -5, 250 35, 300 65
        C 355 98, 405 72, 445 42
        C 480 17, 515 10, 545 8
      "
      stroke="rgba(250,180,0,0.18)"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* Main gold travelling line */}
    <path
      id="journeyArrow"
      d="
        M 5 170
        C 70 220, 125 195, 125 140
        C 125 90, 95 65, 130 38
        C 185 -5, 250 35, 300 65
        C 355 98, 405 72, 445 42
        C 480 17, 515 10, 545 8
      "
      stroke={C.gold}
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="18 12"
      style={{
        filter:
          "drop-shadow(0 0 7px rgba(250,180,0,0.9))",
      }}
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-40"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>

    {/* Thin blue travelling highlight */}
    <path
      d="
        M 5 170
        C 70 220, 125 195, 125 140
        C 125 90, 95 65, 130 38
        C 185 -5, 250 35, 300 65
        C 355 98, 405 72, 445 42
        C 480 17, 515 10, 545 8
      "
      stroke="#40A5FA"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="3 15"
      opacity="0.9"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-50"
        dur="0.2s"
        repeatCount="indefinite"
      />
    </path>

    {/* Moving arrow head */}
    <g>
      <path
        d="M 0 -10 L 50 0 L 0 20 L 5 0 Z"
        fill={C.gold}
        style={{
          filter:
            "drop-shadow(0 0 8px rgba(250,180,0,1))",
        }}
      />

      <animateMotion
        dur="4s"
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath href="#journeyArrow" />
      </animateMotion>
    </g>

  </svg>


  {/* Small journey message sitting ON the arrow */}
  <div
    className="absolute left-[-80px] top-[-56px] px-3 py-1.5 rounded-full text-[12px] font-extrabold whitespace-nowrap shadow-lg"
    style={{
      backgroundColor: C.gold,
      color: C.navyDeep,
      animation: "journeyPulse 2s ease-in-out infinite",
    }}
  >
    ✨ Your journey starts at Revi's →
  </div>

</div>


{/* Animation styles */}
<style jsx>{`

  @keyframes familyFloat {
    0%, 100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-6px);
    }
  }

  @keyframes messageFloat {
    0%, 100% {
      transform: translateY(0px);
      opacity: 0.95;
    }

    50% {
      transform: translateY(-5px);
      opacity: 1;
    }
  }

  @keyframes journeyPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 4px 15px rgba(250,180,0,0.20);
    }

    50% {
      transform: scale(1.04);
      box-shadow: 0 4px 25px rgba(250,180,0,0.50);
    }
  }

`}</style>     

 {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section
        style={{
          background: `linear-gradient(90deg, ${C.gold}, ${C.goldDeep})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            ["20+ Yrs", "Teaching Experience"],
            ["2008", "Institute Established"],
            ["5th-10th", "Standards Taught"],
            ["2 Boards", "State Board & CBSE"],
          ].map(([big, small]) => (
            <div key={small}>
              <div
                style={{
                  ...disp,
                  color: C.navyDeep,
                }}
                className="text-xl font-extrabold"
              >
                {big}
              </div>

              <div
                className="text-[10px] font-bold uppercase tracking-wide"
                style={{ color: C.navyDeep }}
              >
                {small}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE REVI'S
      ===================================================== */}

      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundColor: C.sky,
        }}
      >
        {/* Soft background classroom image */}

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/gallery/teaching.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.035]"
          />
        </div>

        {/* Floating decorative shapes */}

        <div
          className="absolute -left-24 top-32 w-72 h-72 rounded-full revi-pulse"
          style={{
            backgroundColor: C.gold,
            filter: "blur(80px)",
            opacity: 0.12,
          }}
        />

        <div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full revi-pulse"
          style={{
            backgroundColor: C.red,
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <Eyebrow>Why Choose Revi&apos;s</Eyebrow>

          <h2
            style={{
              ...disp,
              color: C.navy,
            }}
            className="text-3xl md:text-4xl font-extrabold mb-10 max-w-2xl"
          >
            The details that make the difference over five
            years, not five weeks.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(
              ({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  className="group bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-md border-t-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                  style={{ borderColor: C.red }}
                >
                  <div
                    className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"
                    style={{ backgroundColor: C.gold }}
                  />

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative"
                    style={{
                      backgroundColor: C.sky,
                    }}
                  >
                    <Icon size={22} color={C.red} />
                  </div>

                  <div
                    className="font-extrabold text-base mb-2 relative"
                    style={{
                      ...disp,
                      color: C.navy,
                    }}
                  >
                    {title}
                  </div>

                  <div className="text-sm text-gray-600 leading-relaxed relative">
                    {desc}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: C.gold }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          HUMAN CONNECTION / STORY SECTION
      ===================================================== */}

      <section className="relative py-20 overflow-hidden bg-white">
        {/* Background photo */}

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/gallery/teacher&students.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.045]"
          />
        </div>

        <div className="max-w-6xl mx-auto px-5 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Eyebrow>More Than Just Tuition</Eyebrow>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-3xl md:text-5xl font-extrabold mt-3"
            >
              Behind every result is a{" "}
              <span style={{ color: C.red }}>
                relationship.
              </span>
            </h2>

            <p className="text-gray-600 mt-4 text-base md:text-lg">
              Students need teachers who guide them, parents who
              encourage them and an environment where they feel
              confident to learn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {journeyPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className={`relative group ${
                  index === 1 ? "md:-translate-y-7" : ""
                }`}
              >
                <div
                  className="rounded-3xl overflow-hidden shadow-xl border-4 bg-white"
                  style={{ borderColor: C.gold }}
                >
                  <div className="relative h-72">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover story-photo"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3
                        style={disp}
                        className="text-xl font-extrabold"
                      >
                        {photo.title}
                      </h3>

                      <p className="text-sm text-white/85 mt-1">
                        {photo.text}
                      </p>
                    </div>
                  </div>
                </div>

                {index === 1 && (
                  <div
                    className="absolute -top-5 -right-5 w-14 h-14 rounded-full flex items-center justify-center shadow-xl revi-float"
                    style={{
                      backgroundColor: C.gold,
                    }}
                  >
                    <Heart
                      size={25}
                      color={C.navy}
                      fill={C.navy}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARENT + STUDENT CONNECTION
      ===================================================== */}

      <section
        className="relative overflow-hidden py-20"
        style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute left-10 top-10 w-20 h-20 rounded-full border-4 opacity-20 revi-float"
          style={{ borderColor: C.gold }}
        />

        <div
          className="absolute right-10 bottom-10 w-28 h-28 rounded-full border-4 opacity-10 revi-float-reverse"
          style={{ borderColor: "#fff" }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Ribbon color={C.purple}>
                The Revi&apos;s Difference
              </Ribbon>

              <h2
                style={{
                  ...disp,
                  color: "#fff",
                }}
                className="text-3xl md:text-5xl font-extrabold mt-5 mb-5"
              >
                A student&apos;s journey is never a{" "}
                <span style={{ color: C.gold }}>
                  one-person journey.
                </span>
              </h2>

              <p className="text-white/75 leading-relaxed text-base md:text-lg">
                Teachers guide. Students work hard. Parents
                encourage. Together, these small moments create
                confidence, discipline and results.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <GraduationCap
                    size={28}
                    color={C.gold}
                  />

                  <div className="text-white font-extrabold mt-3">
                    Students
                  </div>

                  <div className="text-white/60 text-sm mt-1">
                    Learn, practice & improve.
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <Heart size={28} color={C.gold} />

                  <div className="text-white font-extrabold mt-3">
                    Parents
                  </div>

                  <div className="text-white/60 text-sm mt-1">
                    Encourage & support.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: C.gold }}
              >
                <Image
                  src="/images/gallery/teacher&students (2).jpg"
                  alt="Teacher and students at Revi's Group Tuitions"
                  width={700}
                  height={500}
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating quote */}

              <div className="absolute -bottom-6 -left-5 max-w-xs bg-white rounded-2xl shadow-2xl p-5 revi-float">
                <div
                  className="text-lg font-extrabold"
                  style={{
                    ...disp,
                    color: C.navy,
                  }}
                >
                  “Small progress every day.”
                </div>

                <div
                  className="text-xs font-bold mt-2"
                  style={{ color: C.red }}
                >
                  That&apos;s how strong foundations are built.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLASSES
      ===================================================== */}

      <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute right-[-100px] top-10 w-72 h-72 rounded-full opacity-10"
          style={{
            backgroundColor: C.gold,
            filter: "blur(70px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <Eyebrow>Our Classes</Eyebrow>

          <h2
            style={{
              ...disp,
              color: C.navy,
            }}
            className="text-3xl md:text-4xl font-extrabold mb-10 max-w-xl"
          >
            Std V through Std X, State Board & CBSE.
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {classes.map((className, index) => (
              <Link
                key={className}
                href="/classes"
                className="group aspect-square flex flex-col items-center justify-center rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    index % 2 === 0
                      ? `linear-gradient(145deg, ${C.navy}, ${C.navyDeep})`
                      : `linear-gradient(145deg, ${C.red}, ${C.redDeep})`,
                }}
              >
                <div
                  className="absolute w-20 h-20 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"
                  style={{
                    backgroundColor: C.gold,
                  }}
                />

                <div
                  style={disp}
                  className="text-white text-3xl font-extrabold relative"
                >
                  {className}
                </div>

                <div
                  className="text-[10px] uppercase tracking-wide mt-1 font-bold relative"
                  style={{ color: C.gold }}
                >
                  Standard
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPPERS
      ===================================================== */}

      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute -right-32 top-20 w-96 h-96 rounded-full opacity-10"
          style={{
            backgroundColor: C.gold,
            filter: "blur(100px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <Ribbon color={C.purple}>
            Consistently 100% Result
          </Ribbon>

          <div className="flex items-end justify-between flex-wrap gap-4 mt-5 mb-10">
            <h2
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-3xl md:text-4xl font-extrabold max-w-xl"
            >
              Our SSC Toppers — real names, real percentages.
            </h2>

            <Link
              href="/results"
              className="text-sm font-extrabold inline-flex items-center gap-1 hover:gap-2 transition-all"
              style={{ color: C.gold }}
            >
              See full Results archive
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toppers.map((student) => (
              <div
                key={student.name}
                className="rounded-2xl shadow-xl relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor:
                    "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="relative w-full h-64 overflow-hidden bg-white">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <div className="p-5 text-center">
                  <div className="flex justify-center mb-2">
                    <Trophy size={21} color={C.gold} />
                  </div>

                  <div
                    className="text-white font-extrabold text-base mb-2"
                    style={disp}
                  >
                    {student.name}
                  </div>

                  <div
                    className="text-3xl font-extrabold leading-none mb-2"
                    style={{
                      ...disp,
                      color: C.gold,
                    }}
                  >
                    {student.pct}
                  </div>

                  <div className="text-white/50 text-xs uppercase tracking-wide font-bold">
                    {student.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-white/70 text-sm mt-6 font-medium">
            Remaining all students scored above 80% — full
            batch results on the Results page.
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEOS — SEPARATE SECTION
      ===================================================== */}

      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundColor: C.sky,
        }}
      >
        {/* Decorative balloons */}

        <div
          className="absolute left-[5%] top-20 w-16 h-20 rounded-full opacity-20 revi-float"
          style={{
            backgroundColor: C.red,
          }}
        />

        <div
          className="absolute right-[7%] top-32 w-14 h-18 rounded-full opacity-20 revi-float-reverse"
          style={{
            backgroundColor: C.gold,
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Watch Revi&apos;s In Action</Eyebrow>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-3xl md:text-5xl font-extrabold mt-3"
            >
              Learning doesn&apos;t have to be{" "}
              <span style={{ color: C.red }}>
                ordinary.
              </span>
            </h2>

            <p className="text-gray-600 mt-4">
              Explore moments, activities and memories from
              Revi&apos;s Group Tuitions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.src}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                style={{ borderColor: C.gold }}
              >
                <div className="relative bg-black">
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="p-5">
                  <div
                    className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide"
                    style={{ color: C.red }}
                  >
                    <PlayCircle size={15} />
                    Revi&apos;s Moments
                  </div>

                  <h3
                    style={{
                      ...disp,
                      color: C.navy,
                    }}
                    className="text-xl font-extrabold mt-2"
                  >
                    {video.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {video.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT US
      ===================================================== */}

      <section className="py-16 bg-white relative overflow-hidden">
        <div
          className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-10"
          style={{
            backgroundColor: C.gold,
            filter: "blur(90px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center relative">
          {/* LEFT */}

          <div>
            <button
              type="button"
              onClick={() =>
                setSelectedPhoto("/images/storefront.jpg")
              }
              className="block w-full rounded-3xl overflow-hidden shadow-xl border-4 cursor-pointer hover:shadow-2xl transition-shadow"
              style={{
                borderColor: C.gold,
              }}
              aria-label="View storefront photo"
            >
              <Image
                src="/images/storefront.jpg"
                alt="Revi's Group Tuitions storefront"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {visitPhotos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() =>
                    setSelectedPhoto(photo.src)
                  }
                  className="relative h-24 sm:h-28 rounded-2xl overflow-hidden border-2 shadow-md hover:scale-105 hover:shadow-xl transition-all cursor-pointer"
                  style={{
                    borderColor: C.gold,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 150px"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-3">
              Click any photo to view it larger
            </p>
          </div>

          {/* RIGHT */}

          <div>
            <Eyebrow>Visit Us</Eyebrow>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-3xl font-extrabold mb-4"
            >
              A real classroom, a real address, easy to find.
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Shop No. 6/8, Sai Sankul Phase 1, Nr. Sai Sagar
              Hotel, Sai Chowk, Khadakpada, Kalyan (W) -
              421301
            </p>

            <div className="flex flex-wrap gap-3">
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
                WhatsApp
              </GradButton>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO MODAL
      ===================================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close photo"
          >
            <X size={28} />
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={selectedPhoto}
              alt="Revi's Group Tuitions"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section
        className="py-16 relative overflow-hidden"
        style={{
          backgroundColor: C.sky,
        }}
      >
        <div
          className="absolute right-10 top-10 w-40 h-40 rounded-full opacity-10 revi-float"
          style={{
            backgroundColor: C.red,
            filter: "blur(30px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">
          <Eyebrow>
            Hear It From Parents Directly
          </Eyebrow>

          <h2
            style={{
              ...disp,
              color: C.navy,
            }}
            className="text-3xl font-extrabold mb-8 max-w-xl"
          >
            We&apos;d rather you read our real reviews than
            take our word for it.
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://www.google.com/search?q=revisgrouptuition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold bg-white shadow-md hover:scale-105 transition-transform border-2"
              style={{
                borderColor: C.gold,
              }}
            >
              <Star
                size={18}
                fill={C.gold}
                color={C.gold}
              />
              Read Reviews on Google
            </a>

            <a
              href="https://www.justdial.com/Kalyan/Revis-Group-Tuitions-Near-Sai-Chawknear-Sagar-Hotel-Kalyan-West/022PXX22-XX22-180612204250-N6U4_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold bg-white shadow-md hover:scale-105 transition-transform border-2"
              style={{
                borderColor: C.gold,
              }}
            >
              <Star
                size={18}
                fill={C.gold}
                color={C.gold}
              />
              Read Reviews on JustDial
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@revisgrouptuitions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              style={{
                backgroundColor: C.red,
              }}
              aria-label="YouTube"
            >
              <Youtube size={20} color="#fff" />
            </a>

            <a
              href="https://instagram.com/revisgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              style={{
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
              aria-label="Instagram"
            >
              <Instagram
                size={20}
                color="#fff"
              />
            </a>

            <a
              href="https://facebook.com/revisgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              style={{
                backgroundColor: "#1877F2",
              }}
              aria-label="Facebook"
            >
              <Facebook size={20} color="#fff" />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})`,
        }}
      >
        {/* Decorative floating circles */}

        <div
          className="absolute left-[8%] top-10 w-20 h-20 rounded-full border-4 opacity-20 revi-float"
          style={{
            borderColor: "#fff",
          }}
        />

        <div
          className="absolute right-[8%] bottom-8 w-28 h-28 rounded-full border-4 opacity-10 revi-float-reverse"
          style={{
            borderColor: C.gold,
          }}
        />

        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          <div>
            <div
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-3xl md:text-4xl font-extrabold mb-2"
            >
              Admissions Open — Std V to X
            </div>

            <div className="text-white/90 text-sm flex items-center gap-2 font-medium">
              <MapPin size={16} />
              Khadakpada, Kalyan (W) - 421301
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <GradButton
              href="tel:9321016779"
              icon={Phone}
              variant="white"
            >
              93210 16779
            </GradButton>

            <GradButton
              href="https://wa.me/919321016779"
              icon={MessageCircle}
              variant="outline"
              external
            >
              WhatsApp Us
            </GradButton>
          </div>
        </div>
      </section>
{/* =====================================================
    ADMISSION VIDEO POPUP
===================================================== */}

{showAdmissionVideo && (
  <div
    className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={() => setShowAdmissionVideo(false)}
  >
    {/* Close Button */}
    <button
      type="button"
      onClick={() => setShowAdmissionVideo(false)}
      className="absolute top-5 right-5 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90"
      aria-label="Close admission video"
    >
      <X size={28} />
    </button>

    {/* Video Box */}
    <div
      className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-4"
      style={{
        borderColor: C.gold,
        backgroundColor: "#000",
      }}
      onClick={(event) => event.stopPropagation()}
    >
      {/* YouTube Video */}
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/654FQUYdFrw?autoplay=1&rel=0&playsinline=1"
          title="Revi's Group Tuitions Admission Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Caption */}
      <div
        className="px-5 py-4 text-center"
        style={{
          backgroundColor: C.navyDeep,
        }}
      >
        <div
          style={{
            ...disp,
            color: "#fff",
          }}
          className="text-lg md:text-xl font-extrabold"
        >
          Admissions Open — Std V to X
        </div>

        <div className="text-white/70 text-sm mt-1">
          Revi&apos;s Group Tuitions — Khadakpada, Kalyan (W)
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}