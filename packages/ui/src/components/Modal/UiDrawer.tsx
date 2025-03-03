import {
  Dialog,
  DialogPanel
} from "@headlessui/react";

interface UiDrawerWrapperProps {
  isOpen: boolean;
  isLoading?: boolean;
  containerClass?: string;
  children: React.ReactNode;
  HeadSection: React.ReactNode;
}

function UiDrawerWrapper({
  HeadSection,
  isOpen,
  isLoading = false,
  containerClass,
  children,
}: UiDrawerWrapperProps) {
  return (
    <Dialog as="div" open={isOpen} onClose={() => {}}>
      <div className="fixed left-0 top-0 w-full h-screen z-50 bg-body/50 backdrop-blur-sm" />

      <DialogPanel
        transition
        className={`fixed top-1 z-50 right-1 h-[calc(100vh-10px)] bg-white px-4 py-6 rounded shadow-xl flex flex-col gap-4 ${containerClass} `}
      >
        {HeadSection}
        {isLoading ? (
          <div className="h-56 bg-lightGray rounded-lg animate-pulse" />
        ) : (
          children
        )}
      </DialogPanel>
    </Dialog>
  );
}

export default UiDrawerWrapper;
