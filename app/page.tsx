"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CountdownTimer from "@/components/timer-component";
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

          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8">
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
                  {/* <p className="text-xl md:text-3xl text-white font-medium">
                    Innovision: ज्ञानं परमं बलम्
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto py-16">
          <div className="max-w-7xl mx-auto space-y-6  ">
            <h2 className="text-3xl font-bold mb-6 px-4 ">
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
            <div className="space-y-2 sm:text-base leading-relaxed font-light text-sm  px-4">
              <p>
                In the spirit of discovering and spreading ideas,{" "}
                <Link
                  href="https://www.ted.com/about/programs-initiatives/tedx-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-thunderbird-600 hover:underline duration-300 transition-all ease-out"
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
        <section className="flex flex-col bg-white justify-center items-center h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]">
          <div className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-center font-bold">
            <h1 className="tracking-widest">INNOVISION</h1>
            <p className="text-thunderbird-600">ज्ञानं परमं भूषणम्</p>
          </div>
          <div className="py-10">
            <CountdownTimer />
          </div>
        </section>
        <section className="min-h-[50vh] grid md:grid-cols-2 items-center gap-12 px-2 md:px-16 py-5 text-neutral-950">
          <div className="flex flex-col items-start space-y-2 w-full p-8">
            <h2 className="text-lg md:text-xl  text-thunderbird-600 font-bold tracking-tight">
              Event Venue
            </h2>
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 ">
                  Auditorium, NIT Hamirpur
                </p>
              </div>
            </div>
            <div>
              <p className="text-neutral-600">
                Join us for TEDx NITH on February 13, 2025, at the auditorium!
                Discover innovative ideas and inspiring talks from thought
                leaders. Don&lsquo;t miss out{" "}
                <Link
                  href="/register"
                  className="font-light text-blue-600 hover:underline transition-all duration-300 ease-out"
                >
                  register now
                </Link>{" "}
                to secure your spot and be part of this exciting event!
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center p-4">
            <div className="relative group">
              <Image
                src="/tedx-temp.jpg"
                className="w-full max-w-2xl"
                alt="TEDx Event Venue"
                height={600}
                width={1200}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>
        <section className="w-full items-center px-2 md:px-16 py-5 text-neutral-950">
          <div className="flex flex-col items-start space-y-2 w-full p-8">
            <h2 className="text-lg md:text-xl  text-thunderbird-600 font-bold tracking-tight">
              Upcoming Speakers
            </h2>
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 ">
                  Visionaries & Innovators
                </p>
              </div>
            </div>
            <div>
              <p className="text-neutral-600">
                Get ready to be inspired by our lineup of extraordinary{" "}
                <Link
                  href="/speakers"
                  className="text-thunderbird-600 hover:underline duration-300 transition-all ease-out"
                >
                  speakers
                </Link>{" "}
                at TEDx NITH. From groundbreaking scientists to creative
                artists, each speaker brings a unique perspective that will
                challenge your thinking and ignite your imagination.
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
