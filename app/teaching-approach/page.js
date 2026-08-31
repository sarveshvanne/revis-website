import { Phone } from "lucide-react";
import { C, disp, body } from "@/lib/theme";
import { Ribbon, Eyebrow, GradButton } from "@/components/UI";

export const metadata = {
  title: "Teaching Approach | Revi's Group Tuitions",
  description: "Concept-based learning, small batches, regular tests and progress reports — how Revi's Group Tuitions teaches Std V to X in Kalyan (West).",
};

const timetable = [
  ["2:00-3:30 PM", ["Science (E)", "English (E)", "Maths (E)", "Science (E)", "English (E)", "Weak Topic (W)", "Pending (W)"]],
  ["3:45-5:15 PM", ["Maths (W)", "Science (W)", "English (W)", "Maths (W)", "Science (W)", "Practice Qs", "Previous Yr Qs"]],
  ["6:30-8:00 PM", ["Homework", "Test/Quiz", "Homework", "NCERT Practice", "Sample Paper", "Revision", "Next Wk Plan"]],
  ["8:00-9:00 PM", ["SST (E)", "Hindi (E)", "Computer (E)", "SST (E)", "Weekly Revision", "Free Read", "Early Sleep"]],
];

export default function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>How We Teach</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">Better Guidance. Better Concepts. Better Future.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Not just what we teach — how we make sure it actually sticks.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["Concept-Based Learning", "Understanding concepts instead of simply memorising answers — marks follow naturally after that."],
            ["Small Batches", "15-20 students per batch, so every child gets seen, not just seated in a crowd."],
            ["Doubt Clearing", "Students get real opportunities to ask, clarify, and strengthen understanding — same week."],
            ["Regular Tests", "Continuous oral and written assessment to track academic progress honestly."],
            ["Progress Reports", "Parents get clarity on exactly where their child is doing well, and where to focus at home."],
            ["Revision & Practice", "Regular reinforcement of important concepts — syllabus finished with time to spare."],
          ].map(([t, d]) => (
            <div key={t} className="p-6 rounded-2xl shadow-md border-t-4 hover:shadow-xl transition-shadow" style={{ backgroundColor: C.sky, borderColor: C.gold }}>
              <div className="font-extrabold text-base mb-2" style={{ ...disp, color: C.navy }}>{t}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5">
          <Eyebrow>Sample Weekly Study Timetable</Eyebrow>
          <h2 style={{ ...disp, color: C.navy }} className="text-3xl font-extrabold mb-2">A structure that builds discipline, not just attendance.</h2>
          <p className="text-gray-500 text-sm mb-8">Sample only — timings adjustable to your child&apos;s school schedule.</p>
          <div className="overflow-x-auto rounded-2xl shadow-md border bg-white" style={{ borderColor: "#eee" }}>
            <table className="w-full text-xs md:text-sm text-left" style={body}>
              <thead>
                <tr style={{ backgroundColor: C.navy }} className="text-white">
                  <th className="p-3 font-bold">Time</th>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <th key={d} className="p-3 font-bold">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {timetable.map(([time, row]) => (
                  <tr key={time} className="border-t" style={{ borderColor: "#eee" }}>
                    <td className="p-3 font-semibold" style={{ color: C.red }}>{time}</td>
                    {row.map((cell, i) => <td key={i} className="p-3 text-gray-600">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-gray-500 mt-3">E = Easy Subject (score booster) | W = Weak Subject (needs more focus)</div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">Discipline today. Success tomorrow.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">Call 93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
