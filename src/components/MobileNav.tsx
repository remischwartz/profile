import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-sm px-4 py-3 text-xl outline-offset-[-2px]! text-shadow-lg"
        >
          Menu ☰
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
        >
          <DialogPanel className="bg-surface fixed inset-0 space-y-4 px-4 py-6">
            <div
              className="flex h-full items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <button
                aria-label="Fermer"
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-sm pb-1 text-2xl"
              >
                x
              </button>
              <div className="flex h-full max-h-96 flex-col justify-around gap-6 text-center">
                {children}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </>
  );
};
