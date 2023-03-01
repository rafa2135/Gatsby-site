import React from "react";
import Recipes from "../interfaces/RecipesList";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  recipes: Recipes[];
};
const RecipesList = ({ recipes }: Props) => {
  const recipe = recipes;
  return (
    <div className="recipes-list">
      {recipe.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const pathToImage = getImage(image);
        return (
          <Link key={id} to={`/${title}`} className="recipe">
            {pathToImage && (
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="recipe-img"
              />
            )}
            <h5>{title}</h5>
            <p>
              Prep : {prepTime} min | Cook : {cookTime} min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
