import { RecipeList } from "widgets/recipes-list/RecipesList";
import FiltersSection from "./sections/FiltersSection";

export const HomePage = () => {
  return (
    <div className="pt-4">
      {/* Filters */}
      <FiltersSection />
      <div className="mt-6"></div>
      <RecipeList />
    </div>
  );
};

export default HomePage;
