import Marquee from "react-fast-marquee";
import Image from "next/image";
const ScrollCarousel = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex left-0 my-3">
          <div className="flex justify-around">
            <Marquee speed={50} gradientWidth={0}>
              <Image
                className="px-1 py-0"
                src="/assets/000.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/001.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/002.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/003.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/004.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/005.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/006.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/007.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/008.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/009.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
            </Marquee>
          </div>
        </div>
        <div className="flex left-0 my-3">
          <div className="flex justify-around">
            <Marquee speed={50} gradientWidth={0} direction={"right"}>
              <Image
                className="px-1 py-0"
                src="/assets/010.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/011.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/012.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/013.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/014.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/015.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/016.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/017.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/018.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
              <Image
                className="px-1 py-0"
                src="/assets/019.PNG"
                alt="Picture of the author"
                width={250}
                height={250}
                priority
              />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCarousel;
