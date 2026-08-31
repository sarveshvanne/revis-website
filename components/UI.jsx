import { C, body } from "@/lib/theme";

export function Ribbon({ children, color = C.red }) {
  return (
    <div
      className="inline-block px-5 py-2 text-white font-extrabold text-sm uppercase tracking-wide shadow-lg"
      style={{
        ...body,
        backgroundColor: color,
        clipPath: "polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%, 4% 50%)",
      }}
    >
      {children}
    </div>
  );
}

export function Starburst({ children, color = C.purple }) {
  return (
    <div
      className="inline-flex items-center justify-center text-center font-extrabold text-white text-xs uppercase leading-tight px-5 py-4 rounded-full shadow-lg animate-pulse"
      style={{ backgroundColor: color, ...body, transform: "rotate(-6deg)" }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase mb-4"
      style={{ ...body, color: C.red, letterSpacing: "0.15em" }}
    >
      <span style={{ color: C.goldDeep }}>&#10022;</span>
      {children}
    </div>
  );
}

export function GradButton({ href, children, icon: Icon, variant = "red", external }) {
  const styles = {
    red: { background: `linear-gradient(135deg, ${C.red}, ${C.redDeep})`, color: "#fff" },
    gold: { background: `linear-gradient(135deg, ${C.gold}, ${C.goldDeep})`, color: C.navyDeep },
    outline: { background: "transparent", color: "#fff", border: "2px solid #fff" },
    white: { background: "#fff", color: C.red },
  };
  const extraProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...extraProps}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200"
      style={styles[variant]}
    >
      {Icon && <Icon size={18} />} {children}
    </a>
  );
}
