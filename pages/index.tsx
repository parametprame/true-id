import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import ScrollCarousel from "../core/components/home/ScrollCarousel";

const Home: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto px-4 text-white">
      <div className="flex flex-col items-center justify-center py-16 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          <div className="md:w-[430px] md:text-left text-center order-2 md:order-1">
            <p className="text-4xl md:text-6xl font-extrabold py-5 md:py-0 text-primary-500">
              Wolf Door Pass
            </p>
            <p className="text-2xl md:text-4xl mt-2 font-bold text-white">
              Your pass to the new experience
            </p>
            <p className="text-base my-6 md:mt-6 text-white">
              Lorem ipsum dolor sit amet consectetur. Ipsum semper id augue
              sapien ullamcorper nulla turpis. At placerat eleifend ullamcorper
              quis semper vestibulum bibendum consequat.
            </p>

            <button
              type="button"
              className="w-[100px] md:w-[205px] text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy Pass
            </button>
            <p className="text-base my-3 text-white">
              Explore the 2nd sale market on....
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="md:h-[500px] md:w-[500px] h-[250px] w-[250px] relative">
              <Image
                src="/assets/franc.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="my-10 md:my-14">
          <p className="text-lg md:text-2xl font-bold text-center">
            Wolf Door Passes are available for 20,000 - 10,000
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-4xl font-bold text-center pb-5">
            Rarity
          </p>
          <div className="mt-10">
            <p className="text-lg md:text-xl font-bold text-center">
              3 LEVELS TO ENHANCE YOUR EXPERIENCE
            </p>
            <p className="my-2 text-base text-center">
              One Pass , Many mission to explore
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 content-center my-10 md:my-14">
            <div className="flex flex-col justify-center items-center">
              <div className="md:h-[240px] md:w-[430px] h-[100px] w-[230px] relative">
                <Image
                  src="/assets/Normal Transpalent.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>

              <p className="text-center text-xl font-bold my-5">Common</p>
              <p className="text-center text-xl font-bold">TOTAL : XXXX</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="md:h-[240px] md:w-[430px] h-[100px] w-[230px] relative">
                <Image
                  src="/assets/Rare Transpalent.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <p className="text-center text-xl font-bold my-5">Rare</p>
              <p className="text-center text-xl font-bold">TOTAL : XXXX</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="md:h-[240px] md:w-[430px] h-[100px] w-[230px] relative">
                <Image
                  src="/assets/UncommonTranspalent.png"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <p className="text-center text-xl font-bold my-5">Legendary</p>
              <p className="text-center text-xl font-bold">TOTAL : XXXX</p>
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-center pb-10">
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
          <div className="flex justify-center my-10 md:my-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 content-center">
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
              <img alt="Image" src="https://via.placeholder.com/100" />
            </div>
          </div>
          <div className="my-10 md:my-14">
            <div className="mb-3 md:mb-6">
              <p className="text-2xl md:text-4xl font-bold text-center ">
                OWN YOUR LOOK
              </p>
              <p className="text-2xl md:text-4xl font-bold text-center ">
                WHO DO YOU WANT TO BE ?
              </p>
            </div>
            <ScrollCarousel />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-10 md:my-14">
            <img src="/assets/otterpass.png" alt="otterpass" />
            <div className="flex flex-col w-full md:w-[630px] text-center justify-center items-center md:my-0 my-3">
              <p className="text-4xl md:text-6xl font-bold text-center">
                Wolf Closet
              </p>
              <p className="text-base my-4 text-white">
                Hunt the limited NFTs for dressing your avatar in the missions.
                Trade or sell them on a marketplace whenever you want.
              </p>
              <button
                type="button"
                className="w-[205px] text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Go To Wolf Closet
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-10 md:my-14">
            <p className="text-4xl md:text-6xl font-bold text-center md:mb-6 mb-3">
              FAQ
            </p>
            <div className="space-y-4 mx-auto max-w-6xl p-4">
              <details
                className="group rounded-2xl bg-white p-3 md:p-6 text-black md:min-w-[700px] md:max-w-[700px]"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="font-medium text-lg md:text-2xl	">
                    What is NFTs?
                  </h2>
                  <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam labore tenetur eaque dolore? Aspernatur nobis facere
                  neque ullam nam autem, sint temporibus sapiente molestiae
                  alias, suscipit voluptatum non a minus?
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-3 md:p-6 text-black md:min-w-[700px] md:max-w-[700px]">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="font-medium text-lg md:text-2xl">
                    How to create wallet ?
                  </h2>

                  <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam labore tenetur eaque dolore? Aspernatur nobis facere
                  neque ullam nam autem, sint temporibus sapiente molestiae
                  alias, suscipit voluptatum non a minus?
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-3 md:p-6 text-black md:min-w-[700px] md:max-w-[700px]">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="font-medium text-lg md:text-2xl	">
                    How to buy and sell passes ?{" "}
                  </h2>

                  <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam labore tenetur eaque dolore? Aspernatur nobis facere
                  neque ullam nam autem, sint temporibus sapiente molestiae
                  alias, suscipit voluptatum non a minus?
                </p>
              </details>

              <details className="group rounded-2xl bg-white p-3 md:p-6 text-black md:min-w-[700px] md:max-w-[700px]">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="font-medium text-lg md:text-2xl">
                    What usage right will I have for my NFTs ?
                  </h2>

                  <span className="relative ml-1.5 h-8 w-8 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam labore tenetur eaque dolore? Aspernatur nobis facere
                  neque ullam nam autem, sint temporibus sapiente molestiae
                  alias, suscipit voluptatum non a minus?
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
