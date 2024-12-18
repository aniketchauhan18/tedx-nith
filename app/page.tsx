import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="z-10">
        <Navbar />
      </header>
      <div className="py-14">
        <section className="relative h-screen w-full">
          <Image
            src="/hero.jpg"
            alt="TEDx NITH Event"
            fill
            priority
            className="object-cover brightness-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* Content Container */}
          <div className="absolute bottom-12 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <div className="max-w-3xl space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    TED
                    <span className="text-2xl md:text-3xl -mt-6 inline-block">
                      x
                    </span>
                    NITH
                  </h1>
                  <p className="text-xl md:text-3xl font-medium bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    Innovision: ज्ञानं परमं बलम्
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
