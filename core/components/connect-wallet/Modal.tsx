import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import Image from "next/image";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ onClose, isOpen }: Props) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative rounded-3xl z-10 "
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 ">
                <div className="absolute right-0 pt-4 pr-4 sm:block z-10">
                  <button
                    type="button"
                    className="rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <AiOutlineClose className="text-inherit	 w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col lg:flex-row-reverse rounded-3xl overflow-hidden ">
                  <div className="bg-white p-4 flex flex-col ">
                    <div className=" mt-2 font-bold text-xl leading-tight">
                      Login
                    </div>
                    <div className="w-auto md:w-96  text-base  rounded-3xl">
                      <p className="py-2">
                        Please read the{" "}
                        <span className="font-semibold">Privacy Notice</span> of
                        the compant By logging in you are agreeing to the{" "}
                        <span className="font-semibold">Terms of service.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
