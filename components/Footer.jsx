import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { C, disp, classes } from "@/lib/theme";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: C.navyDeep }} className="pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/70 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/logo.jpg" alt="logo" width={40} height={40} className="w-10 h-10 rounded-full bg-white p-0.5" />
            <div style={{ ...disp, color: "#fff" }} className="text-lg font-extrabold">
              Revi&apos;s Group Tuitions
            </div>
          </div>
          <div style={{ color: C.gold }} className="text-xs uppercase tracking-wide mb-2 font-bold">
            Reshama Teacher &amp; Vijay Sir - Since 2008
          </div>
          <div className="text-xs text-white/40">UAM No. MH33E0114025 (MSME Regd.)</div>
        </div>

        <div>
          <div className="text-white font-extrabold mb-3 text-xs uppercase tracking-wide">Quick Links</div>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Classes", "/classes"],
              ["Results", "/results"],
              ["Admissions", "/admissions"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-extrabold mb-3 text-xs uppercase tracking-wide">Classes</div>
          <ul className="space-y-2">
            {classes.map((c) => (
              <li key={c}>Std {c}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-extrabold mb-3 text-xs uppercase tracking-wide">Contact</div>
          <div className="space-y-2">
            <div>93210 16779 / 98336 61297</div>
            <div>
              Shop No. 6/8, Sai Sankul Phase 1,
              <br />
              Khadakpada, Kalyan (W) - 421301
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.youtube.com/@revisgrouptuitions" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com/revisgroup" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/revisgroup" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white/40 text-xs mt-10 pt-6 border-t" style={{ borderColor: C.navy }}>
        &copy; 2026 Revi&apos;s Group Tuitions. All rights reserved.
      </div>
    </footer>
  );
}
