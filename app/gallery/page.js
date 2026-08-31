"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, X, ZoomIn } from "lucide-react";

import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

/* =========================================================
   GALLERY PHOTOS
   ========================================================= */

const galleryPhotos = [
  /* Real Centre / Classroom */
  {
    src: "/images/storefront.jpg",
    title: "Our Centre",
    category: "Our Centre",
    description: "Revi's Group Tuitions — Khadakpada, Kalyan (West).",
  },
  {
    src: "/images/balloon.jpg",
    title: "Opening Day Celebrations",
    category: "Events",
    description: "A glimpse from our opening day celebrations.",
  },
  {
    src: "/images/family.jpg",
    title: "Focused Learning",
    category: "Classroom",
    description: "Focused learning and personal attention in every session.",
  },

  /* Gallery folder */
  {
    src: "/images/gallery/1st in school.jpg",
    title: "1st in School Achievement",
    category: "Achievements",
    description: "Celebrating outstanding student achievement.",
  },
  {
    src: "/images/gallery/Admission_open.jpg",
    title: "Admissions Open",
    category: "Admissions",
    description: "Admissions open for Std 5th to 10th.",
  },
  {
    src: "/images/gallery/all_90%.jpg",
    title: "90%+ Results",
    category: "Results",
    description: "Students achieving excellent academic results.",
  },
  {
    src: "/images/gallery/bag.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description: "Our Revi's Group Tuitions school bag.",
  },
  {
    src: "/images/gallery/features.jpg",
    title: "Why Choose Revi's",
    category: "Institute",
    description: "The features and teaching approach of our institute.",
  },
  {
    src: "/images/gallery/Out_standing_result.jpg",
    title: "Outstanding Results",
    category: "Results",
    description: "Celebrating our students' outstanding performance.",
  },
  {
    src: "/images/gallery/results.jpg",
    title: "Student Results",
    category: "Results",
    description: "Our students' excellent academic performance.",
  },
  {
    src: "/images/gallery/results_1.jpg",
    title: "SSC Results",
    category: "Results",
    description: "Another glimpse of our SSC results.",
  },
  {
    src: "/images/gallery/results_3.jpg",
    title: "Student Achievement",
    category: "Results",
    description: "Celebrating academic success at Revi's.",
  },
  {
    src: "/images/gallery/results_4.jpg",
    title: "Student Toppers",
    category: "Results",
    description: "Our students and their excellent scores.",
  },
  {
    src: "/images/gallery/results_5.jpg",
    title: "Student Toppers",
    category: "Results",
    description: "Celebrating our students' achievements.",
  },
  {
    src: "/images/gallery/results_6.jpg",
    title: "Top Results",
    category: "Results",
    description: "Students achieving excellent percentages.",
  },
  {
    src: "/images/gallery/results_7.jpg",
    title: "Top Results",
    category: "Results",
    description: "Another glimpse of our academic results.",
  },
  {
    src: "/images/gallery/results_8.jpg",
    title: "SSC Achievement",
    category: "Results",
    description: "Our students' impressive SSC performance.",
  },
  {
    src: "/images/gallery/results_32.jpg",
    title: "Student Achievements",
    category: "Results",
    description: "Celebrating another batch of successful students.",
  },
  {
    src: "/images/gallery/revis.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description: "Our institute branding.",
  },
  {
    src: "/images/gallery/revis_card.jpg",
    title: "Revi's Group Tuitions Card",
    category: "Brand",
    description: "Our institute identity and contact card.",
  },
  {
    src: "/images/gallery/revis_cup.jpg",
    title: "Revi's Group Tuitions",
    category: "Brand",
    description: "A little piece of Revi's branding.",
  },
];

/* =========================================================
   FILTERS
   ========================================================= */

const categories = [
  "All",
  "Our Centre",
  "Events",
  "Achievements",
  "Results",
  "Admissions",
  "Institute",
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
        {/* Decorative circles */}

        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20"
          style={{
            backgroundColor: C.gold,
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
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
            Our centre, celebrations, student achievements,
            results and everything that makes Revi&apos;s Group
            Tuitions special.
          </p>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section
        className="py-8 sticky top-0 z-30 border-b shadow-sm"
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
                  onClick={() => setActiveCategory(category)}
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

          {/* Section heading */}

          <div className="mb-10">
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

            <p className="text-gray-600 mt-3 max-w-2xl">
              Take a look at our centre, celebrations,
              student achievements and the journey of Revi&apos;s
              Group Tuitions.
            </p>
          </div>

          {/* Photos */}

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
                {/* Image */}

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

                  {/* Hover overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute right-4 top-4 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn
                      size={20}
                      color={C.navy}
                    />
                  </div>

                  {/* Category badge */}

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
                    Click to view →
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
          FULL SCREEN PHOTO MODAL
      ===================================================== */}

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}

          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close photo"
          >
            <X size={28} />
          </button>

          {/* Photo */}

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

          {/* Photo information */}

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
          CALL TO ACTION
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