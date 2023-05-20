import { ReactNode } from "react";
import classNames from "classnames";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div
      className={classNames(
        className,
        "max-w-sm md:max-w-3xl lg:max-w-7xl xl:max-w-[110rem] mx-auto"
      )}
    >
      {children}
    </div>
  );
};
