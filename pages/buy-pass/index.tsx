import Image from "next/image";

const BuyPass = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2 text-white">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col my-2 md:my-10">
          <p className="text-center mt-10 text-5xl font-bold">Wolf Door Pass</p>
          <p className="text-lg md:text-xl mt-5 font-bold text-center">
            3 LEVELS TO ENHANCE YOUR EXPERIENCE
          </p>
          <p className="my-2 text-base text-center">
            One Pass , Many mission to explore
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 content-center my-10 md:my-14">
          <div className="flex flex-col justify-center items-center">
            <div className="md:h-[240px] md:w-[430px] h-[120px] w-[230px] relative">
              <Image
                src="/assets/baby.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <p className="text-center text-2xl font-bold py-10">Baby Wolf</p>
            <p className="text-center text-lg ">Price : 500 Baht</p>
            <p className="text-center text-xl font-bold py-5 md:mt-20">
              TOTAL : 16,000
            </p>

            <button
              type="button"
              className="mt-5 w-[100px] md:w-[205px] text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy Pass
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-[240px] md:w-[430px] h-[120px] w-[230px] relative">
              <Image
                src="/assets/master.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p className="text-center text-2xl font-bold py-10">Master Wolf</p>
            <p className="text-center text-lg ">Price : 1,000 Baht</p>
            <p className="text-center text-xl font-bold py-5 md:mt-20">
              TOTAL : 3,500
            </p>

            <button
              type="button"
              className="mt-5 w-[100px] md:w-[205px] text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy Pass
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="md:h-[240px] md:w-[430px] h-[120px] w-[230px] relative">
              <Image
                src="/assets/alpha.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p className="text-center text-2xl font-bold py-10">Alpha Wolf</p>
            <p className="text-center text-lg ">Price : 3,000 Baht</p>
            <p className="text-center text-xl font-bold py-5 md:mt-20">
              TOTAL : 500
            </p>

            <button
              type="button"
              className=" w-[100px] md:w-[205px] text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Buy Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyPass;
