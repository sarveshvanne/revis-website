import Image from "next/image";
import { Target, Eye, Heart, Phone } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";

export const metadata = {
  title: "About Us | Revi's Group Tuitions",
  description: "Revi's Group Tuitions was established in 2008 by Reshama V. Vanne and Vijay R. Vanne, bringing 20+ years of teaching experience to Khadakpada, Kalyan (West).",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>About Revi&apos;s Group Tuitions</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">Building Strong Foundations Since 2008.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Run by Reshama Teacher &amp; Vijay Sir, right here in Khadakpada, Kalyan (W).</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 style={{ ...disp, color: C.navy }} className="text-3xl font-extrabold mb-5">20+ years of teaching experience, with an institute since 2008.</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Revi&apos;s Group Tuitions was formally established in 2008 by <strong>Reshama V. Vanne</strong> and <strong>Vijay R. Vanne</strong> —
              known to generations of students as Reshama Teacher and Vijay Sir. Our educators had already been guiding students for years
              before the institute itself opened its doors.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, that adds up to over two decades of hands-on classroom experience, teaching Std V to X, State Board and CBSE,
              from the same neighbourhood in Khadakpada, Kalyan (West).
            </p>
            <div className="italic text-lg" style={{ ...disp, color: C.red }}>&quot;Namo Budhai, Namo Bhimai&quot;</div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4" style={{ borderColor: C.gold }}>
            <Image src="/images/balloon.jpg" alt="Opening day at Revi's Group Tuitions" width={600} height={400} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-6">
          {[
            [Target, "Our Mission", "To build strong conceptual foundations in every student — real understanding that lasts beyond Std X."],
            [Eye, "Our Vision", "To be the most trusted name for Std V–X tuitions in Kalyan, known for teaching quality and results."],
            [Heart, "Why Parents Trust Us", "Small batches, regular communication, and 20+ years of the same two people overseeing every student's progress."],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="bg-white p-7 rounded-2xl shadow-md border-t-4 hover:shadow-xl transition-shadow" style={{ borderColor: C.red }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: C.sky }}>
                <Icon size={22} color={C.red} />
              </div>
              <div className="font-extrabold text-lg mb-2" style={{ ...disp, color: C.navy }}>{title}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 style={{ ...disp, color: C.navy }} className="text-3xl font-extrabold mb-10">From one classroom to a name Kalyan parents recognise.</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              ["2008", "Revi's Group Tuitions formally established in Khadakpada, Kalyan (W)."],
              ["Since", "Consistently 100% SSC results, batch after batch."],
              ["2024-25", "Riddhima Kalmegh tops our batch with 96.20%."],
              ["Today", "20+ years combined teaching experience, Std V–X."],
            ].map(([y, t]) => (
              <div key={y} className="p-6 rounded-2xl shadow-md hover:-translate-y-1 transition-transform" style={{ background: `linear-gradient(145deg, ${C.navy}, ${C.navyDeep})` }}>
                <div style={{ ...disp, color: C.gold }} className="text-2xl font-extrabold mb-2">{y}</div>
                <div className="text-white/80 text-sm leading-relaxed">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">Meet the team behind two decades of results.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">Call 93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
