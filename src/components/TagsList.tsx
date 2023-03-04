import React from "react";
import Recipes from "../interfaces/Recipes";
import { Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
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
          const slug = slugify(text, { lower: true });
          return (
            <Link key={key} to={`/tags/${slug}`} className="">
              {text}({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
