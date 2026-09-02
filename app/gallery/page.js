"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  X,
  ZoomIn,
  PlayCircle,
} from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

/* =========================================================
   PHOTO GALLERY
   ========================================================= */

const galleryPhotos = [
  /* =======================================================
     OUR CENTRE
     ======================================================= */

{
  src: "/images/gallery/1st in Vani school.jpg",
  title: "1st in Vani School",
  category: "Achievements",
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

  /* =======================================================
     CLASSROOM & TEACHING
     ======================================================= */

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

  /* =======================================================
     ACHIEVEMENTS
     ======================================================= */

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

  /* =======================================================
     RESULTS
     ======================================================= */

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

  /* =======================================================
     ADDITIONAL RESULTS
     ======================================================= */

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

  /* =======================================================
     ADMISSIONS
     ======================================================= */

  {
    src: "/images/gallery/Admission_open.jpg",
    title: "Admissions Open",
    category: "Admissions",
    description:
      "Admissions open for Std 5th to 10th.",
  },

  /* =======================================================
     BRAND
     ======================================================= */

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

  /* =======================================================
     EVENTS
     ======================================================= */

  {
    src: "/images/balloon.jpg",
    title: "Opening Day Celebrations",
    category: "Events",
    description:
      "A glimpse from our opening day celebrations.",
  },
];

/* =========================================================
   VIDEOS — SEPARATE SECTION
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
   CATEGORY FILTERS
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
   GALLERY PAGE
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
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20"
          style={{
            backgroundColor: C.gold,
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
          style={{
            backgroundColor: C.red,
            filter: "blur(70px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 py-16 text-center relative">
          <Ribbon>Our Gallery</Ribbon>

          <h1
            style={{
              ...disp,
              color: "#fff",
            }}
            className="text-4xl md:text-5xl font-extrabold mt-6 mb-4"
          >
            A glimpse into{" "}
            <span style={{ color: C.gold }}>
              Revi&apos;s Group Tuitions.
            </span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Our centre, classrooms, celebrations, achievements,
            results and the moments that make Revi&apos;s special.
          </p>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section
        className="py-6 sticky top-0 z-30 border-b shadow-sm"
        style={{
          backgroundColor: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex gap-2 overflow-x-auto pb-1 justify-start md:justify-center">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-200"
                  style={{
                    backgroundColor: active
                      ? C.gold
                      : C.sky,
                    color: C.navyDeep,
                    boxShadow: active
                      ? "0 5px 15px rgba(0,0,0,0.12)"
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
          PHOTO GALLERY
      ===================================================== */}

      <section
        className="py-14 md:py-16"
        style={{
          backgroundColor: C.sky,
        }}
      >
        <div className="max-w-6xl mx-auto px-5">

          <div className="text-center mb-12">
            <div
              className="text-sm font-extrabold uppercase tracking-widest mb-2"
              style={{ color: C.red }}
            >
              Memories & Achievements
            </div>

            <h2
              style={{
                ...disp,
                color: C.navy,
              }}
              className="text-3xl md:text-4xl font-extrabold"
            >
              From our classroom to our results.
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Explore moments from Revi&apos;s Group Tuitions —
              our centre, students, teaching sessions and achievements.
            </p>
          </div>

          {/* PHOTO CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className={`group text-left rounded-3xl overflow-hidden bg-white shadow-lg border-4 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${
                  index === 0
                    ? "lg:col-span-2"
                    : ""
                }`}
                style={{
                  borderColor: C.gold,
                }}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "h-80 md:h-[420px]"
                      : "h-72"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />

                  {/* Dark hover overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Zoom */}

                  <div
                    className="absolute right-4 top-4 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ZoomIn
                      size={20}
                      color={C.navy}
                    />
                  </div>

                  {/* Category */}

                  <div
                    className="absolute left-4 top-4 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide shadow-md"
                    style={{
                      backgroundColor: C.gold,
                      color: C.navyDeep,
                    }}
                  >
                    {photo.category}
                  </div>
                </div>

                {/* Caption */}

                <div className="p-4">
                  <h3
                    style={{
                      ...disp,
                      color: C.navy,
                    }}
                    className="font-extrabold text-lg"
                  >
                    {photo.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {photo.description}
                  </p>

                  <div
                    className="text-xs font-extrabold mt-3"
                    style={{ color: C.red }}
                  >
                    View photo →
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}

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
          VIDEOS — COMPLETELY SEPARATE
      ===================================================== */}

      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{
            backgroundColor: C.gold,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 relative">

          {/* VIDEO HEADER */}

          <div className="text-center mb-12">
            <Ribbon color={C.purple}>
              Watch Revi&apos;s
            </Ribbon>

            <h2
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-3xl md:text-4xl font-extrabold mt-5"
            >
              Moments That Tell Our Story.
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Watch real moments from our students, activities
              and the journey of Revi&apos;s Group Tuitions.
            </p>
          </div>

          {/* VIDEO CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video) => (
              <div
                key={video.src}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 bg-white hover:-translate-y-2 transition-all duration-300"
                style={{
                  borderColor: C.gold,
                }}
              >
                {/* VIDEO PLAYER */}

                <div className="relative bg-black aspect-video">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* VIDEO INFORMATION */}

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle
                      size={20}
                      color={C.red}
                    />

                    <h3
                      style={{
                        ...disp,
                        color: C.navy,
                      }}
                      className="font-extrabold text-lg"
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
          PHOTO FULL SCREEN MODAL
      ===================================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close photo"
          >
            <X size={28} />
          </button>

          {/* PHOTO */}

          <div
            className="relative w-full max-w-6xl h-[80vh]"
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

          {/* PHOTO INFORMATION */}

          <div className="absolute bottom-5 left-5 right-5 text-center">
            <div className="inline-block bg-black/60 backdrop-blur-md rounded-2xl px-6 py-3">
              <div className="text-white font-extrabold text-lg">
                {selectedPhoto.title}
              </div>

              <div className="text-white/70 text-sm mt-1">
                {selectedPhoto.description}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FINAL CALL TO ACTION
      ===================================================== */}

      <section
        className="py-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6 relative">

          <div>
            <div
              style={{
                ...disp,
                color: "#fff",
              }}
              className="text-2xl md:text-3xl font-extrabold mb-2"
            >
              Want to see Revi&apos;s personally?
            </div>

            <div className="text-white/90 text-sm font-medium">
              Visit our centre at Khadakpada, Kalyan (West).
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