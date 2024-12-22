import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SponsorsPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="py-14 min-h-screen w-full">
        <div className="w-full min-h-[25vh] sm:min-h-[35vh] lg:min-h-[40vh] flex flex-col justify-center items-center space-y-1 bg-black text-white">
          <div className="grid items-center h-full min-w-full grid-cols-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <div className="w-full text-right font-bold">
              Our
            </div>
            <div className="w-full bg-thunderbird-600 font-bold text-left text-white py-1">
              Sponsors
            </div>
          </div>
          <div className="flex justify-center items-center px-5">
              <p className="w-full text-xs sm:text-base md:text-lg text-neutral-300 max-w-4xl font-normal text-center">
              We are grateful to our sponsors who help make the event possible. Their support enables us to bring innovative ideas and inspiring stories to our community.
              </p>
          </div>
        </div>  
        <div>
        <div className="grid mt-10 items-center h-full min-w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
            <div className="text-left px-2 py-2 bg-black w-fit text-white font-bold">
              Our valued partners
            </div>
          </div>
        </div>
        <div className="px-5 grid md:grid-cols-2 lg:grid-cols-3 my-10 m-5">
          <div className="h-72 flex border-b md:border-r justify-center items-center">
            
          </div>
          <div className="h-72 flex border-b lg:border-r justify-center items-center">

          </div>
          <div className="h-72 flex border-b md:border-r lg:border-r-0 justify-center items-center">

          </div>
          <div className="h-72 flex border-b lg:border-r justify-center items-center">

          </div>
          <div className="h-72 flex border-b md:border-r justify-center items-center">

          </div>
          <div className="h-72 flex border-b justify-center items-center">

          </div>
          <div className="h-72 flex border-b md:border-r lg:border-b-0 justify-center items-center">

          </div>
          <div className="h-72 flex border-b justify-center lg:border-b-0 items-center">

          </div>
          <div className="h-72 flex border-b-0 md:border-r lg:border-r-0 lg:border-l lg:border-b-0 justify-center items-center">

          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
