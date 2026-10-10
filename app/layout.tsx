import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
});

const playfairDisplay = Playfair_Display({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Stay Treasure Cay | Treasure Cay, Bahamas",
  description:
    "Stay Treasure Cay — beautiful vacation accommodations, turquoise waters, white-sand beaches and unforgettable island days in Treasure Cay, Abaco, Bahamas.",
};

export const viewport: Viewport = {
  themeColor: "#083f46",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
