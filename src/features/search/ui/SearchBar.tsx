import { Input } from "shared/ui/input";

type Props = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  autoFocus?: boolean;
};

export const SearchBar = ({ onChange, defaultValue, autoFocus }: Props) => {
  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };

  return (
    <div>
      <Input
        icon={
          <svg
            className="w-4 h-4 text-typography-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        }
        autoFocus={autoFocus}
        placeholder="Search"
        className="bg-surface focus:ring-primary focus:border-primary border-surface focus:outline-primary"
        onChange={handleChange}
        value={defaultValue ?? ""}
      />
    </div>
  );
};
