import { IGatsbyImageData } from "gatsby-plugin-image";
interface Recipes {
  title: string;
  id: string;
  prepTime: number;
  cookTime: number;
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  content: {
    tags: string[];
  };
}
export default Recipes;
