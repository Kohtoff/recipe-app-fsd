// type Props = {}

import { Recipe, RecipeCard } from "entities/recipe";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RecipeList = () => {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.meals);
      });
  }, []);

  if (!data.length) {
    return <span>loading</span>;
  }

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-x-6 gap-y-8 px-6">
      {data.map((item) => (
        <Link to={`/recipe/${item.idMeal}`}>
          <RecipeCard key={item.idMeal} data={item} />
        </Link>
      ))}
    </div>
  );
};
