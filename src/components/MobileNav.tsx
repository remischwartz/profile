import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return (
    // <PopoverGroup>
    <Popover className="relative md:hidden">
      <PopoverBackdrop className="fixed inset-x-0 top-12 bottom-0 bg-black/50 z-30" />
      <PopoverButton className="px-4 py-3 font-semibold text-lg">
        Menu ☰
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        transition
        modal
        focus
        className=" w-full flex flex-col gap-6 bg-surface z-50 px-4 py-6 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
      >
        {children}
      </PopoverPanel>
    </Popover>
    // </PopoverGroup>
  );
};
