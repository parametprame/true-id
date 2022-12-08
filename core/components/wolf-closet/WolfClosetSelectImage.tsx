import { BackgroundPage } from "core/components/wolf-closet/Pages/BackgroundPage";
import { ShirtPage } from "core/components/wolf-closet/Pages/ShirtPage";
import { TopPage } from "core/components/wolf-closet/Pages/TopPage";
import { useState } from "react";
import html2canvas from "html2canvas";
import { useUserContext } from "core/context/store";

const WolfClosetSelectImage = () => {
  const [page, setPage] = useState("pageone");

  const { userInfo } = useUserContext();

  const screenShot = () => {
    const element = document.getElementById("image") as HTMLElement;
    html2canvas(element, {
      allowTaint: false,
      useCORS: true,
      scale: 2,
      backgroundColor: null,
    }).then((canvas) => {
      let image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.setAttribute("download", "profile.png");
      a.setAttribute("href", image);
      a.click();
    });
  };

  const nextPageNumber = (pageNumber: string) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      default:
        setPage("pageone");
    }
  };

  const ManuCloset = () => {
    return (
      <>
        <div
          className={`${
            page === "pageone" ? "bg-white" : ""
          } hover:bg-slate-300  rounded-full items-center py-3 px-2 cursor-pointer `}
          onClick={() => nextPageNumber("1")}
        >
          <a
            className={`${
              page === "pageone" ? "text-xl px-2 text-black" : ""
            } text-xl px-2 text-white `}
          >
            Background
          </a>
        </div>
        <div
          className={`${
            page === "pagethree" ? "bg-white " : ""
          } hover:bg-slate-300  rounded-full items-center py-3 px-2 cursor-pointer `}
          onClick={() => nextPageNumber("3")}
        >
          <a
            className={`${
              page === "pagethree" ? "text-xl px-2 text-black" : ""
            } text-xl px-2 text-white `}
          >
            Top
          </a>
        </div>
        <div
          className={`${
            page === "pagetwo" ? "bg-white" : ""
          } hover:bg-slate-300  rounded-full items-center py-3 px-2 cursor-pointer `}
          onClick={() => nextPageNumber("2")}
        >
          <a
            className={`${
              page === "pagetwo" ? "text-xl px-2 text-black" : ""
            } text-xl px-2 text-white `}
          >
            Shirt
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="hidden md:flex flex-row justify-center md:justify-end">
        <ManuCloset />
      </div>
      <div className="flex flex-col md:flex-row my-5">
        <div className="w-full md:w-5/12 mx-0 md:mx-5 ">
          <div id="image" className="bg-transparent overflow-hidden">
            <div className="relative">
              {userInfo.bg !== "" && (
                <img
                  src={userInfo.bg}
                  alt=""
                  className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute rounded-xl"
                />
              )}
              {userInfo.top != "" && (
                <img
                  src={userInfo.top}
                  alt=""
                  className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute z-10"
                />
              )}
              {userInfo.shirt != "" && (
                <img
                  src={userInfo.shirt}
                  alt=""
                  className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute z-10"
                />
              )}
            </div>
            <div className="relative">
              <img
                src={userInfo.base}
                alt="base image"
                className="h-[200px] md:h-[300px] lg:h-[430px]  w-full object-contain md:object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="bg-[#E2211C] px-5 py-2 rounded-full text-white font-normal hover:bg-[#f55e5b]"
              onClick={screenShot}
            >
              Save Profile
            </button>
          </div>
        </div>

        <div className="block md:hidden flex flex-row justify-center my-5">
          <ManuCloset />
        </div>
        {
          {
            pageone: <BackgroundPage />,
            pagetwo: <ShirtPage />,
            pagethree: <TopPage />,
          }[page]
        }
      </div>
    </>
  );
};

export default WolfClosetSelectImage;
