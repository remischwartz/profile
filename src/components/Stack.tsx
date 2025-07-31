import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export const Stack = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="stackDialog"
        className="rounded-sm px-4 text-lg outline-offset-[-2px]! text-shadow-lg md:text-xl"
      >
        Stack 🛠️
      </button>
      <Dialog
        id="stackDialog"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="bg-surface relative max-w-lg space-y-4 rounded-lg px-12 py-8">
            <DialogTitle className="font-bold">Tech stack</DialogTitle>
            <Description>
              Ce site a été fait avec ❤️, mais également avec :
            </Description>
            <ul className="mt-4 list-inside list-disc pl-4">
              <li>Astro</li>
              <li>React</li>
              <li>HeadlessUI</li>
              <li>TailwindCSS</li>
            </ul>
            <button
              aria-label="Fermer"
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-sm pb-1 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
