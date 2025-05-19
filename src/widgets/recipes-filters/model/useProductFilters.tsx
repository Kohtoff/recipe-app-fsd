import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // To retrieve parameters if they already exist.
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  // Set the params
  const setFilters = useCallback((filters: any) => {
    console.log("SET FILTER");
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set("search", filters.search);
      }

      if (filters.category) {
        params.set("category", filters.category);
      }

      return params;
    });
  }, []);

  return {
    search,
    category,
    setFilters,
  };
}
