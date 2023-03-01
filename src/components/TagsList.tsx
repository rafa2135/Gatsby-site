import React from "react";
import Recipes from "../interfaces/RecipesList";
type Props = {
  recipes: Recipes[];
};

const TagsList = ({ recipes }: Props) => {
  const recipe = recipes;
  return (
    <div>
      tags List
      <div>
        {recipe.map((recipe) => {
          return <p key={recipe.id}>{recipe.title}</p>;
        })}
      </div>
    </div>
  );
};

export default TagsList;
