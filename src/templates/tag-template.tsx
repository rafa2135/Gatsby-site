import React from "react";
import { PageProps, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import Recipes from "../interfaces/Recipes";
import { SEO } from "../components/SEO";

const TagTemplate = ({
  data,
  pageContext,
}: PageProps<{
  allContentfulRecipe: { nodes: Recipes[] };
}>) => {
  const recipes = data.allContentfulRecipe.nodes;
  const tag = (pageContext as { tag: string }).tag;
  return (
    <Layout>
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}></RecipesList>
        </div>
      </main>
    </Layout>
  );
};
export const Head = ({
  pageContext,
}: PageProps<{
  allContentfulRecipe: { nodes: Recipes[] };
}>) => {
  const title = (pageContext as { tag: string }).tag;
  return <SEO title={title.charAt(0).toUpperCase() + title.slice(1)} />;
};
export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
