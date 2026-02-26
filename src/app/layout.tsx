import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import BackgroundAudio from "@/components/BackgroundAudio";
import { ContentfulProvider } from "@/context/ContentfulContext";

const inter = localFont({
  src: "../assets/font/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const sora = localFont({
  src: "../assets/font/Sora/Sora-VariableFont_wght.ttf",
  variable: "--font-sora",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Vatsal Vaishnav | Frontend Developer",
  description: "Portfolio of Vatsal Vaishnav, a Frontend Developer building fast, modern, responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        <ContentfulProvider>
          <PageLoader />
          <BackgroundAudio />
          {children}
        </ContentfulProvider>
      </body>
    </html>
  );
}
