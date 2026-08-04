import localFont from "next/font/local";
import "./globals.css";
import "./theme-woody.css";
import "./woody-v2.css";

// 205TF Exposure — licensed brand font for Woody. Hierarchy by WIDTH, not weight.
const exposureDisplay = localFont({
  src: [
    { path: "./fonts/Exposure-90.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-90Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-display",
  display: "swap",
});
const exposureBody = localFont({
  src: [
    { path: "./fonts/Exposure-40.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-40Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-serif",
  display: "swap",
});
const exposureCond = localFont({
  src: [
    { path: "./fonts/Exposure-10.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-10Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-cond",
  display: "swap",
});

export const metadata = {
  title: "Bar Woody — de stadsherberg van nu",
  description:
    "Woody is geen bar. Woody is een vriend die bier tapt. Zelf tappen, samen ontdekken, blijven hangen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body
        className={`theme-woody v2 ${exposureDisplay.variable} ${exposureBody.variable} ${exposureCond.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
