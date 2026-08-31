import { MapPin, Phone, Clock, Youtube, Instagram, Facebook, Star, MessageCircle } from "lucide-react";
import { C, disp } from "@/lib/theme";
import { Ribbon, GradButton } from "@/components/UI";

export const metadata = {
  title: "Contact Us | Revi's Group Tuitions",
  description: "Contact Revi's Group Tuitions — Shop No. 6/8, Sai Sankul Phase 1, Khadakpada, Kalyan (West). Call 93210 16779 / 98336 61297.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 py-14 text-center">
          <Ribbon>Contact Us</Ribbon>
          <h1 style={{ ...disp, color: "#fff" }} className="text-4xl md:text-5xl font-extrabold mt-5 mb-4">Come visit, call, or message us.</h1>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4" style={{ borderColor: C.gold, minHeight: 380 }}>
            <iframe
              title="Revi's Group Tuitions Location"
              width="100%"
              height="100%"
              style={{ minHeight: 380, border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=Sai+Sankul+Phase+1,+Sai+Chowk,+Khadakpada,+Kalyan+West&output=embed"
            />
          </div>
          <div className="space-y-5">
            {[
              [MapPin, "Address", "Shop No. 6/8, Sai Sankul Phase 1, Nr. Sai Sagar Hotel, Sai Chowk, Khadakpada, Kalyan (W) - 421301"],
              [Phone, "Phone", "93210 16779 (Reshama V. Vanne) / 98336 61297 (Vijay R. Vanne)"],
              [Clock, "Timings", "Batches run in the afternoon/evening — timings adjusted to school hours. Call to confirm your child's slot."],
            ].map(([Icon, t, d]) => (
              <div key={t} className="bg-white p-6 rounded-2xl shadow-md flex gap-4 items-start hover:shadow-xl transition-shadow">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: C.sky }}>
                  <Icon size={20} color={C.red} />
                </div>
                <div>
                  <div className="font-extrabold text-sm mb-1" style={{ ...disp, color: C.navy }}>{t}</div>
                  <div className="text-sm text-gray-600">{d}</div>
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <GradButton href="tel:9321016779" icon={Phone} variant="red">Call Now</GradButton>
              <GradButton href="https://wa.me/919321016779" icon={MessageCircle} variant="gold" external>WhatsApp</GradButton>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.youtube.com/@revisgrouptuitions" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" style={{ backgroundColor: C.red }}><Youtube size={20} color="#fff" /></a>
              <a href="https://instagram.com/revisgroup" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}><Instagram size={20} color="#fff" /></a>
              <a href="https://facebook.com/revisgroup" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" style={{ backgroundColor: "#1877F2" }}><Facebook size={20} color="#fff" /></a>
              <a href="https://www.google.com/search?q=revisgrouptuition" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform" style={{ backgroundColor: C.gold }}><Star size={20} color={C.navyDeep} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})` }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div style={{ ...disp, color: "#fff" }} className="text-2xl md:text-3xl font-extrabold">We&apos;re just a call away.</div>
          <GradButton href="tel:9321016779" icon={Phone} variant="white">93210 16779</GradButton>
        </div>
      </section>
    </>
  );
}
