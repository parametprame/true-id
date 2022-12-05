import type { NextPageWithLayout } from "./_app";
import Image from "next/image";

const Home: NextPageWithLayout = () => {
  return (
    <section title="general-hero-section">
      <div className="flex items-center justify-center py-16 md:pt-48 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32 content-center">
          <div className="md:w-[430px] md:text-left text-center">
            <p className="text-4xl md:text-6xl font-bold">Wolf Door Pass</p>
            <p className="text-2xl md:text-4xl font-bold">
              Your pass to the new experience
            </p>
            <p className="text-base mt-3 md:mt-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
              sapien ullamcorper nulla turpis. At placerat eleifend ullamcorper
              quis semper vestibulum bibendum consequat.
            </p>
            <div className="flex my-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Default
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Default
              </button>
            </div>
          </div>
          <div className="w-full">
            <img alt="Image" src="https://via.placeholder.com/500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
