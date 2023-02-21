import * as React from "react";
import { PageProps, Link } from "gatsby";
import Layout from "../components/Layout";
import { page, text } from "../examples/home.module.css";
import { ExampleButton } from "../examples/button";
const Index = ({}: PageProps<{}>) => (
  <Layout>
    <div className={page}>
      <h1>home page</h1>
      <ExampleButton>button</ExampleButton>
      <p className={text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis
        voluptates inventore consequuntur deserunt doloribus beatae libero?
        Praesentium vero fugiat ducimus excepturi cum pariatur nisi, voluptatum
        amet, reprehenderit consectetur aspernatur.
      </p>
    </div>
  </Layout>
);
export default Index;
