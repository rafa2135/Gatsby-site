import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const About = ({}: PageProps) => (
  <Layout>
    <main className="page">
      <header></header>
      <section className="about-page">
        <article>
          <h2></h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
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
    </main>
  </Layout>
);
export default About;
