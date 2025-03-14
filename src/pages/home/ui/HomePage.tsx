import { SearchBar } from "features/search-bar";

export const HomePage = () => {
  return (
    <div className="pt-4">
      <section className="px-6">
        <SearchBar />
      </section>
    </div>
  );
};

export default HomePage;
