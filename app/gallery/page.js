import Image from "next/image";
import { Phone } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

export const metadata = {
  title: "Gallery | Revi's Group Tuitions",
  description: "Photos from Revi's Group Tuitions — our classroom, opening day, and students at Khadakpada, Kalyan (West).",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>Gallery</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">A look inside Revi&apos;s Group Tuitions.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Our classroom, our opening day, and the people behind the results.</p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 hover:scale-[1.02] transition-transform" style={{ borderColor: C.gold }}>
              <Image src="/images/storefront.jpg" alt="Classroom entrance" width={600} height={400} className="w-full h-72 object-cover" />
              <div className="p-3 bg-white text-xs font-bold text-center" style={{ color: C.navy }}>Our Centre — Khadakpada, Kalyan (W)</div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 hover:scale-[1.02] transition-transform" style={{ borderColor: C.gold }}>
              <Image src="/images/balloon.jpg" alt="Opening day" width={600} height={400} className="w-full h-72 object-cover" />
              <div className="p-3 bg-white text-xs font-bold text-center" style={{ color: C.navy }}>Opening Day Celebrations</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 hover:scale-[1.01] transition-transform" style={{ borderColor: C.gold }}>
            <Image src="/images/family.jpg" alt="Students learning" width={1000} height={400} className="w-full h-80 object-cover" />
            <div className="p-3 bg-white text-xs font-bold text-center" style={{ color: C.navy }}>Focused Learning, Every Session</div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-10">
            More photos from classroom activities, tests, and parent meetings will be added regularly — follow @revisgroup on Instagram &amp; Facebook.
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">Come see the classroom for yourself.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">Call 93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
