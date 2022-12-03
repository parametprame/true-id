import Closet from "core/constants/Closet.json";

export const BackgroundPage = ({ handleSetBackground }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 w-full md:w-9/12 ">
      {Closet.map((item, index) => {
        if (item.type === "background") {
          return (
            <button
              key={index}
              className="border-2 rounded-xl md:transform md:transition md:duration-300 md:hover:scale-110 active:border-blue-500/50 focus:outline-none focus:ring focus:ring-blue-500/50"
              onClick={() => handleSetBackground(item.link)}
            >
              <img
                src={item.link}
                alt=""
                className="h-[200px] w-full cursor-pointer rounded-xl"
              />
            </button>
          );
        }
      })}
    </div>
  );
};
