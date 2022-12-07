import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import ScrollCarousel from "../core/components/home/ScrollCarousel";

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
            <p className="text-base my-6 md:mt-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
              sapien ullamcorper nulla turpis. At placerat eleifend ullamcorper
              quis semper vestibulum bibendum consequat.
            </p>
            <div className="flex my-4 justify-center my-3 md:my-20">
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
        <div className="my-10 md:my-14">
          <p className="text-lg md:text-2xl font-bold text-center">
            Wolf Door Passes are available for 5000
          </p>
        </div>
        <div className="my-4">
          <p className="text-2xl md:text-4xl font-bold text-center pb-5">
            Rarity
          </p>
          <div className="mt-10">
            <p className="text-lg md:text-xl font-bold text-center">
              3 LEVEL TO ENHANCE YOUR EXPERIENCE
            </p>
            <p className="my-2 text-base text-center">
              One Pass , Many mission to explore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 content-center mt-12">
            <div>
              <video
                autoPlay
                loop
                muted
                className="w-full max-w-full h-auto rounded-2xl"
              >
                <source src="/assets/Common.mp4" type="video/mp4" />
              </video>

              <p className="text-center text-xl font-bold my-5">Common</p>
              <p className="text-center text-lg">
                Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
                sapien ullamcorper nulla
              </p>
              <p className="text-center text-xl font-bold my-5">TOTAL : XXXX</p>
            </div>
            <div>
              <video
                autoPlay
                loop
                muted
                className="w-full max-w-full h-auto rounded-2xl"
              >
                <source src="/assets/Uncommon.mp4" type="video/mp4" />
              </video>
              <p className="text-center text-xl font-bold my-5">Uncommon</p>
              <p className="text-center text-lg">
                Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
                sapien ullamcorper nulla
              </p>
              <p className="text-center text-xl font-bold my-5">TOTAL : XXXX</p>
            </div>
            <div>
              <video
                autoPlay
                loop
                muted
                className="w-full max-w-full h-auto rounded-2xl"
              >
                <source src="/assets/Rare.mp4" type="video/mp4" />
              </video>
              <p className="text-center text-xl font-bold my-5">Rare</p>
              <p className="text-center text-lg">
                Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
                sapien ullamcorper nulla
              </p>
              <p className="text-center text-xl font-bold my-5">TOTAL : XXXX</p>
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-center pt-20 pb-10">
            WOLF DOOR PRIVILEDGES
          </p>
          <div className="flex justify-center">
            <ul className="list-disc text-sm md:text-base">
              <li>
                nulla turpis. At placerat eleifend ullamcorper quis semper
                vestibulum bibendum consequat.
              </li>
              <li>
                nulla turpis. At placerat eleifend ullamcorper quis semper
                vestibulum bibendum consequat.
              </li>
              <li>
                nulla turpis. At placerat eleifend ullamcorper quis semper
                vestibulum bibendum consequat.
              </li>
              <li>
                nulla turpis. At placerat eleifend ullamcorper quis semper
                vestibulum bibendum consequat.
              </li>
              <li>
                nulla turpis. At placerat eleifend ullamcorper quis semper
                vestibulum bibendum consequat.
              </li>
            </ul>
          </div>
          <div className="flex justify-center pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 content-center">
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
            </div>
          </div>
          <div className="pt-20 pb-10">
            <p className="text-2xl md:text-4xl font-bold text-center ">
              OWN YOUR LOOK
            </p>
            <p className="text-2xl md:text-4xl font-bold text-center ">
              WHO DO YOU WANT TO BE ?
            </p>
            {/* TODO: Image Slide */}
            <ScrollCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
