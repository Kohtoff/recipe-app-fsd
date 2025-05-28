import { FC, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "shared/libs/classnames";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  /** value of input */
  value: string;
  /** Callback, triggered by value changing*/
  onChange: (value: string) => void;
  /** icon */
  icon?: ReactNode;
};

export const Input: FC<InputProps> = (props) => {
  const { className, value, onChange, icon, ...other } = props;
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 start-0 flex items-center pl-6 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "block w-full rounded-4xl pl-14 py-[15px] text-sm ",
          className,
          icon || 'pl-6'
        )}
        {...other}
      />
      {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
  );
};
