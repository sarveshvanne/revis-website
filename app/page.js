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
   VISIT US PHOTO GALLERY
   ========================================================= */

const visitPhotos = [
  {
    src: "/images/bag.jpg",
    alt: "Revi's Group Tuitions bag",
  },
  {
    src: "/images/banner1.jpg",
    alt: "Revi's Group Tuitions student results banner",
  },
  {
    src: "/images/banner2.jpg",
    alt: "Revi's Group Tuitions toppers banner",
  },
  {
    src: "/images/banner3.jpg",
    alt: "Revi's Group Tuitions results banner",
  },
];

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 20% 20%, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20"
          style={{
            backgroundColor: C.gold,
            filter: "blur(70px)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{
            backgroundColor: C.sky,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
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
              We Construct{" "}
              <span style={{ color: C.gold }}>
                Strong Foundation
              </span>{" "}
              for Better Future.
            </h1>

            <p className="text-white/85 text-base md:text-lg mb-8 max-w-md font-medium">
              20+ years of teaching experience. Std 5th to 10th
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

            <div className="flex gap-6 text-white flex-wrap">
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
                    className="text-2xl font-extrabold"
                  >
                    {number}
                  </div>

                  <div className="text-[10px] uppercase tracking-wide text-white/70 font-bold">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: C.gold }}
            >
              <Image
                src="/images/family.jpg"
                alt="Students learning at Revi's Group Tuitions"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <a
              href="https://www.youtube.com/@revisgrouptuitions"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 -left-5 flex items-center gap-2 px-4 py-3 rounded-full shadow-xl font-extrabold text-sm hover:scale-105 transition-transform"
              style={{
                backgroundColor: C.gold,
                color: C.navyDeep,
              }}
            >
              <PlayCircle size={22} />
              Watch Admission Video
            </a>
          </div>
        </div>
      </section>

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
          FEATURES
      ===================================================== */}

      <section
        className="py-16"
        style={{ backgroundColor: C.sky }}
      >
        <div className="max-w-6xl mx-auto px-5">
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
              ({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-2xl shadow-md border-t-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
                  style={{ borderColor: C.red }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: C.sky,
                    }}
                  >
                    <Icon size={22} color={C.red} />
                  </div>

                  <div
                    className="font-extrabold text-base mb-2"
                    style={{
                      ...disp,
                      color: C.navy,
                    }}
                  >
                    {title}
                  </div>

                  <div className="text-sm text-gray-600 leading-relaxed">
                    {desc}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLASSES
      ===================================================== */}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
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
                className="group aspect-square flex flex-col items-center justify-center rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-200"
                style={{
                  background:
                    index % 2 === 0
                      ? `linear-gradient(145deg, ${C.navy}, ${C.navyDeep})`
                      : `linear-gradient(145deg, ${C.red}, ${C.redDeep})`,
                }}
              >
                <div
                  style={disp}
                  className="text-white text-3xl font-extrabold"
                >
                  {className}
                </div>

                <div
                  className="text-[10px] uppercase tracking-wide mt-1 font-bold"
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
        className="py-16"
        style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
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
                className="rounded-2xl shadow-xl relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor:
                    "rgba(255,255,255,0.08)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Student Photo */}

                <div className="relative w-full h-64 overflow-hidden bg-white">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Student Details */}

                <div className="p-5 text-center">
                  <div className="flex justify-center mb-2">
                    <Trophy
                      size={21}
                      color={C.gold}
                    />
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
          VISIT US
      ===================================================== */}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT - STORE + PHOTO GALLERY */}

          <div>
            {/* Main Storefront Photo */}

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
                className="w-full h-[400px] object-cover"
              />
            </button>

            {/* Small Photo Gallery */}

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

          {/* RIGHT - ADDRESS */}

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
          FULL PHOTO MODAL
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
        className="py-16"
        style={{
          backgroundColor: C.sky,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
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
    </>
  );
}