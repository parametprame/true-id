import { AvailablePage } from "core/components/mission/Pages/AvailablePage";
import { CompletedPage } from "core/components/mission/Pages/CompletedPage";
import { MissedPage } from "core/components/mission/Pages/MissedPage";
import { InProgressPage } from "core/components/mission/Pages/InProgressPage";
import { useState } from "react";

export const MissionList = () => {
  const [page, setPage] = useState("pageone");

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
      case "4":
        setPage("pagefour");
        break;
      default:
        setPage("pageone");
    }
  };

  return (
    <>
      <div className="w-full mt-12 flow-root md:flex md:justify-center overflow-x-auto">
        <div className="flex flex-row justify-center w-max">
          <div
            className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#E2211C] hover:text-white rounded-full items-center cursor-pointer "
            onClick={() => nextPageNumber("1")}
            style={{
              backgroundColor: page === "pageone" ? "#E2211C" : "",
              color: page === "pageone" ? "#ffff" : "",
            }}
          >
            <p className="text-sm md:text-xl">Available</p>
          </div>
          <div
            className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#E2211C] hover:text-white rounded-full items-center cursor-pointer "
            onClick={() => nextPageNumber("2")}
            style={{
              backgroundColor: page === "pagetwo" ? "#E2211C" : "",
              color: page === "pagetwo" ? "#ffff" : "",
            }}
          >
            <p className="text-sm md:text-xl">In Progress</p>
          </div>
          <div
            className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#E2211C] hover:text-white rounded-full items-center cursor-pointer "
            onClick={() => nextPageNumber("3")}
            style={{
              backgroundColor: page === "pagethree" ? "#E2211C" : "",
              color: page === "pagethree" ? "#ffff" : "",
            }}
          >
            <p className="text-sm md:text-xl">Completed</p>
          </div>
          <div
            className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#E2211C] hover:text-white rounded-full items-center cursor-pointer "
            onClick={() => nextPageNumber("4")}
            style={{
              backgroundColor: page === "pagefour" ? "#E2211C" : "",
              color: page === "pagefour" ? "#ffff" : "",
            }}
          >
            <p className="text-sm md:text-xl">Missed</p>
          </div>
        </div>
      </div>
      {
        {
          pageone: <AvailablePage />,
          pagetwo: <InProgressPage />,
          pagethree: <CompletedPage />,
          pagefour: <MissedPage />,
        }[page]
      }
    </>
  );
};
