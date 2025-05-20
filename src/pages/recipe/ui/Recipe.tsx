import { type Recipe as RecipeType } from "entities/recipe";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBack } from "shared/ui/buttons";

export const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<RecipeType | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.meals[0]);
        setData(res.meals[0]);
      });
  }, []);
  if (!data) return <span>Loading...</span>;

  const ingredients = Object.entries(data).filter(
    ([key, value]) => key.includes("strIngredient") && value
  );
  const measures = Object.entries(data).filter(
    ([key, value]) => key.includes("strMeasure") && value
  );

  return (
    <div className="relative">
      <div className="sticky top-0">
        <ButtonBack
          className="absolute left-6 top-4 text-white backdrop-blur-sm rounded-full size-14 z-1 bg-white/20 flex items-center justify-center"
          onClick={() => navigate(-1)}
        />
        <img
          className="w-full aspect-square"
          src={data.strMealThumb}
        />
      </div>
      <article className="rounded-t-4xl relative -top-[50px] w-full pt-11 pb-11 px-6 text-typography-primary bg-white">
        <header>
          <h2>{data.strMeal}</h2>
          <p className="text-typography-secondary">
            {data.strCategory} - 60min
          </p>
        </header>
        <hr className="border border-surface my-4" />
        <main>
          <section>
            <h2>Description</h2>
            <p className="text-typography-secondary">{data.strInstructions}</p>
          </section>
          <hr className="border border-surface my-4" />
          <section>
            <h2>Ingredients</h2>
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
              {ingredients.map((ingredient) => (
                <li key={ingredient[0]} className="text-gray-400">
                  <span className="text-gray-600">
                    {ingredient[1] as string}
                  </span>{" "}
                  -{" "}
                  <span className="text-gray-400">
                    {
                      measures.find(
                        ([key]) =>
                          key ===
                          `strMeasure${ingredient[0].split("strIngredient")[1]}`
                      )?.[1] as string
                    }
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </article>
    </div>
  );
};
