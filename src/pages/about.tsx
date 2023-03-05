import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import recipes from "../interfaces/Recipes";
import { SEO } from "../components/SEO";
type Props = {};
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}: {
  data: {
    allContentfulRecipe: {
      nodes: Array<recipes>;
    };
  };
}) => {
  return (
    <Layout>
      <main className="page">
        <header></header>
        <section className="about-page">
          <article>
            <h2></h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5> look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes}></RecipesList>
        </section>
      </main>
    </Layout>
  );
};
export const Head = () => {
  return <SEO title="About" />;
};
export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default About;
