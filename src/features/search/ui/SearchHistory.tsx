import { useProductFilters } from "widgets/recipes-filters";

const searchHistory = ["pancakes", "salad"];

export const SearchHistory = () => {
  const { setFilters } = useProductFilters('SearchHistory');
  return (
    <ul className="space-y-6 py-6">
      {searchHistory.map((query) => (
        <li onClick={() => setFilters({ search: query })} key={query} className="flex w-full items-center">
          <div className="text-typography-secondary mr-[17px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.89076 21.2505 2.74976 17.1095 2.74976 12.0005C2.74976 6.89149 6.89076 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.4314 14.9429L11.6614 12.6939V7.84686"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-typography-primary">{query}</p>
          <div className="ml-auto text-typography-secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_174_41)">
                <path
                  d="M6.25176 15.8244C6.38272 15.8367 6.51481 15.823 6.64046 15.7841C6.76611 15.7452 6.88286 15.6819 6.98401 15.5978C7.08517 15.5138 7.16874 15.4105 7.22994 15.2941C7.29115 15.1777 7.32879 15.0503 7.3407 14.9194L7.85689 9.26957L16.2432 17.6559C16.4307 17.8434 16.6851 17.9487 16.9503 17.9487C17.2155 17.9487 17.4699 17.8434 17.6574 17.6559C17.8449 17.4683 17.9503 17.214 17.9503 16.9487C17.9503 16.6835 17.8449 16.4292 17.6574 16.2416L9.2711 7.85535L14.9209 7.33917C15.0518 7.32709 15.1791 7.28935 15.2954 7.2281C15.4118 7.16684 15.5149 7.08326 15.599 6.98215C15.683 6.88103 15.7463 6.76435 15.7853 6.63876C15.8242 6.51318 15.8381 6.38115 15.826 6.25022C15.8139 6.11929 15.7762 5.99202 15.7149 5.87568C15.6537 5.75933 15.5701 5.65619 15.469 5.57215C15.3678 5.4881 15.2512 5.42479 15.1256 5.38584C15 5.34689 14.868 5.33305 14.737 5.34513L6.95886 6.05223L6.78916 6.09466L6.64774 6.13709C6.4207 6.23769 6.23922 6.41917 6.13862 6.6462L6.09619 6.78762L6.05377 6.95733L5.34666 14.7355C5.33442 14.8665 5.34814 14.9986 5.38702 15.1242C5.42591 15.2499 5.48921 15.3666 5.57328 15.4678C5.65736 15.5689 5.76056 15.6525 5.87699 15.7137C5.99341 15.7749 6.12076 15.8125 6.25176 15.8244Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_174_41">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 24) rotate(-90)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </li>
      ))}
    </ul>
  );
};
