import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full w-full lg:max-w-[1080px] 2xl:max-w-7xl mx-auto px-2 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
