import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";

const RecipeTemplate = (props: PageProps<{}>) => {
  return (
    <Layout>
      <main>
        <h4>{props.params.title}</h4>
      </main>
    </Layout>
  );
};

export default RecipeTemplate;
