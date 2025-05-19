// React Hook
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // To retrieve parameters if they already exist.
  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const maxPrice = searchParams.get('maxPrice')
    ? parseInt(searchParams.get('maxPrice') as string)
    : undefined;

  // Set the params
  const setFilters = useCallback((filters: any) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set('search', filters.search);
      }

      if (filters.category) {
        params.set('category', filters.category);
      }

      if (filters.maxPrice) {
        params.set('maxPrice', filters.maxPrice.toString());
      }

      return params;
    });
  }, []);

  return {
    search,
    category,
    maxPrice,
    setFilters,
  };
}