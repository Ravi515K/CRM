function UiPageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-x-hidden min-h-[calc(100vh-100px)] h-full ${className}`}
    >
      {children}
    </div>
  );
}

export default UiPageWrapper;
