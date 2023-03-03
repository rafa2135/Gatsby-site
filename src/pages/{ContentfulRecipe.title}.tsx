import React from "react";
import { PageProps, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import RecipeData from "../interfaces/RecipeTemplate";

const RecipeTemplate = ({ data }: PageProps<RecipeData>) => {
  const recipe = data.contentfulRecipe;
  const pathToImage = getImage(recipe.image);

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            {pathToImage && (
              <GatsbyImage
                image={pathToImage}
                alt={recipe.title}
                className="about-img"
              />
            )}
            <article className="recipe-info">
              <h2>{recipe.title}</h2>
              <p>{recipe.description.description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep time</h5>
                  <p>{recipe.prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook time</h5>
                  <p>{recipe.cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Serving</h5>
                  <p>{recipe.servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                tags:
                {recipe.content.tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>instruccions</h4>
              {recipe.content.instructions.map((instr, key) => {
                return (
                  <div key={key} className="single-instruction">
                    <header>
                      <p>step{key + 1}</p>
                      <div></div>
                    </header>
                    <p>{instr}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {recipe.content.ingredients.map((ingredien, key) => {
                  return (
                    <p key={key} className="single-ingredient">
                      {ingredien}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {recipe.content.tools.map((tool, key) => {
                  return (
                    <p key={key} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;
