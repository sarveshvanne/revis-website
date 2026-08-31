import { Phone } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

export const metadata = {
  title: "Classes V to X | Revi's Group Tuitions",
  description: "Std V to X tuition classes at Revi's Group Tuitions, Kalyan (West) — State Board & CBSE, Maths, Science, English, SST, Hindi.",
};

const rows = [
  ["Std V", "Foundation Building", "The base year. We build study habits and comfort with every subject before the syllabus gets harder."],
  ["Std VI", "Concept Strengthening", "Concepts get reinforced with more practice, so gaps from primary school don't carry forward silently."],
  ["Std VII", "Academic Development", "A step up in independence — students solve more on their own, with our doubt-clearing as the safety net."],
  ["Std VIII", "Strong Conceptual Preparation", "The bridge year before board-level pressure begins. We tighten fundamentals across every subject."],
  ["Std IX", "Board-Oriented Preparation", "SSC board patterns are introduced properly — paper structure, time management, answer-writing."],
  ["Std X", "Board Examination Preparation", "Full board-exam mode: regular tests, progress tracking, revision built around weak areas."],
];

export default function ClassesPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>Classes V to X</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">Std V to X, State Board &amp; CBSE.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Every standard taught with a clear focus — not the same lesson repeated at different speeds.</p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {rows.map(([std, focus, desc], i) => (
            <div key={std} className="bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-4 hover:shadow-xl transition-shadow">
              <div className="p-6 flex flex-col items-center justify-center text-white" style={{ background: i % 2 === 0 ? `linear-gradient(145deg, ${C.navy}, ${C.navyDeep})` : `linear-gradient(145deg, ${C.red}, ${C.redDeep})` }}>
                <div style={disp} className="text-4xl font-extrabold">{std}</div>
              </div>
              <div className="p-6 md:col-span-3">
                <div className="font-extrabold text-lg mb-1" style={{ ...disp, color: C.navy }}>{focus}</div>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{desc}</p>
                <div className="text-xs font-bold uppercase tracking-wide" style={{ color: C.red }}>
                  Subjects: <span className="text-gray-500 font-medium normal-case">Maths, Science, English, SST, Hindi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">Not sure which batch fits your child? Just ask us.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">Call 93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
