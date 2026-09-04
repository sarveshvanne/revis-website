"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  X,
  ZoomIn,
  PlayCircle,
  Sparkles,
  Camera,
  Trophy,
  School,
  Users,
  Star,
} from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

/* =========================================================
   ANIMATIONS
   ========================================================= */

const galleryAnimations = `
  @keyframes galleryGradient {
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

  @keyframes galleryGlow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.10;
    }

    50% {
      transform: scale(1.18);
      opacity: 0.24;
    }
  }

  @keyframes gallerySparkle {
    0%, 100% {
      opacity: 0.15;
      transform: scale(0.5) rotate(0deg);
    }

    50% {
      opacity: 1;
      transform: scale(1.25) rotate(45deg);
    }
  }

  @keyframes galleryCardIn {
    from {
      opacity: 0;
      transform: translateY(25px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes galleryFloat {
    0%, 100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes galleryShine {
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

  @keyframes galleryPulse {
    0%, 100% {
      box-shadow: 0 0 0 rgba(255, 215, 0, 0);
    }

    50% {
      box-shadow: 0 0 28px rgba(255, 215, 0, 0.25);
    }
  }
`;

/* =========================================================
   PHOTO GALLERY
   ========================================================= */

const galleryPhotos = [
  {
    src: "/images/gallery/1st in Vani school.jpg",
    title: "1st in Vani School",
    category: "Achievements",
    description:
      "Celebrating outstanding achievement by our student.",
  },

  {
    src: "/images/gallery/banner 4.jpg",
    title: "Our Classroom",
    category: "Our Centre",
    description:
      "A glimpse inside the Revi's Group Tuitions classroom.",
  },

  {
    src: "/images/gallery/banner 5.jpg",
    title: "Classroom Entrance",
    category: "Our Centre",
    description:
      "The entrance to our learning centre at Khadakpada.",
  },

  {
    src: "/images/gallery/banner 6.jpg",
    title: "Learning Environment",
    category: "Our Centre",
    description:
      "A focused and positive environment for students.",
  },

  {
    src: "/images/gallery/banner 7.jpg",
    title: "Our Centre Exterior",
    category: "Our Centre",
    description:
      "A look at the Revi's Group Tuitions centre.",
  },

  {
    src: "/images/gallery/banner 26.jpg",
    title: "Our Centre",
    category: "Our Centre",
    description:
      "A glimpse of our centre from outside.",
  },

  {
    src: "/images/gallery/banner 27.jpg",
    title: "Revi's Group Tuitions Centre",
    category: "Our Centre",
    description:
      "Our learning space at Khadakpada, Kalyan.",
  },

  {
    src: "/images/gallery/banner 29.jpg",
    title: "Centre Entrance",
    category: "Our Centre",
    description:
      "The entrance and exterior of our centre.",
  },

  {
    src: "/images/gallery/banner 30.jpg",
    title: "Revi's Group Tuitions",
    category: "Our Centre",
    description:
      "A view of our institute.",
  },

  {
    src: "/images/gallery/banner 31.jpg",
    title: "Our Learning Centre",
    category: "Our Centre",
    description:
      "Our centre in Khadakpada, Kalyan (West).",
  },

  {
    src: "/images/gallery/banner 32.jpg",
    title: "Centre Highlights",
    category: "Our Centre",
    description:
      "Another glimpse of our learning centre.",
  },

  {
    src: "/images/gallery/banner 33.jpg",
    title: "Centre Display",
    category: "Our Centre",
    description:
      "A glimpse of our institute and student results.",
  },

  {
    src: "/images/gallery/banner 34.jpg",
    title: "Our Centre",
    category: "Our Centre",
    description:
      "Revi's Group Tuitions — Kalyan (West).",
  },

  {
    src: "/images/family.jpg",
    title: "Focused Learning",
    category: "Classroom",
    description:
      "Focused learning and personal attention in every session.",
  },

  {
    src: "/images/gallery/teacher&students.jpg",
    title: "Teacher & Students",
    category: "Classroom",
    description:
      "Teachers and students learning together.",
  },

  {
    src: "/images/gallery/teacher&students (2).jpg",
    title: "Learning Together",
    category: "Classroom",
    description:
      "Building a positive and engaging classroom experience.",
  },

  {
    src: "/images/gallery/teaching.jpg",
    title: "Teaching Session",
    category: "Classroom",
    description:
      "A glimpse of our teaching approach.",
  },

  {
    src: "/images/gallery/teaching (2).jpg",
    title: "Classroom Teaching",
    category: "Classroom",
    description:
      "Focused teaching and student interaction.",
  },

  {
    src: "/images/gallery/1st in school.jpg",
    title: "1st in School Achievement",
    category: "Achievements",
    description:
      "Celebrating outstanding student achievement.",
  },

  {
    src: "/images/1st in school.jpg",
    title: "1st in School",
    category: "Achievements",
    description:
      "Celebrating our students' academic excellence.",
  },

  {
    src: "/images/gallery/Out_standing_result.jpg",
    title: "Outstanding Results",
    category: "Achievements",
    description:
      "Celebrating outstanding academic performance.",
  },

  {
    src: "/images/gallery/all_90%.jpg",
    title: "90%+ Results",
    category: "Results",
    description:
      "Students achieving excellent academic results.",
  },

  {
    src: "/images/gallery/results.jpg",
    title: "Student Results",
    category: "Results",
    description:
      "Our students' excellent academic performance.",
  },

  {
    src: "/images/gallery/results_1.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Celebrating our SSC toppers and their achievements.",
  },

  {
    src: "/images/gallery/results_3.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Celebrating academic success at Revi's.",
  },

  {
    src: "/images/gallery/results_4.jpg",
    title: "Student Toppers",
    category: "Results",
    description:
      "Our students and their excellent scores.",
  },

  {
    src: "/images/gallery/results_5.jpg",
    title: "Student Toppers",
    category: "Results",
    description:
      "Celebrating our students' achievements.",
  },

  {
    src: "/images/gallery/results_6.jpg",
    title: "Top Results",
    category: "Results",
    description:
      "Students achieving excellent percentages.",
  },

  {
    src: "/images/gallery/results_7.jpg",
    title: "Academic Excellence",
    category: "Results",
    description:
      "Another glimpse of our academic results.",
  },

  {
    src: "/images/gallery/results_8.jpg",
    title: "SSC Achievement",
    category: "Results",
    description:
      "Our students' impressive SSC performance.",
  },

  {
    src: "/images/gallery/results_32.jpg",
    title: "Student Achievements",
    category: "Results",
    description:
      "Celebrating another successful batch of students.",
  },

  {
    src: "/images/gallery/banner 8.jpg",
    title: "SSC Achievements",
    category: "Results",
    description:
      "Celebrating the achievements of our students.",
  },

  {
    src: "/images/gallery/banner 9.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Another glimpse of our successful students.",
  },

  {
    src: "/images/gallery/banner 10.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Celebrating academic performance.",
  },

  {
    src: "/images/gallery/banner 11.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Our successful SSC students.",
  },

  {
    src: "/images/gallery/banner 12.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Celebrating student success.",
  },

  {
    src: "/images/gallery/banner 13.jpg",
    title: "SSC Results",
    category: "Results",
    description:
      "A glimpse of our SSC results.",
  },

  {
    src: "/images/gallery/banner 14.jpg",
    title: "Student Success",
    category: "Results",
    description:
      "Celebrating our students' academic journey.",
  },

  {
    src: "/images/gallery/banner 15.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Our students and their excellent scores.",
  },

  {
    src: "/images/gallery/banner 16.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Celebrating academic success.",
  },

  {
    src: "/images/gallery/banner 17.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Celebrating another successful batch.",
  },

  {
    src: "/images/gallery/banner 18.jpg",
    title: "Student Success",
    category: "Results",
    description:
      "Our students' achievements.",
  },

  {
    src: "/images/gallery/banner 19.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Celebrating our successful students.",
  },

  {
    src: "/images/gallery/banner 20.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Another glimpse of academic success.",
  },

  {
    src: "/images/gallery/banner 21.jpg",
    title: "SSC Results",
    category: "Results",
    description:
      "Our students' SSC performance.",
  },

  {
    src: "/images/gallery/banner 22.jpg",
    title: "Student Toppers",
    category: "Results",
    description:
      "Celebrating student achievements.",
  },

  {
    src: "/images/gallery/banner 23.jpg",
    title: "SSC Toppers",
    category: "Results",
    description:
      "Our successful SSC students.",
  },

  {
    src: "/images/gallery/banner 24.jpg",
    title: "Student Results",
    category: "Results",
    description:
      "Academic results from our students.",
  },

  {
    src: "/images/gallery/banner 25.jpg",
    title: "Outstanding Results",
    category: "Results",
    description:
      "Celebrating excellent academic performance.",
  },

  {
    src: "/images/gallery/banner 28.jpg",
    title: "Student Achievement",
    category: "Results",
    description:
      "Celebrating another successful batch.",
  },

  {
    src: "/images/gallery/Admission_open.jpg",
    title: "Admissions Open",
    category: "Admissions",
    description:
      "Admissions open for Std 5th to 10th.",
  },

  {
    src: "/images/gallery/bag.jpg",
    title: "Revi's Group Tuitions Bag",
    category: "Brand",
    description:
      "Our Revi's Group Tuitions school bag.",
  },

  {
    src: "/images/gallery/bag_2.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description:
      "A glimpse of our Revi's Group Tuitions branding.",
  },

  {
    src: "/images/gallery/revis.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description:
      "Our institute branding.",
  },

  {
    src: "/images/gallery/revis_card.jpg",
    title: "Revi's Group Tuitions Card",
    category: "Brand",
    description:
      "Our institute identity and contact card.",
  },

  {
    src: "/images/gallery/revis_cup.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description:
      "A little piece of Revi's branding.",
  },

  {
    src: "/images/balloon.jpg",
    title: "Opening Day Celebrations",
    category: "Events",
    description:
      "A glimpse from our opening day celebrations.",
  },
];

/* =========================================================
   VIDEOS
   ========================================================= */

const galleryVideos = [
  {
    src: "/images/gallery/17 years of success.mp4",
    title: "18 Years of Success",
    description:
      "A special glimpse into the journey of Revi's Group Tuitions.",
  },

  {
    src: "/images/gallery/activity.mp4",
    title: "Student Activity",
    description:
      "Students participating and enjoying a learning activity.",
  },

  {
    src: "/images/gallery/flute_cmpetition.mp4",
    title: "Flute Competition",
    description:
      "A glimpse of student participation and activities.",
  },
];

/* =========================================================
   FILTERS
   ========================================================= */

const categories = [
  "All",
  "Our Centre",
  "Classroom",
  "Achievements",
  "Results",
  "Admissions",
  "Events",
  "Brand",
];

/* =========================================================
   PAGE
   ========================================================= */

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category === activeCategory
        );

  return (
    <>
      <style>{galleryAnimations}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          background:
            `linear-gradient(135deg, ${C.navy}, #174B78, #806000, ${C.navyDeep})`,
          backgroundSize: "400% 400%",
          animation: "galleryGradient 14s ease infinite",
        }}
      >
        {/* Glow */}

        <div
          className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "#60A5FA",
            animation: "galleryGlow 8s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "#FFD700",
            animation: "galleryGlow 7s ease-in-out infinite",
          }}
        />

        {/* Glitter */}

        <div className="absolute inset-0 pointer-events-none">
          {[
            ["7%", "25%", "0s"],
            ["16%", "72%", "1s"],
            ["28%", "18%", "2s"],
            ["41%", "80%", "3s"],
            ["55%", "22%", "1.5s"],
            ["68%", "67%", "4s"],
            ["82%", "15%", "2.5s"],
            ["94%", "58%", "1s"],
          ].map(([left, top, delay], i) => (
            <span
              key={i}
              className="absolute text-xl"
              style={{
                left,
                top,
                color:
                  i % 2 === 0
                    ? "#FFD700"
                    : "#FFF2A8",
                animation:
                  "gallerySparkle 3.5s ease-in-out infinite",
                animationDelay: delay,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-18 md:py-20 text-center">

          <div className="flex justify-center">
            <Ribbon>Our Gallery</Ribbon>
          </div>

          <h1
            style={{
              ...disp,
              color: "#fff",
            }}
            className="text-5xl md:text-7xl font-extrabold mt-7 mb-5"
          >
            Moments that make
            <br />
            <span style={{ color: C.gold }}>
              Revi&apos;s special.
            </span>
          </h1>

          <p className="text-white/100 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed">
            Explore our classrooms, achievements, celebrations,
            student success stories and memories from the Revi&apos;s
            journey.
          </p>

          {/* Hero stats */}

          <div className="flex flex-wrap justify-center gap-3 mt-9">

            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xl backdrop-blur-sm">
              <Camera size={18} color="#FFD700" />
              Real Moments
            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xl backdrop-blur-sm">
              <Trophy size={18} color="#FFD700" />
              Real Achievements
            </div>

            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xl backdrop-blur-sm">
              <Users size={18} color="#FFD700" />
              Our Students
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section
        className="sticky top-0 z-40 py-5 border-b shadow-md"
        style={{
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">

          <div className="flex items-center gap-2 mb-3 justify-center">
            <Sparkles
              size={16}
              color={C.goldDeep}
            />

            <span
              className="text-lg font-black uppercase tracking-[0.18em]"
              style={{ color: C.navy }}
            >
              Explore Revi&apos;s
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 justify-start md:justify-center">

            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className="whitespace-nowrap px-5 py-2.5 rounded-full text-xl font-extrabold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: active
                      ? C.gold
                      : C.sky,

                    color: C.navyDeep,

                    border: active
                      ? "1px solid #D9A800"
                      : "1px solid #D7ECF7",

                    boxShadow: active
                      ? "0 7px 18px rgba(0,0,0,0.15)"
                      : "none",
                  }}
                >
                  {category}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO SECTION
      ===================================================== */}

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F7FF, #FFF9DE, #F7FCFF)",
        }}
      >

        {/* Background glow */}

        <div
          className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "#60A5FA",
            animation:
              "galleryGlow 9s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-0 -right-32 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "#FFD700",
            animation:
              "galleryGlow 8s ease-in-out infinite",
          }}
        />

        {/* Background stars */}

        {[
          ["5%", "18%"],
          ["18%", "82%"],
          ["35%", "10%"],
          ["50%", "92%"],
          ["67%", "15%"],
          ["83%", "76%"],
          ["95%", "28%"],
        ].map(([left, top], i) => (
          <span
            key={i}
            className="absolute text-xl pointer-events-none"
            style={{
              left,
              top,
              color: "#D3A200",
              animation:
                "gallerySparkle 3s ease-in-out infinite",
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ✦
          </span>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-5">

          {/* Heading */}

          <div className="text-center mb-12">

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em]"
              style={{
                background: "#FFF4BF",
                color: "#9A6B00",
                border: "1px solid #EBCB55",
              }}
            >
              <Camera size={15} />
              Memories & Achievements
            </div>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-4xl md:text-5xl font-extrabold mt-5"
            >
              From our classroom
              <br className="md:hidden" /> to our results.
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Every photograph tells a small part of the Revi&apos;s
              story.
            </p>
          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPhotos.map((photo, index) => {

              const featured =
                index === 0 &&
                activeCategory === "All";

              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() =>
                    setSelectedPhoto(photo)
                  }
                  className={`group relative text-left rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                    featured
                      ? "lg:col-span-2"
                      : ""
                  }`}
                  style={{
                    border:
                      photo.category ===
                      "Achievements"
                        ? "2px solid #EBCB55"
                        : "1px solid rgba(13,43,87,0.08)",

                    animation:
                      "galleryCardIn 0.65s ease-out both",

                    animationDelay:
                      `${Math.min(index, 12) * 0.06}s`,
                  }}
                >

                  {/* Image */}

                  <div
                    className={`relative overflow-hidden ${
                      featured
                        ? "h-[330px] md:h-[470px]"
                        : "h-[300px]"
                    }`}
                  >

                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes={
                        featured
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Category */}

                    <div
                      className="absolute left-4 top-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wide shadow-lg"
                      style={{
                        backgroundColor:
                          photo.category ===
                          "Achievements"
                            ? C.gold
                            : "rgba(255,255,255,0.94)",

                        color: C.navyDeep,
                      }}
                    >
                      {photo.category}
                    </div>

                    {/* Zoom */}

                    <div
                      className="absolute right-4 top-4 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                    >
                      <ZoomIn
                        size={20}
                        color={C.navy}
                      />
                    </div>

                    {/* Featured badge */}

                    {featured && (
                      <div
                        className="absolute left-4 bottom-20 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFD700, #E5A800)",
                          color: C.navyDeep,
                        }}
                      >
                        <Star size={15} />
                        Featured Moment
                      </div>
                    )}

                    {/* Caption over image */}

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <h3
                        style={{
                          ...disp,
                          color: "#fff",
                        }}
                        className={`font-extrabold ${
                          featured
                            ? "text-2xl md:text-3xl"
                            : "text-xl"
                        }`}
                      >
                        {photo.title}
                      </h3>

                      <p className="text-white/75 text-sm mt-1 line-clamp-2">
                        {photo.description}
                      </p>

                      <div
                        className="text-xs font-black mt-3"
                        style={{
                          color: "#FFD700",
                        }}
                      >
                        View photo →
                      </div>

                    </div>
                  </div>
                </button>
              );
            })}

          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-medium">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          VIDEO SECTION
      ===================================================== */}

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            `linear-gradient(135deg, ${C.navy}, #174B78, ${C.navyDeep})`,
        }}
      >

        {/* Gold glow */}

        <div
          className="absolute -top-40 right-0 w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "#FFD700",
            animation:
              "galleryGlow 8s ease-in-out infinite",
          }}
        />

        {/* Blue glow */}

        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "#3B82F6",
            animation:
              "galleryGlow 9s ease-in-out infinite",
          }}
        />

        {/* Glitter */}

        <div className="absolute inset-0 pointer-events-none">

          {[
            ["8%", "30%"],
            ["21%", "75%"],
            ["38%", "15%"],
            ["55%", "82%"],
            ["72%", "23%"],
            ["88%", "68%"],
          ].map(([left, top], i) => (
            <span
              key={i}
              className="absolute text-xl"
              style={{
                left,
                top,
                color: "#FFD700",
                animation:
                  "gallerySparkle 3s ease-in-out infinite",
                animationDelay: `${i * 0.6}s`,
              }}
            >
              ✦
            </span>
          ))}

        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">

          <div className="text-center mb-12">

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em]"
              style={{
                background:
                  "rgba(255,215,0,0.12)",
                color: "#FFD700",
                border:
                  "1px solid rgba(255,215,0,0.3)",
              }}
            >
              <PlayCircle size={16} />
              Watch Revi&apos;s
            </div>

            <h2
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-4xl md:text-5xl font-extrabold mt-5"
            >
              Moments That Tell
              <br className="md:hidden" /> Our Story.
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              Watch real moments from our students, activities
              and the journey of Revi&apos;s Group Tuitions.
            </p>
          </div>

          {/* Videos */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {galleryVideos.map((video, index) => (
              <div
                key={video.src}
                className="group rounded-3xl overflow-hidden bg-white shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  border:
                    "2px solid rgba(255,215,0,0.65)",

                  animation:
                    "galleryCardIn 0.7s ease-out both",

                  animationDelay:
                    `${index * 0.15}s`,
                }}
              >

                {/* Video */}

                <div className="relative bg-black aspect-video overflow-hidden">

                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  />

                  <div
                    className="absolute top-3 left-3 pointer-events-none px-3 py-1.5 rounded-full text-[10px] font-black uppercase"
                    style={{
                      backgroundColor:
                        "rgba(255,215,0,0.95)",
                      color: C.navyDeep,
                    }}
                  >
                    Video
                  </div>

                </div>

                {/* Video details */}

                <div className="p-6">

                  <div className="flex items-center gap-3 mb-3">

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFF1A8, #FFFBE8)",
                      }}
                    >
                      <PlayCircle
                        size={21}
                        color={C.red}
                      />
                    </div>

                    <h3
                      style={{
                        ...disp,
                        color: C.navy,
                      }}
                      className="font-extrabold text-xl"
                    >
                      {video.title}
                    </h3>

                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {video.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO MODAL
      ===================================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >

          {/* Close */}

          <button
            type="button"
            onClick={() =>
              setSelectedPhoto(null)
            }
            className="absolute top-5 right-5 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Close photo"
          >
            <X size={28} />
          </button>

          {/* Main image */}

          <div
            className="relative w-full max-w-6xl h-[78vh]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

          </div>

          {/* Bottom information */}

          <div className="absolute bottom-5 left-5 right-5 text-center">

            <div className="inline-block bg-black/70 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">

              <div
                className="text-white font-extrabold text-lg md:text-xl"
                style={{ ...disp }}
              >
                {selectedPhoto.title}
              </div>

              <div
                className="text-sm font-bold mt-1"
                style={{
                  color: "#FFD700",
                }}
              >
                {selectedPhoto.category}
              </div>

              <div className="text-white/65 text-sm mt-1">
                {selectedPhoto.description}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="relative overflow-hidden py-16"
        style={{
          background:
            `linear-gradient(135deg, ${C.red}, #C50A05, ${C.redDeep})`,
          backgroundSize: "200% 200%",
          animation:
            "galleryGradient 10s ease infinite",
        }}
      >

        {/* Gold sparkles */}

        {[
          ["8%", "30%"],
          ["25%", "72%"],
          ["45%", "18%"],
          ["68%", "80%"],
          ["91%", "35%"],
        ].map(([left, top], i) => (
          <span
            key={i}
            className="absolute text-2xl pointer-events-none"
            style={{
              left,
              top,
              color: "#FFD700",
              animation:
                "gallerySparkle 3s ease-in-out infinite",
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ✦
          </span>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="text-center lg:text-left">

            <div
              className="flex items-center justify-center lg:justify-start gap-2 text-sm font-black uppercase tracking-[0.2em] mb-3"
              style={{
                color: "#FFE58A",
              }}
            >
              <School size={17} />
              Come See Us
            </div>

            <div
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              Want to see Revi&apos;s
              <br />
              personally?
            </div>

            <div className="text-white/85 text-sm md:text-base font-medium mt-3">
              Visit our centre at Khadakpada, Kalyan (West).
            </div>

          </div>

          <div
            style={{
              animation:
                "galleryFloat 4s ease-in-out infinite",
            }}
          >
            <GradButton
              href="tel:9321016779"
              icon={Phone}
              variant="white"
            >
              Call 93210 16779
            </GradButton>
          </div>

        </div>
      </section>
    </>
  );
}