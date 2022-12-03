import Closet from "core/constants/Closet.json";

export const ShirtPage = ({ handleSetShirt }: any) => {
  return (
    <div className="w-full md:w-9/12 h-80 md:h-full overflow-y-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 mx-2 my-2">
        {Closet.map((item, index) => {
          if (item.type === "shirt") {
            return (
              <button
                key={index}
                className="border-2 rounded-xl md:transform md:transition md:duration-300 md:hover:scale-110 active:border-blue-500/50 focus:outline-none focus:ring focus:ring-blue-500/50"
                onClick={() => handleSetShirt(item.link)}
              >
                <img
                  src={item.link}
                  alt=""
                  className="h-[150px] md:h-[200px] w-full cursor-pointer"
                />
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
