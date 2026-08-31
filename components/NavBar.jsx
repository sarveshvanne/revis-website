"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { C, disp, navLinks } from "@/lib/theme";

function TopTicker() {
  return (
    <div className="overflow-hidden py-1.5" style={{ backgroundColor: C.gold }}>
      <div
        className="whitespace-nowrap font-extrabold text-xs"
        style={{ color: C.navyDeep, animation: "marquee 18s linear infinite" }}
      >
        &#11088; Admissions Open for Std 5th to 10th (State Board & CBSE) — Limited Seats Available &bull;
        Consistently 100% Result Since 2008 &bull; Call 93210 16779 / 98336 61297 &bull;
        Admissions Open for Std 5th to 10th (State Board & CBSE) — Limited Seats Available &bull;
        Consistently 100% Result Since 2008 &bull;
      </div>
    </div>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <TopTicker />
      <header className="sticky top-0 z-50 shadow-xl" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Revi's Group Tuitions logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover bg-white p-0.5 shadow-md"
            />
            <div className="text-left">
              <div className="text-white text-xl font-extrabold leading-tight" style={disp}>
                Revi&apos;s <span style={{ color: C.red, WebkitTextStroke: "0.5px white" }}>Group Tuitions</span>
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: C.gold }}>
                Since 2008, Std 5th to 10th (State Board & CBSE)
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-bold px-3 py-2 rounded-full transition-all"
                style={{
                  color: pathname === l.href ? C.navyDeep : "rgba(255,255,255,0.85)",
                  backgroundColor: pathname === l.href ? C.gold : "transparent",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="text-sm font-extrabold px-5 py-2.5 rounded-full shadow-md ml-2 hover:scale-105 transition-transform"
              style={{ backgroundColor: C.red, color: "#fff" }}
            >
              Enquire Now
            </Link>
          </nav>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-5 pb-4 flex flex-col gap-2" style={{ backgroundColor: C.navy }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm font-bold py-1.5"
                style={{ color: pathname === l.href ? C.gold : "rgba(255,255,255,0.85)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-extrabold px-4 py-2.5 rounded-full text-center mt-2"
              style={{ backgroundColor: C.red, color: "#fff" }}
            >
              Enquire Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
