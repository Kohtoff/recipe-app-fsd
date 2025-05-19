import { SearchBar } from "features/search";
import { useState } from "react";
import Divider from "shared/ui/Divider";
import { CategorySelector } from "widgets/category-list";
import { RecipesFilters, useProductFilters } from "widgets/recipes-filters";

const FiltersSection = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { search } = useProductFilters();

  return (
    <section className="space-y-6 px-6">
      <div onClick={() => setIsFiltersOpen(true)} className="">
        <SearchBar autoFocus defaultValue={search ?? ''} />
      </div>
      <div>
        <h2 className="mb-4">Category</h2>
        <div className="-mx-6">
          <CategorySelector />
        </div>
      </div>
      <Divider />
      {isFiltersOpen && (
        <RecipesFilters onClose={() => setIsFiltersOpen(false)} />
      )}
    </section>
  );
};

export default FiltersSection;
