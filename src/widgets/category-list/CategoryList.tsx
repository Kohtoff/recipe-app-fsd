import CategoryItem from "./CategoryItem"

// type Props = {}

const categories = [
    'meal', 'sushi', 'beef', 'pasta', 'american', 'kurkruma'
]

export const CategoryList = () => {
  return (
    <div className="flex max-w-screen overflow-auto gap-4 px-6 pb-3">
        {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
        ))}
    </div>
  )
}