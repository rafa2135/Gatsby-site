import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import { SEO } from "../components/SEO";

const Index = ({}: PageProps<{}>) => (
  <Layout>
    <main className="page">
      <header className="hero">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="eggs"
          className="hero-img"
          placeholder="blurred"
          layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>simple recipes</h1>
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>
      <AllRecipes />
    </main>
  </Layout>
);

export default Index;
export const Head = () => {
  return <SEO title="home" description="static"></SEO>;
};
