import { IGatsbyImageData } from "gatsby-plugin-image";

interface RecipesList {
  title: string;
  id: any;
  prepTime: number;
  cookTime: number;
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export default RecipesList;
