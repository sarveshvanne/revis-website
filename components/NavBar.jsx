"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { C, disp, navLinks } from "@/lib/theme";

function TopTicker() {
  return (
    <div
      className="overflow-hidden py-1.5"
      style={{ backgroundColor: C.gold }}
    >
      <div
        className="whitespace-nowrap font-extrabold text-lg"
        style={{
          color: C.navyDeep,
          animation: "marquee 12s linear infinite",
        }}
      >
        &#11088; Admissions Open for Std 5th to 10th (State Board &amp; CBSE Board)
        — Limited Seats Available &bull; Consistently 100% Result ; Since 2008 
        &bull; 15 to 20 Students per batch   &bull;  All Subjects under one roof &bull;
          A/c Classrooms  &bull; Regular Oral & Written Tests &bull;  Call 93210 16779 / 98336 61297 &bull;
      </div>
    </div>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* TOP TICKER */}
      <TopTicker />

      {/* HEADER */}
      <header className="sticky top-0 z-50 shadow-xl">
        <div className="flex flex-col lg:flex-row">

          {/* BRANDING AREA */}
          <div
            className="bg-white"
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="max-w-6xl mx-auto px-5 py-2.5">
              <Link
                href="/"
                className="flex items-center gap-3"
              >

                {/* LOGO */}
                <Image
                  src="/images/logo.jpg"
                  alt="Revi's Group Tuitions logo"
                  width={58}
                  height={58}
                  priority
                  className="w-[58px] h-[58px] rounded-full object-cover bg-white p-0.5 shadow-md flex-shrink-0"
                />

                {/* BRAND TEXT */}
                <div className="text-left">

                  {/* RESHAMA TEACHER & VIJAY SIR'S */}
                  <div
                    className="font-bold text-sm sm:text-base leading-tight mb-0.5"
                    style={{
                      color: C.navyDeep,
                      letterSpacing: "0.2px",
                    }}
                  >
                    Reshama Teacher &amp; Vijay Sir&apos;s
                  </div>

                  {/* REVI'S GROUP TUITIONS */}
                  <div
                    style={disp}
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-none whitespace-nowrap"
                  >
                    <span
                      style={{
                        color: C.red,
                        WebkitTextStroke: "0.3px white",
                      }}
                    >
                      REVI&apos;S
                    </span>{" "}

                    <span
                      style={{
                        color: C.navyDeep,
                      }}
                    >
                      GROUP TUITIONS
                    </span>
                  </div>

                  {/* SUBTITLE */}
                  <div
                    className="text-[9px] sm:text-[10px] tracking-widest uppercase mt-1 leading-tight"
                    style={{
                      color: C.goldDeep || C.gold,
                    }}
                  >
                    <span className="font-bold">
                      Since 2008, Std 5th to 10th
                    </span>{" "}
                    <span className="font-black">
                      (STATE BOARD &amp; CBSE)
                    </span>
                  </div>

                </div>
              </Link>
            </div>
          </div>

          {/* NAVIGATION AREA */}
          <div
            className="flex-1"
            style={{
              backgroundColor: C.navy,
            }}
          >
            <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-end">

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-lg font-bold px-3 py-2 rounded-full transition-all duration-200 hover:scale-105"
                    style={{
                      color:
                        pathname === l.href
                          ? C.navyDeep
                          : "rgba(255,255,255,0.88)",
                      backgroundColor:
                        pathname === l.href
                          ? C.gold
                          : "transparent",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}

                {/* ENQUIRE NOW */}
                <Link
                  href="/admissions"
                  className="text-sm font-extrabold px-3 py-2.5 rounded-full shadow-md ml-4 hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: C.red,
                    color: "#ffffff",
                  }}
                >
                  Enquire Now
                </Link>
              </nav>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                aria-label={
                  menuOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={menuOpen}
                className="lg:hidden text-white w-11 h-11 flex items-center justify-center rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X size={27} />
                ) : (
                  <Menu size={27} />
                )}
              </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
              <div
                className="lg:hidden px-5 pb-5 pt-2 flex flex-col gap-2 border-t"
                style={{
                  backgroundColor: C.navy,
                  borderColor:
                    "rgba(255,255,255,0.10)",
                }}
              >
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-left text-sm font-bold py-2.5 px-3 rounded-lg transition-colors"
                    style={{
                      color:
                        pathname === l.href
                          ? C.gold
                          : "rgba(255,255,255,0.88)",
                      backgroundColor:
                        pathname === l.href
                          ? "rgba(255,255,255,0.06)"
                          : "transparent",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}

                {/* MOBILE ENQUIRE NOW */}
                <Link
                  href="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-extrabold px-4 py-3 rounded-full text-center mt-2"
                  style={{
                    backgroundColor: C.red,
                    color: "#ffffff",
                  }}
                >
                  Enquire Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}