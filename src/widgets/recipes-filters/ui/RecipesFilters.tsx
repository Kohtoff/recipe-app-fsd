import { createPortal } from "react-dom";
import { ButtonBack } from "shared/ui/buttons";
import { useProductFilters } from "../model";
import { SearchHistory, SearchBar } from "features/search";
import Divider from "shared/ui/Divider";
import { SearchSuggestions } from "features/search";

type Props = {
  onClose: () => void;
};

export const RecipesFilters = ({ onClose }: Props) => {
  const { search, setFilters } = useProductFilters();

  return createPortal(
    <div className="absolute inset-0 bg-white space-y-6 px-6 pt-4">
      <header className="flex items-center gap-4">
        <ButtonBack onClick={onClose} />
        <SearchBar
          defaultValue={search ?? ""}
          onChange={(value) => setFilters({ search: value })}
        />
      </header>
      <main>
        <Divider />
        <SearchHistory onSelect={onClose} />
        <Divider />
        <SearchSuggestions />
      </main>
    </div>,
    document.body
  );
};
