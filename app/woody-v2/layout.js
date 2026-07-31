import localFont from "next/font/local";
import "../taphuys-woody/theme-woody.css";
import "./woody-v2.css";

// 205TF Exposure — licensed brand font for Woody. Hierarchy by WIDTH, not weight.
// (Same faces as taphuys-woody-2; referenced from that folder, not duplicated.)
const exposureDisplay = localFont({
  src: [
    { path: "../taphuys-woody-2/fonts/Exposure-90.woff2", weight: "400", style: "normal" },
    { path: "../taphuys-woody-2/fonts/Exposure-90Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-display",
  display: "swap",
});
const exposureBody = localFont({
  src: [
    { path: "../taphuys-woody-2/fonts/Exposure-40.woff2", weight: "400", style: "normal" },
    { path: "../taphuys-woody-2/fonts/Exposure-40Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-serif",
  display: "swap",
});
const exposureCond = localFont({
  src: [
    { path: "../taphuys-woody-2/fonts/Exposure-10.woff2", weight: "400", style: "normal" },
    { path: "../taphuys-woody-2/fonts/Exposure-10Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-cond",
  display: "swap",
});

export const metadata = {
  title: "Woody — v2",
  description:
    "Woody v2: sticky nav-menu, schoon hero en een info-pagina in twee kolommen. Woody's huisstijl (Exposure + bordeaux/crème/mosterd).",
};

export default function WoodyV2Layout({ children }) {
  return (
    <div
      className={`theme-woody v2 ${exposureDisplay.variable} ${exposureBody.variable} ${exposureCond.variable}`}
    >
      {children}
    </div>
  );
}
