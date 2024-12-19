"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="z-10">
        <Navbar />
      </header>
      <main className="flex-grow">
        <section className="relative h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] w-full">
          <Image
            src="/hero.jpg"
            alt="TEDx NITH Event"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <div className="max-w-3xl animate-fade-in">
                <div>
                  <div className="w-32 md:w-48 -mx-3 md:-mx-4">
                    <Image
                      src="/logo-white.png"
                      className="w-full"
                      alt=""
                      height={60}
                      width={1200}
                    />
                  </div>
                  <p className="text-xl md:text-3xl text-white font-medium">
                    Innovision: ज्ञानं परमं बलम्
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6">
              <Typewriter
                words={["What is TEDx?"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h2>
            <div className="space-y-2 sm:text-base leading-relaxed font-light text-sm">
              <p>
                In the spirit of discovering and spreading ideas,{" "}
                <Link
                  href="https://www.ted.com/about/programs-initiatives/tedx-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline duration-300 transition-all ease-out"
                >
                  TED has created a program called TEDx
                </Link>
                . TEDx is a program of local, self-organized events that bring
                people together to share a TED-like experience.
              </p>
              <p>
                Our event is called TEDx NITH, where x = independently organized
                TED event. At our TEDx NITH event, TED Talks video and live
                speakers will combine to spark deep discussion and connection in
                a small group.
              </p>
              <p>
                The TED Conference provides general guidance for the TEDx
                program, but individual TEDx events, including ours, are
                self-organized.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
