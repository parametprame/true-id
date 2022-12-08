import WolfClosetSelectImage from "core/components/wolf-closet/WolfClosetSelectImage";

const WolfCloset = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2 text-white">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col my-2 md:my-10">
          <p className="text-center mt-10 text-5xl font-bold">Wolf Closet</p>
          <p className="text-center mt-10 text-xl font-bold">Asset</p>
        </div>
        <WolfClosetSelectImage />
      </div>
    </section>
  );
};

export default WolfCloset;
