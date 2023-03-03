import { resolve } from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const recipes: {
    errors?: any;
    data?: {
      allContentfulRecipe: { nodes: { content: { tags?: string[] } }[] };
    };
  } = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  recipes.data?.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.content.tags?.forEach((tag) => {
      createPage({
        path: `/${tag}`,
        component: resolve(__dirname, "src/templates/tag-template.tsx"),
        context: {
          tag,
        },
      });
    });
  });
};
