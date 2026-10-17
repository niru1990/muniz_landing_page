import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { publicPath } from "@/lib/publicPath";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.GITHUB_PAGES === "true" ? "/muniz_landing_page" : "";

export const metadata: Metadata = {
  title: "Taller Francisco Javier Muñiz N° 531",
  description: "Taller Francisco Javier Muñiz N° 531",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const basePath = process.env.GITHUB_PAGES === "true" ? "/muniz_landing_page" : "";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div
          className="min-h-full flex flex-col"
          style={{
            backgroundImage: `url(${basePath}/logia.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
