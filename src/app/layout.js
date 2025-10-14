import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deep Debnath | Frontend Developer Portfolio",
  description:
    "Portfolio of Deep Debnath — Frontend Developer skilled in React, Next.js, Tailwind CSS, Redux Toolkit, and Framer Motion.",
  keywords: [
    "Deep Debnath",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Deep Debnath | Frontend Developer Portfolio",
    description:
      "Explore Deep Debnath's projects, skills, and contact details. Built with Next.js and modern UI libraries.",
    url: "https://my-portfolio-ob9g.vercel.app/",
    siteName: "Deep Debnath Portfolio",
    images: [
      {
        url: "https://your-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Debnath Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Debnath | Frontend Developer Portfolio",
    description: "Modern frontend developer skilled in React and Next.js.",
    images: ["https://your-portfolio.vercel.app/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
