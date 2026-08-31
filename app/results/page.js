import { Trophy, Phone } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, Starburst, GradButton } from "@/components/UI";

export const metadata = {
  title: "SSC Board Results | Revi's Group Tuitions",
  description: "Real SSC board results from Revi's Group Tuitions, Kalyan (West) — consistently 100% result, year after year.",
};

const groups = [
  {
    year: "2025-26",
    students: [
      ["Veda Gunjal", "94.00%", "Vani School"], ["Dhanvi Nair", "93.00%", "Vani School"],
      ["Nishad Kudkar", "92.00%", "Vani School"], ["Ayushi Rawat", "92.00%", "DBS School"],
      ["Anushka Devade", "90.00%", "Bhagwan Bhoir School"], ["Yati Nikam", "89.00%", "Holy Cross School"],
      ["Rishujit Singh", "88.00%", "1st in Millenium School"], ["Arush Gaikwad", "87.20%", "K.C. Gandhi School"],
      ["Bhargav Gawade", "86.22%", "St. Thomas School"], ["Vedant Wakchavare", "86.70%", "K.C. Gandhi School"],
      ["Vaishnavi Katti", "85.25%", "Vani School"], ["Ayush Shetty", "83.20%", "Vani School"],
    ],
  },
  {
    year: "2024-25",
    students: [
      ["Riddhima Kalmegh", "96.20%", ""], ["Shravani Mali", "96.00%", ""],
      ["Apeksha Barvankar", "94.00%", ""], ["Sakshi Ingle", "93.00%", ""],
      ["Dhrup Rathod", "93.00%", ""], ["Aayush Dharpawar", "92.00%", ""],
      ["Aryan Pandav", "90.00%", ""], ["Rohit Choudhari", "90.00%", ""],
      ["Nikunj Kadam", "88.00%", ""], ["Mayuri Koli", "88.00%", ""],
      ["Ashwini Shribatho", "87.80%", ""], ["Vedant Roy", "86.00%", ""],
    ],
  },
  {
    year: "All-Time Toppers",
    students: [
      ["Shreya Unnithan", "96.00%", "Vani School"], ["Asmi Joshi", "95.00%", "K.C. Gandhi School"],
      ["Madhura Gaikwad", "94.60%", "Vani School"], ["Nishita Kudkar", "94.00%", "Vani School"],
      ["Himanshu Sangle", "94.00%", "Rita Memorial School"], ["Vedika Mahajan", "93.00%", ""],
      ["Tejaswini Thakur", "93.00%", "Holy Cross School"], ["Darshana Nair", "93.00%", "Vani School"],
      ["Bhargavi Vichare", "92.20%", "Vani School"], ["Arjun Sanap", "92.00%", "Rita Memorial School"],
      ["Shriya Shenoy", "90.00%", "K.C. Gandhi School"], ["Arshiya Patrale", "90.00%", "K.C. Gandhi School"],
    ],
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Starburst color={C.purple}>Consistently<br />100% Result</Starburst>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">SSC Board Results.</h1>
          <p className="text-white/85 max-w-2xl mx-auto font-medium">Real students, real percentages, year after year — remaining students score above 80%.</p>
        </div>
      </section>

      {groups.map(({ year, students }, si) => (
        <section key={year} className="py-14" style={{ backgroundColor: si % 2 === 0 ? C.sky : "#fff" }}>
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-center gap-3 mb-8">
              <Trophy size={22} color={C.red} />
              <h2 style={{ ...disp, color: C.navy }} className="text-2xl md:text-3xl font-extrabold">{year}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {students.map(([name, pct, school]) => (
                <div key={name} className="bg-white p-5 rounded-2xl shadow-md border-l-4 hover:shadow-xl hover:-translate-y-1 transition-all" style={{ borderColor: C.gold }}>
                  <div className="font-extrabold text-sm mb-1" style={{ ...disp, color: C.navy }}>{name}</div>
                  <div className="text-2xl font-extrabold mb-1" style={{ color: C.red }}>{pct}</div>
                  {school && <div className="text-xs text-gray-500">{school}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-10" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 text-center text-white/80 text-sm font-medium">
          Remaining all students in every batch scored above 80%. Full topper records are displayed at our centre in Khadakpada.
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">Your child could be on this list next year.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">Call 93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
