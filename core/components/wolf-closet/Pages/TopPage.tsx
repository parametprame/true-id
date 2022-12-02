import Closet from "core/constants/Closet.json";

export const TopPage = ({ handleSetTop }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 w-full md:w-9/12  ">
      {Closet.map((item) => {
        if (item.type === "top") {
          return (
            <div className="border-2 rounded-xl md:transform md:transition md:duration-300 md:hover:scale-110">
              <img
                src={item.link}
                alt=""
                className="h-[200px] w-full cursor-pointer"
                onClick={() => handleSetTop(item.link)}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
