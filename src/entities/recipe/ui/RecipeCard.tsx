import { Recipe } from "../model";


type Props = {
  data: Recipe;
};

export const RecipeCard = ({ data }: Props) => {
  const item = data;
  return (
    <article className={""}>
      <img className="aspect-square rounded-2xl" src={item.strMealThumb}></img>
      <h2 className="mt-4 mb-2 text-typography-primary">{item.strMeal}</h2>
      <small className="text-typography-secondary">
        {item.strCategory} 60 mins
      </small>
    </article>
  );
};
