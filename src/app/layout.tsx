import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marlbro Security",
  description:
    "Marlbro Security has built a solid reputation as one of Pakistan’s most reliable and professional security services providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
