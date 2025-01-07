import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CircleCheck, CircleX } from "lucide-react";
import { SanityLive } from "@/sanity/lib/live";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tedx-nith.vercel.app/"),
  title: {
    template: "%s",
    default: "Home",
  },
  description:
    "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change.",
  keywords:
    "TED, TEDxNITH, TEDx, nit, hamirpur, nith, nit hamirpur, nimbus, speaker, tedx event",
  openGraph: {
    title: "TEDxNIT Hamirpur",
    description:
      "TEDxNIT Hamirpur - Talks at venue and city Auditorium, NIT Hamirpur, Hamirpur.",
    url: "https://tedx-nith.vercel.app/", // todo: change this url in future
    siteName: "TEDxNIT Hamirpur",
    images: [
      {
        url: "/logo-black.png",
        width: 800,
        height: 600,
        alt: "TEDxNIT Hamirpur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        {children}
        <Toaster
          position="top-center"
          icons={{
            success: <CircleCheck className="w-4 h-4 text-green-500" />,
            error: <CircleX className="w-4 h-4 text-red-500" />,
          }}
        />
        <SanityLive />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
