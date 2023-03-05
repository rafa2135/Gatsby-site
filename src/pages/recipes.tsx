import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import { SEO } from "../components/SEO";

const Recipes = ({}: PageProps) => (
  <Layout>
    <main className="page">
      <AllRecipes />
    </main>
  </Layout>
);
export const Head = () => {
  return <SEO title="Recipes" />;
};
export default Recipes;
