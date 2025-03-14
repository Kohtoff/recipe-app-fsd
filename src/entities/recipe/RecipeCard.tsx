
export type Recipe = {
  dateModified: string;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strImageSource: string;
  strInstructions: string;
  strMeal: string;
  strMealAlternate: string;
  strMealThumb: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
};

type Props = {
  data: Recipe;
};

export const RecipeCard = ({ data }: Props) => {
  const item = data;
  console.log(data)
  return (
    <article className={''}>
      <img className="aspect-square rounded-2xl" src={item.strMealThumb}></img>
      <h2 className="mt-4 mb-2 text-typography-primary">{item.strMeal}</h2>
      <small className="text-typography-secondary">{item.strCategory} 60 mins</small>
    </article>
  );
};
