import Recipes from "../interfaces/Recipes";
import Tagcount from "../interfaces/Tagcount";
const setupTags = (recipes: Recipes[]) => {
  const allTags: Tagcount = {};
  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  return sorttags(allTags);
};
function sorttags(tags: Tagcount) {
  const sortedTags = Object.entries(tags).sort(([tag1], [tag2]) =>
    tag1.localeCompare(tag2)
  );
  return sortedTags;
}
export default setupTags;
