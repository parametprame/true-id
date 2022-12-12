import { IoMdHeartEmpty } from "react-icons/io";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import Reward from "core/constants/Reward.json";

const DemoMission = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [alreadyClaim, setAlreadyClaimReward] = useState<boolean>(false);
  const [claimed, setClaimed] = useState<boolean>(false);
  const [connect, setConnect] = useState<boolean>(false);

  const handleClick = () => {
    setSuccess(true);
    setAlreadyClaimReward(true);
    localStorage.setItem("mission", "succesed");
    localStorage.setItem("already", "already");
    toast.success(`Thank you for send your love <3.`);
  };

  const handleClaim = () => {
    setClaimed(true);
    localStorage.setItem("claimed", "claimed");
    localStorage.setItem("userReward", Reward[0].reward);
    toast.success(`Claim Reward Success <3.`);
  };

  useEffect(() => {
    const missionIsSuccess = localStorage.getItem("mission");
    const already = localStorage.getItem("already");
    const claimed = localStorage.getItem("claimed");
    const connectWallet = localStorage.getItem("connect");

    if (connectWallet) {
      setConnect(true);
    }

    if (missionIsSuccess && already && claimed === null) {
      setSuccess(true);
      setAlreadyClaimReward(true);
    }
    if (missionIsSuccess && already && claimed) {
      setSuccess(true);
      setAlreadyClaimReward(true);
      setClaimed(true);
    }
  }, [success, claimed, alreadyClaim]);

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-2 text-white">
      <div className="flex flex-col md:flex-row pt-10  text-white">
        <div className="w-full md:w-5/12 py-5 md:py-0 mx-0 md:mx-5 order-2 md:order-1">
          <p className="text-3xl md:text-5xl font-bold">Send Your Love !</p>
          <p className="text-2xl font-bold">powered by TrueID</p>

          <div className="w-full bg-black rounded-full h-2.5 my-6">
            <div
              className="bg-[#E2211C] h-2.5 rounded-full"
              style={{ width: `75%` }}
            ></div>
            <p className="text-sm mt-1">1304/2500 Completed</p>
          </div>

          <div className="mt-16">
            <p className="text-xl font-bold">Description</p>
            <p className="text-base">
              Send your love to the Wolf IDO by clicking the heart on this quest
              to get the reward.
            </p>
          </div>

          {!connect && (
            <div className="mt-10 bg-[#c7c3c3] rounded-2xl">
              <div className="flex px-10">
                <div className="flex flex-col">
                  <span className="text-sm flex items-center px-2 pt-5 text-black">
                    You're not signed in
                  </span>
                  <p className="text-sm px-2 pb-5 text-black font-bold">
                    Please connecting your wallet.
                  </p>
                </div>
              </div>
            </div>
          )}

          {connect &&
            (success ? (
              <div className="mt-10 bg-[#c7c3c3] rounded-2xl">
                <span className="flex items-center px-5 py-5 text-black">
                  <IoMdHeartEmpty
                    className={`mx-2 h-8 font-bold ${
                      success ? "text-pink-600" : "text-dark"
                    }`}
                  />
                  Send your love
                </span>
              </div>
            ) : (
              <div className="mt-10 bg-[#c7c3c3] rounded-2xl hover:bg-[#9e9999] cursor-pointer">
                <span
                  className="flex items-center px-5 py-5 text-black"
                  onClick={handleClick}
                >
                  <IoMdHeartEmpty
                    className={`mx-2 h-8 font-bold ${
                      success ? "text-pink-600" : "text-dark"
                    }`}
                  />{" "}
                  Send your love
                </span>
              </div>
            ))}
        </div>
        <div className="flex justify-center w-full md:w-9/12 md:h-full order-1 md:order-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/assets/reward.png"
              alt="base image"
              className="h-auto md:h-[450px] w-auto object-contain rounded-3xl	"
            />
            {!claimed && alreadyClaim ? (
              <button
                onClick={handleClaim}
                className="w-[200px] md:w-max text-white bg-gradient-to-br from-[#E2211C] to-[#FFDEDE] hover:from-[#E2211C]/90 hover:to-[#FFDEDE]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mt-5"
              >
                Claim Reward
              </button>
            ) : (
              <button
                disabled={true}
                className="bg-slate-300	w-[200px] md:w-max text-white font-medium rounded-full text-sm px-10 py-2.5 text-center mt-5"
              >
                Claim Reward
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoMission;
