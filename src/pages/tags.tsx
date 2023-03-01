import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";

const Tags = ({ data }: any) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, key) => {
            const [text, value] = tag;
            return (
              <Link key={key} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
export default Tags;
