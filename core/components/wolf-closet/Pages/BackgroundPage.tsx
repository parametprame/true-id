import { fetcher } from "core/utils";
import { useUserContext } from "core/context/store";
import useSWRImmutable from "swr/immutable";

export const BackgroundPage = () => {
  const { data, error } = useSWRImmutable(
    "https://true-id-backend.fly.dev/asset/type?typeId=background",
    fetcher
  );

  const { setUserInfo } = useUserContext();

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="w-full md:w-9/12 h-80 md:h-full overflow-y-auto text-center">
        Loading...
      </div>
    );

  return (
    <div className="w-full md:w-9/12 h-80 md:h-full overflow-y-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-2 mx-2 my-2">
        {data?.map((item: any, index: any) => {
          return (
            <button
              key={index}
              className="border-2 rounded-xl md:transform md:transition md:duration-300 md:hover:scale-110 active:border-blue-500/50 focus:outline-none focus:ring focus:ring-blue-500/50"
              onClick={() =>
                setUserInfo((prev) => ({
                  ...prev,
                  bg: item.url,
                }))
              }
            >
              <img
                src={item.url}
                alt=""
                className="h-[150px] md:h-[200px] w-full rounded-xl "
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
