import * as React from "react";
import { PageProps, Link } from "gatsby";
import Layout from "../components/Layout";
import Images from "../examples/images";

const Index = ({}: PageProps<{}>) => (
  <Layout>
    <div>
      <h1>home page</h1>
      <Images></Images>
    </div>
  </Layout>
);
export default Index;
