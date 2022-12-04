import { MissionList } from "core/components/mission/MissionsList";

const Mission = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col my-2 md:my-10">
          <p className="text-center mt-10 text-5xl font-bold">
            Explore Missions
          </p>
        </div>
        <MissionList />
      </div>
    </section>
  );
};

export default Mission;
