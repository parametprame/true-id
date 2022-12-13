import { Toaster, ToastIcon, resolveValue } from "react-hot-toast";
import { Transition } from "@headlessui/react";

export const Toat = () => {
  return (
    <Toaster toastOptions={{ duration: 3000 }}>
      {(t) => {
        return (
          <Transition
            appear
            show={t.visible}
            className="transform p-4 flex bg-white rounded shadow-lg"
            enter="transition-all duration-150"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <ToastIcon toast={t} />
            <p className="px-2">{resolveValue(t.message, t)}</p>
          </Transition>
        );
      }}
    </Toaster>
  );
};
