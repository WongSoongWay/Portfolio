import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wong Soong Way - Portfolio",
  description: "Personal portfolio showcasing my projects, skills, and experience",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
