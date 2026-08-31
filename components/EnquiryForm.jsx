"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { C, disp } from "@/lib/theme";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    standard: "Std V",
    board: "State Board",
    message: "",
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `New Admission Enquiry - Revi's Group Tuitions%0A` +
      `Student Name: ${form.studentName}%0A` +
      `Parent Name: ${form.parentName}%0A` +
      `Mobile: ${form.mobile}%0A` +
      `Standard: ${form.standard}%0A` +
      `Board: ${form.board}%0A` +
      `Message: ${form.message || "-"}`;
    window.open(`https://wa.me/919321016779?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-7 border-t-4 h-fit" style={{ borderColor: C.red }}>
      <div style={{ ...disp, color: C.navy }} className="text-2xl font-extrabold mb-1">
        Enquiry Form
      </div>
      <div className="text-sm text-gray-500 mb-6">Fill this in — it opens WhatsApp with your details ready to send to us.</div>
      <div className="space-y-4">
        <input
          required
          placeholder="Student Name"
          value={form.studentName}
          onChange={update("studentName")}
          className="w-full border rounded-xl px-4 py-3 text-sm"
          style={{ borderColor: "#ddd" }}
        />
        <input
          required
          placeholder="Parent Name"
          value={form.parentName}
          onChange={update("parentName")}
          className="w-full border rounded-xl px-4 py-3 text-sm"
          style={{ borderColor: "#ddd" }}
        />
        <input
          required
          type="tel"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={update("mobile")}
          className="w-full border rounded-xl px-4 py-3 text-sm"
          style={{ borderColor: "#ddd" }}
        />
        <div className="grid grid-cols-2 gap-3">
          <select value={form.standard} onChange={update("standard")} className="border rounded-xl px-3 py-3 text-sm" style={{ borderColor: "#ddd" }}>
            {["Std V", "Std VI", "Std VII", "Std VIII", "Std IX", "Std X"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select value={form.board} onChange={update("board")} className="border rounded-xl px-3 py-3 text-sm" style={{ borderColor: "#ddd" }}>
            <option>State Board</option>
            <option>CBSE</option>
          </select>
        </div>
        <textarea
          placeholder="Message (optional)"
          value={form.message}
          onChange={update("message")}
          className="w-full border rounded-xl px-4 py-3 text-sm h-20"
          style={{ borderColor: "#ddd" }}
        />
        <button
          type="submit"
          className="w-full text-center py-3.5 rounded-full font-extrabold text-white flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
          style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}
        >
          <Send size={16} /> Send Enquiry via WhatsApp
        </button>
      </div>
    </form>
  );
}
