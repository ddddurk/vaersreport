import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";
import { HiChevronUpDown } from "react-icons/hi2";

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = ({
  children,
  className,
  ...props
}: SelectProps) => {
  return (
    <div className="relative">
      <select
        className={clsx(
          "relative cursor-pointer appearance-none rounded border bg-white py-1 pl-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <HiChevronUpDown className="absolute right-2 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Select;
