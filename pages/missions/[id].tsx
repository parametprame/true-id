const MissionId = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2 text-white">
      <div className="flex flex-col md:flex-row pt-10  text-white">
        <div className="w-full md:w-5/12 py-5 md:py-0 mx-0 md:mx-5 order-2 md:order-1">
          <p className="text-3xl md:text-5xl font-bold">Watch to earn</p>
          <p className="text-2xl font-bold">powered by TrueID</p>

          <div className="w-full bg-black rounded-full h-2.5 my-6">
            <div
              className="bg-[#E2211C] h-2.5 rounded-full"
              style={{ width: `75%` }}
            ></div>
            <p className="text-sm mt-1">1304/2500 Completed</p>
          </div>

          <div className="mt-16">
            <p className="text-xl font-bold">Description</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consecteturLorem ipsum dolor sit amet consectetur.Lorem ipsum
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consecteturLorem ipsum dolor sit amet consectetur.Lorem ipsum
            </p>
          </div>

          <div className="mt-10 bg-[#c7c3c3] rounded-2xl">
            <p className="px-5 py-5 text-black">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consecteturLorem ipsum dolor sit amet consectetur.Lorem ipsum
            </p>
          </div>

          <div className="mt-10 bg-[#c7c3c3] rounded-2xl">
            <p className="px-5 py-5 text-black">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consecteturLorem ipsum dolor sit amet consectetur.Lorem ipsum
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-9/12 md:h-full order-1 md:order-2">
          <img
            src="/assets/franc.jpg"
            alt="base image"
            className="h-auto md:h-[450px] w-auto object-contain rounded-3xl	"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionId;
