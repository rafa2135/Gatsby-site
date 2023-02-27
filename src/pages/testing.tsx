import React from "react";
import Layout from "../components/Layout";
import Gallery from "../examples/Gallery";

type Props = {};

const Testing = ({}: Props) => {
  return (
    <Layout>
      <main className="page">
        <h2>Testing Page</h2>
        <Gallery></Gallery>
      </main>
    </Layout>
  );
};

export default Testing;
