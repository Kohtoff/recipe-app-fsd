// type Props = {}

import { Recipe, RecipeCard } from "entities/recipe/RecipeCard";
import { useEffect, useState } from "react";

export const RecipeList = () => {
  const [data, setData] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) =>{
        console.log(res)
         setData(res.meals)});
  }, []);

  if (!data.length) {
    return <span>loading</span>;
  }

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-x-6 gap-y-8 px-6">
      {data.map((item) => <RecipeCard data={item} />)}
    </div>
  );
};
