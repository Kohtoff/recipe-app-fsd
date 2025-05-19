import { cn } from "shared/libs";

type Props = {
  category: string;
  isSelected?: boolean;
  onClick: (id: string) => void;
};

export const CategoryItem = ({ category, isSelected, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={cn(
        "px-6 bg-surface rounded-4xl h-12 cursor-pointer flex text-typography-secondary hover:text-black duration-200 ease-in items-center justify-center",
        !isSelected || "bg-primary font-bold text-white"
      )}
    >
      <p>{category}</p>
    </button>
  );
};
