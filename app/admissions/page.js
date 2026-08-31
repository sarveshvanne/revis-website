import { CheckCircle2, Sparkles, Phone, MessageCircle } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Admissions Open | Revi's Group Tuitions",
  description: "Admissions open for Std V to X at Revi's Group Tuitions, Kalyan (West). State Board & CBSE. Limited seats. Call 93210 16779.",
};

export default function AdmissionsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>Admissions Open</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">Std V to X. State Board &amp; CBSE.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Limited seats per batch — secure your child&apos;s spot today.</p>
        </div>
      </section>

      <section style={{ background: `linear-gradient(90deg, ${C.gold}, ${C.goldDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <Sparkles size={18} color={C.navyDeep} />
          <span style={{ color: C.navyDeep }} className="font-extrabold text-sm">Special Offer: Discount on Group of 3 Admissions — Enroll Together, Save Together</span>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>What You Get</Eyebrow>
            <h2 style={{ ...disp, color: C.navy }} className="text-3xl font-extrabold mb-6">Everything included, nothing hidden.</h2>
            <div className="space-y-3">
              {[
                "State Board & CBSE curriculum", "Std V to X, all subjects under one roof", "Small batches (15-20 students)",
                "Experienced faculty since 2008", "Regular oral & written tests", "A/c classrooms", "Career guidance", "Regular parent interaction",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                  <CheckCircle2 size={18} color={C.red} />
                  <span className="text-sm font-medium text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold mb-1">Give your child the right foundation.</div>
            <div className="text-white/85 text-sm">Admissions open for Std V to X — seats are limited per batch.</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <GradButton href="tel:9321016779" icon={Phone} variant="white">Call Now</GradButton>
            <GradButton href="https://wa.me/919321016779" icon={MessageCircle} variant="outline" external>WhatsApp Us</GradButton>
          </div>
        </div>
      </section>
    </>
  );
}
