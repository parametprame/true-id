import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Modal } from "core/components/connect-wallet/Modal";

export const Topbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-2 shadow-md ">
        <div className="flex h-16 md:h-24 items-center justify-between container mx-auto px-4">
          <Link href="/">
            <div className="relative h-12 sm:h-52 w-[100px]">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </Link>
          <div className="md:flex md:items-center md:gap-10 ">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/">
                    <p className="text-gray-500 transition hover:text-gray-500/75">
                      Home
                    </p>
                  </Link>
                </li>

                <li>
                  <Link href="/wolf-closet">
                    <p className="text-gray-500 transition hover:text-gray-500/75">
                      Wolf Closet
                    </p>
                  </Link>
                </li>

                <li>
                  <Link href="/missions">
                    <p className="text-gray-500 transition hover:text-gray-500/75">
                      Mission
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  className="rounded-md bg-[#E2211C] hover:bg-[#f55e5b] px-5 py-2.5 text-sm font-medium text-white shadow"
                  onClick={() => setModalOpen(true)}
                >
                  Connect Wallet
                </button>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal onClose={handleClose} isOpen={modalOpen} />
      </div>

      <Transition
        show={open}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden justify-between items-center w-full inset-0 z-[100] overflow-x-hidden overflow-y-auto">
            <div className="flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center">
              <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg border border-gray-100 ">
                <Link
                  href="/"
                  className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                  legacyBehavior
                >
                  <a
                    className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                    onClick={handleClick}
                  >
                    Home
                  </a>
                </Link>
                <Link
                  href="/wolf-closet"
                  className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                  legacyBehavior
                >
                  <a
                    className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                    onClick={handleClick}
                  >
                    Wolf Closet
                  </a>
                </Link>
                <Link
                  href="/missions"
                  className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                  legacyBehavior
                >
                  <a
                    className="block py-2 pr-4 pl-3 text-dark hover:bg-gray-300 rounded "
                    onClick={handleClick}
                  >
                    Mission
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
