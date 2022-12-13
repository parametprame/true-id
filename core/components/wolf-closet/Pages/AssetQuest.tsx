import { useUserContext } from "core/context/store";

export const AssetQuestPage = () => {
  const { setUserInfo } = useUserContext();

  const reward = localStorage.getItem("userReward");

  if (reward == null) {
    return (
      <div className="w-full md:w-9/12 h-80 md:h-full overflow-y-auto text-center">
        You don't have quest asset
      </div>
    );
  }

  return (
    <div className="w-full md:w-9/12 h-80 md:h-full overflow-y-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 mx-2 my-2">
        <button
          className="border-2 rounded-xl md:transform md:transition md:duration-300 md:hover:scale-110 active:border-blue-500/50 focus:outline-none focus:ring focus:ring-blue-500/50"
          onClick={() =>
            setUserInfo((prev) => ({
              ...prev,
              shirt: reward,
            }))
          }
        >
          <img
            src={reward}
            alt=""
            className="h-[150px] md:h-[200px] w-full rounded-xl "
          />
        </button>
      </div>
    </div>
  );
};
