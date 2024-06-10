import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import local from "next/font/local";

const outer = localFont({ src: '../../public/assets/fonts/outfit/Outfit-VariableFont_wght.ttf', display: 'swap', variable: '--font-outer' });
const youngSerif = local({ src: [{ path: '../../public/assets/fonts/young-serif/YoungSerif-Regular.ttf', weight: '400', style: 'normal' }], variable: '--young-serif' });

export const metadata: Metadata = {
  title: "Recipe",
  description: "A website where you can find lots or recipe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outer.variable} ${youngSerif.variable} font-outer`}>{children}</body>
    </html>
  );
}
