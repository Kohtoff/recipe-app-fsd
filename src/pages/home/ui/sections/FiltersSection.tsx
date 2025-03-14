import { SearchBar } from "features/search-bar";
import { CategorySelector } from "widgets/category-list";


const FiltersSection = () => {
  return (
    <section className="space-y-6 px-6">
      <div className="">
        <SearchBar />
      </div>
      <div>
        <h2 className="mb-4">Category</h2>
        <div className="-mx-6">
          <CategorySelector />
        </div>
      </div>
      <div className="-mx-6 h-2 w-screen bg-surface"></div>
    </section>
  );
};

export default FiltersSection;
