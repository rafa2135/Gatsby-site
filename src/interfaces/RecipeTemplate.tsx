import { IGatsbyImageData } from "gatsby-plugin-image";
interface RecipeTemplate {
  contentfulRecipe: {
    title: string;
    cookTime: number;
    content: {
      ingredients: string[];
      instructions: string[];
      tags: string[];
      tools: string[];
    };
    description: {
      description: string;
    };
    prepTime: number;
    servings: number;
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}
export default RecipeTemplate;
