import React from "react";
import Image from "next/image";

export default function RegisterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <div className="relative min-h-screen w-[50vw] hidden lg:flex bg-neutral-700">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover bg-center"
            src="/auth/tedx-speaker.jpg"
            alt="tedx speaker"
            width={960}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Ideas Worth Spreading</h1>
            {/* <p className="text-lg opacity-90 flex items-center">
              Join us at{" "}
              <div className="w-28 h-12 flex justify-center items-center">
                <Image 
                  src="/about/ted.png"
                  alt="TEDx NITH"
                  width={200}
                  height={50}
                  className="w-full h-full"
                />
              </div>
            </p> */}
          </div>
        </div>
      </div>
      <div className="lg:w-[50vw] w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
