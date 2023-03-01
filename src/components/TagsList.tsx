import React from "react";
import Recipes from "../interfaces/Recipes";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";
type Props = {
  recipes: Recipes[];
};

const TagsList = ({ recipes }: Props) => {
  const newTags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, key) => {
          const [text, value] = tag;
          return (
            <Link key={key} to={`/${text}`} className="">
              {text}({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
