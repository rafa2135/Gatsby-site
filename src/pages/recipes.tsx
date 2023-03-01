import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

const Recipes = ({}: PageProps) => (
  <Layout>
    <main className="page">
      <AllRecipes />
    </main>
  </Layout>
);
export default Recipes;
