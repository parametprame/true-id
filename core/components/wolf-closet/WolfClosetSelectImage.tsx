import { BackgroundPage } from "core/components/wolf-closet/Pages/BackgroundPage";
import { ShirtPage } from "core/components/wolf-closet/Pages/ShirtPage";
import { TopPage } from "core/components/wolf-closet/Pages/TopPage";
import { useState } from "react";

const WolfClosetSelectImage = () => {
  const [page, setPage] = useState("pageone");
  const [background, setBackground] = useState("");
  const [top, setTop] = useState("");
  const [shirt, setShirt] = useState("");

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

  const handleSetBackground = (item: string) => {
    setBackground(item);
  };

  const handleSetTop = (item: string) => {
    setTop(item);
  };

  const handleSetShirt = (item: string) => {
    setShirt(item);
  };

  const ManuCloset = () => {
    return (
      <>
        <div
          className="hover:bg-[#5051E2] hover:text-white rounded-lg items-center py-3 px-2 cursor-pointer "
          onClick={() => nextPageNumber("1")}
          style={{
            backgroundColor: page === "pageone" ? "#5051E2" : "",
            color: page === "pageone" ? "#ffff" : "",
          }}
        >
          <a className="text-xl px-2">Background</a>
        </div>
        <div
          className="hover:bg-[#5051E2] hover:text-white rounded-lg items-center py-3 px-2 cursor-pointer"
          onClick={() => nextPageNumber("3")}
          style={{
            backgroundColor: page === "pagethree" ? "#5051E2" : "",
            color: page === "pagethree" ? "#ffff" : "",
          }}
        >
          <a className="text-xl px-2">Top</a>
        </div>
        <div
          className="hover:bg-[#5051E2] hover:text-white rounded-lg items-center py-3 px-2 cursor-pointer "
          onClick={() => nextPageNumber("2")}
          style={{
            backgroundColor: page === "pagetwo" ? "#5051E2" : "",
            color: page === "pagetwo" ? "#ffff" : "",
          }}
        >
          <a className="text-xl px-2">Shirt</a>
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
          <div className="relative">
            {background !== "" && (
              <img
                src={background}
                alt=""
                className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute rounded-xl"
              />
            )}
            {top != "" && (
              <img
                src={top}
                alt=""
                className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute z-10"
              />
            )}
            {shirt != "" && (
              <img
                src={shirt}
                alt=""
                className="h-[200px] md:h-[300px] lg:h-[430px] w-full object-contain md:object-cover absolute z-10"
              />
            )}
          </div>
          <div className="relative">
            <img
              src="https://cdn.discordapp.com/attachments/1048154925412130867/1048155161031348255/base.PNG"
              alt=""
              className="h-[200px] md:h-[300px] lg:h-[430px]  w-full object-contain md:object-cover "
            />
          </div>
        </div>
        <div className="block md:hidden flex flex-row justify-center my-5">
          <ManuCloset />
        </div>
        {
          {
            pageone: (
              <BackgroundPage handleSetBackground={handleSetBackground} />
            ),
            pagetwo: <ShirtPage handleSetShirt={handleSetShirt} />,
            pagethree: <TopPage handleSetTop={handleSetTop} />,
          }[page]
        }
      </div>
    </>
  );
};

export default WolfClosetSelectImage;
