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
      <div className="flex flex-row justify-center mt-12">
        <div
          className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#5051E2] hover:text-white rounded-full items-center cursor-pointer "
          onClick={() => nextPageNumber("1")}
          style={{
            backgroundColor: page === "pageone" ? "#5051E2" : "",
            color: page === "pageone" ? "#ffff" : "",
          }}
        >
          <a className="text-sm md:text-xl">Available</a>
        </div>
        <div
          className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#5051E2] hover:text-white rounded-full items-center cursor-pointer "
          onClick={() => nextPageNumber("2")}
          style={{
            backgroundColor: page === "pagetwo" ? "#5051E2" : "",
            color: page === "pagetwo" ? "#ffff" : "",
          }}
        >
          <a className="text-sm md:text-xl">In Progress</a>
        </div>
        <div
          className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#5051E2] hover:text-white rounded-full items-center cursor-pointer "
          onClick={() => nextPageNumber("3")}
          style={{
            backgroundColor: page === "pagethree" ? "#5051E2" : "",
            color: page === "pagethree" ? "#ffff" : "",
          }}
        >
          <a className="text-sm md:text-xl">Completed</a>
        </div>
        <div
          className="px-2 py-2 md:py-3 md:px-5 hover:bg-[#5051E2] hover:text-white rounded-full items-center cursor-pointer "
          onClick={() => nextPageNumber("4")}
          style={{
            backgroundColor: page === "pagefour" ? "#5051E2" : "",
            color: page === "pagefour" ? "#ffff" : "",
          }}
        >
          <a className="text-sm md:text-xl">Missed</a>
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
