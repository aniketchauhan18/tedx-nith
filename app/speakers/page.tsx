import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// import { Playfair } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";
import { SPEAKERS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

// type Slug = {
//   current: string;
//   _type: string;
// };

// interface ISpeaker {
//   _id: string;
//   name: string;
//   slug: Slug;
//   shortBio: string;
//   Description: string;
//   speakerImageUrl: string;
// }

export const metadata: Metadata = {
  title: "Speakers",
  description: "Meet our speakers",
};

// const playFair = Playfair({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// });

export default async function Speakers() {
  await sanityFetch({
    query: SPEAKERS_QUERY,
  });

  return (
    <div>
      <header className="z-10">
        <Navbar />
      </header>
      <div className={`py-14 min-h-screen px-5 sm:px-8`}>
        <section className="min-h-[20vh] flex justify-center items-center sm:min-h-[25vh] lg:min-h-[35vh]">
          <div className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-800">
            MEET OUR <span className="text-[#EB0028] underline">SPEAKERS</span>
          </div>
        </section>
        <section className="py-10 px-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 justify-around lg:gap-16">
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  fill
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="w-full max-w-72">
              <div className="flex relative flex-col items-center justify-center  h-[16rem] sm:h-[17rem] border overflow-hidden">
                <Image
                  alt=""
                  height={800}
                  width={600}
                  className="object-cover object-top"
                  src="/speaker.png"
                />
              </div>
              <div className="pt-2">
                <h4 className="font-semibold text-lg md:text-xl">
                  Aravind Srinivas
                </h4>
                <h5 className="text-neutral-600 text-base md:text-lg">
                  CEO of Perplexity AI
                </h5>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Aravind Srinivas is an Indian-American computer scientist and
                  co-founder of Perplexity AI, specializing in conversational
                  search technology. He has a strong background in AI research
                  from leading tech companies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
