import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover className="relative md:hidden">
      <PopoverBackdrop className="fixed inset-x-0 top-12 bottom-0 z-30 bg-black/50" />
      <PopoverButton className="px-4 py-3 text-xl text-shadow-lg">
        Menu ☰
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        transition
        modal
        focus
        className="bg-surface z-50 flex w-full flex-col gap-6 px-4 py-6 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
};
