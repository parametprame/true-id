import type { NextPageWithLayout } from "./_app";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center py-16 md:pt-48 md:pb-28 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          <div className="md:w-[430px] md:text-left text-center order-2 md:order-1">
            <p className="text-4xl md:text-6xl font-bold py-5 md:py-0">
              Wolf Door Pass
            </p>
            <p className="text-2xl md:text-4xl mt-2 font-bold">
              Your pass to the new experience
            </p>
            <p className="text-base mt-3 md:mt-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
              sapien ullamcorper nulla turpis. At placerat eleifend ullamcorper
              quis semper vestibulum bibendum consequat.
            </p>
            <div className="flex my-4 justify-center mt-10 md:my-20">
              <button
                type="button"
                className="w-full text-white bg-[#E2211C] hover:bg-[#f55e5b] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Buy Pass
              </button>
              <button
                type="button"
                className="w-full border-2 border-black	hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sell Pass
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <video
              autoPlay
              loop
              muted
              className="w-full max-w-full h-auto rounded-2xl"
            >
              <source src="/assets/Rare.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <div className="my-20">
          <p className="text-2xl md:text-4xl font-bold text-center">
            Wolf Door Passes are available for 5000
          </p>
        </div>
        <div className="my-20">
          <p className="text-2xl md:text-6xl font-bold text-center">Rarity</p>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
