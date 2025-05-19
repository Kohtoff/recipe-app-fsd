import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // To retrieve parameters if they already exist.
  const search = searchParams.get("search");
  const categories = searchParams.get("categories");
  const normalizedCategories = categories ? categories.split(',') : [];

  // Set the params
  const setFilters = useCallback((filters: any) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set("search", filters.search);
      }

      if (filters.categories) {
        params.set("categories", filters.categories);
      }

      return params;
    });
  }, []);

  return {
    search,
    categories: normalizedCategories,
    setFilters,
  };
}
