import Link from "next/link";
import { useEffect, useState } from "react";

export const CompletedPage = () => {
  const mockId = [1];
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const missionIsSuccess = localStorage.getItem("mission");
    if (missionIsSuccess) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
        {success && (
          <Link href="/missions/demo-mission">
            <div className="flex h-max bg-slate-300 rounded-2xl md:transform md:transition md:duration-300 md:hover:scale-110	cursor-pointer text-black">
              <div className="w-7/12 md:w-7/12 mx-0 md:mx-5">
                <div className="flex flex-col py-3 px-5 md:px-0">
                  <p className="font-bold text-sm ">TrueID</p>
                  <p className="font-bold text-sm ">Send Your Love</p>
                </div>
                <div className="px-3 md:px-0">
                  <div className="w-full bg-black	rounded-full h-2.5 mt-1 mb-3 ">
                    <div
                      className="bg-[#E2211C] h-2.5 rounded-full"
                      style={{ width: `75%` }}
                    ></div>
                    <p className="text-sm mt-1">1304/2500 Completed</p>
                  </div>
                </div>
                <div className="flex flex-row pt-6 mb-2 justify-start">
                  <div className="bg-white md:px-0.5 md:py-1 lg:px-2 lg:py-2 rounded-2xl">
                    <p className="text-sm px-1">NFT</p>
                  </div>
                </div>
              </div>
              <div className="w-5/12 lg:w-5/12 flex justify-center md:justify-end px-2 py-4 md:py-2">
                <img
                  src="assets/reward.png"
                  alt="base image"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </Link>
        )}
        {mockId.map((item) => {
          return (
            <Link href={`/missions/${item}`} key={item}>
              <div className="flex h-max bg-slate-300 rounded-2xl md:transform md:transition md:duration-300 md:hover:scale-110	cursor-pointer text-black">
                <div className="w-7/12 md:w-7/12 mx-0 md:mx-5">
                  <div className="flex flex-col py-3 px-5 md:px-0">
                    <p className="font-bold text-sm ">TrueID</p>
                    <p className="font-bold text-sm ">Watch to earn</p>
                    <p className="font-bold text-sm ">World Cup 2022 match</p>
                  </div>
                  <div className="px-3 md:px-0">
                    <div className="w-full bg-black	rounded-full h-2.5 mt-1 mb-3 ">
                      <div
                        className="bg-[#E2211C] h-2.5 rounded-full"
                        style={{ width: `75%` }}
                      ></div>
                      <p className="text-sm mt-1">1304/2500 Completed</p>
                    </div>
                  </div>
                  <div className="flex flex-row pt-6 mb-2 justify-around">
                    <div className="bg-white md:px-0.5 md:py-1 lg:px-2 lg:py-2 rounded-2xl">
                      <p className="text-sm px-1">NFT</p>
                    </div>
                    <div className="bg-white md:px-0.5 md:py-1 lg:px-2 lg:py-2 rounded-2xl">
                      <p className="text-sm  px-1">DISCOUNT CODE</p>
                    </div>
                  </div>
                </div>
                <div className="w-5/12 lg:w-5/12 flex justify-center md:justify-end px-2 py-4 md:py-2">
                  <img
                    src="assets/franc.jpg"
                    alt="base image"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
