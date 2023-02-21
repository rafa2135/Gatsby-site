import * as React from "react";
import { PageProps } from "gatsby";
import Navbar from "../components/Navbar";

const About = ({}: PageProps) => (
  <main>
    <div>
      <Navbar />
      <h1>About</h1>
    </div>
  </main>
);
export default About;
