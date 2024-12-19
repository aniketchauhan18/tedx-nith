import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "TEDx NIT Hamirpur, date - 13 February 2024  and theme (Innovision - ज्ञानं परमं बलम्",
  // todo: change description later
};

export default async function AboutPage() {
  await sanityFetch({
    query: MEMBERS_QUERY,
  });
  // console.log(membersDetails);

  const linkClasses: string =
    "font-light text-blue-600 hover:underline hover:underline-offset-2 transition-all duration-300 ease-out";
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <header>
        <Navbar />
      </header>
      <div className="relative h-[40vh] sm:h-[70vh] bg-black">
        <Image
          src="/about/temp-tedx-team.jpg"
          alt="TEDx Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute bottom-3 left-2 sm:bottom-5 sm:left-5 flex items-center justify-center w-full sm:w-full sm:justify-start">
          <div className="flex gap-2 items-center text-3xl md:text-4xl font-bold text-white">
            <h3>Meet</h3>
            <div className="w-[11rem] md:w-[13.5rem] -mx-3 md:-mx-4">
              <Image
                src="/logo-white.png"
                className="w-full"
                alt=""
                height={60}
                width={1200}
              />
            </div>
            <h3>Team</h3>
          </div>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center mt-5 p-3">
        <div className="w-full max-w-7xl">
          <h3 className="font-extrabold text-3xl">
            About{" "}
            <span className="text-thunderbird-600/80 font-extrabold">TEDx</span>
          </h3>
          <div className="font-medium text-lg text-neutral-600">
            x = independently organized event
          </div>
        </div>
        <div className="my-5 max-w-7xl">
          <p className="font-light">
            In the spirit of discovering and spreading ideas, TEDx is a program
            of local, self-organized events that bring people together to share
            a TED-like experience. At a TEDx event, TED Talks video and live
            speakers combine to spark deep discussion and connection. These
            local, self-organized events are branded TEDx, where x =
            independently organized TED event. The TED Conference provides
            general guidance for the TEDx program, but individual TEDx events
            are self-organized. (Subject to certain rules and regulations.)
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/logo-black.png"
            width={1000}
            height={100}
            alt=""
            className="object-cover bg-center w-96"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center mt-5 p-3">
        <div className="w-full max-w-7xl">
          <h3 className="font-extrabold text-3xl">
            About{" "}
            <span className="text-thunderbird-600/80 font-extrabold">TED</span>
          </h3>
        </div>
        <div className="my-5 w-full max-w-7xl">
          <p className="font-light">
            TED is a nonprofit, nonpartisan organization dedicated to
            discovering, debating and spreading ideas that spark conversation,
            deepen understanding and drive meaningful change. Our organization
            is devoted to curiosity, reason, wonder and the pursuit of knowledge
            — without an agenda. We welcome people from every discipline and
            culture who seek a deeper understanding of the world and connection
            with others, and we invite everyone to engage with ideas and
            activate them in your community.
          </p>
          <p className="font-light my-5">
            TED began in 1984 as a conference where Technology, Entertainment
            and Design converged, but today it spans a multitude of worldwide
            communities and initiatives exploring everything from science and
            business to education, arts and global issues. In addition to the
            TED Talks curated from our annual conferences and published on
            TED.com, we produce{" "}
            <Link
              href="https://audiocollective.ted.com/"
              className={linkClasses}
              target="_blank"
            >
              original podcasts
            </Link>
            ,{" "}
            <Link
              href="https://www.ted.com/series"
              className={linkClasses}
              target="_blank"
            >
              short video series
            </Link>
            ,{" "}
            <Link
              href="https://ed.ted.com/"
              className={linkClasses}
              target="_blank"
            >
              animated educational lessons (TED-Ed)
            </Link>{" "}
            and TV programs that are translated into more than 100 languages and
            distributed via partnerships around the world. Each year, thousands
            of independently run{" "}
            <Link
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              className={linkClasses}
              target="_blank"
            >
              TEDx events
            </Link>{" "}
            bring people together to share ideas and bridge divides in
            communities on every continent. Through the{" "}
            <Link
              className={linkClasses}
              href="https://www.audaciousproject.org/"
              target="_blank"
            >
              Audacious Project
            </Link>
            , TED has helped catalyze more than $3 billion in funding for
            projects that seek to make the world more beautiful, sustainable and
            just. In 2020, TED launched{" "}
            <Link
              href="https://countdown.ted.com/"
              className={linkClasses}
              target="_blank"
            >
              Countdown
            </Link>
            , an initiative to accelerate solutions to the climate crisis and
            mobilize a movement for a net-zero future, and in 2023 TED launched{" "}
            <Link
              href="https://www.ted.com/about/programs-initiatives/teddemocracy"
              className={linkClasses}
              target="_blank"
            >
              TED Democracy
            </Link>{" "}
            to spark a new kind of conversation focused on realistic pathways
            towards a more vibrant and equitable future. View a full list of{" "}
            <Link
              href="https://www.ted.com/about/programs-initiatives"
              target="_blank"
              className={linkClasses}
            >
              TED&apos;s many programs and initiatives.
            </Link>
          </p>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
