import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, FileInput, Slider } from "shared/ui/input";

export const UploadPage = () => {
  const navigate = useNavigate();
  const [foodName, setFoodName] = useState("");

  const onSubmit = (data: FormData) => {
    const parsedData: Record<string, any> = {};
    data.forEach((value, key) => parsedData[key as keyof typeof parsedData] = value);
  }

  return (
    <div className="px-6 pt-3 relative">
      <header className="mb-8">
        <h2>
          <Link
            className="text-secondary"
            to={".."}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Cancel
          </Link>
        </h2>
      </header>
      <form action={onSubmit} className="space-y-6">
        <FileInput name="image"  />
        <label className="block space-y-[10px]">
          <h2 className="text-typography-primary">Food Name</h2>
          <Input
            placeholder="Enter food name"
            className="border border-outline"
            name="foodName"
            value={foodName}
            onChange={setFoodName}
          />
        </label>
        <label className="block space-y-[10px] w-full">
          <h2 className="text-typography-primary">Description</h2>
          <textarea
            className="rounded-lg border w-full border-outline min-h-20 resize-none p-4 placeholder:text-typography-secondary"
            placeholder="Tell a little about your food"
            name="description"
          />
        </label>
        <label className="block space-y-[10px] w-full">
          <div className="flex items-center">
            <h2 className="text-typography-primary">Cooking Duration</h2>{" "}
            <p className="text-typography-secondary">(in minutes)</p>
          </div>
          <Slider name="cookingDuration" showScale min={10} max={60} step={5} />
        </label>
        <button className="btn primary w-full mt-auto">Next</button>
      </form>
    </div>
  );
};
