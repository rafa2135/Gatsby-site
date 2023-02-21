import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import * as aboutStyles from "../examples/abaut.module.css";
import styled from "styled-components";
const About = ({}: PageProps) => (
  <Layout>
    <Wrapper>
      <h1>About</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsa
        similique ratione vero, sint quod asperiores modi eum assumenda ut
        perferendis doloribus necessitatibus facilis non fugiat minima enim!
        Sed, porro.
      </p>
    </Wrapper>
  </Layout>
);
const Wrapper = styled.section`
  color: blue;

  .text {
    text-transform: uppercase;
  }
  h1 {
    color: yellowgreen;
  }
`;
export default About;
