import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CircleCheck, CircleX } from "lucide-react";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | TEDxNITH",
    default: "TEDxNITH",
  },
  description:
    "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. ",
  keywords:
    "TED,  TEDxNITH, TEDx, nit, hamirpur, nith, nit hamirpur, nimbus, speaker, tedx event",
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
      </body>
    </html>
  );
}
