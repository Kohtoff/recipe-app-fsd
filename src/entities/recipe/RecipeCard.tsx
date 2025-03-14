import { cn } from "shared/libs/classnames";

type Props = {
  category: any;
  isSelected?: boolean;
};

export const RecipeCard = ({ category, isSelected }: Props) => {
  return (
    <button
      className={cn(
        "px-6 bg-surface rounded-4xl h-12 cursor-pointer flex text-typography-secondary hover:text-black duration-200 ease-in items-center justify-center",
        !isSelected || "bg-primary font-bold text-white"
      )}
    >
      <p>{category}</p>
    </button>
  );
};

