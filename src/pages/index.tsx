import * as React from "react";
import { PageProps, Link } from "gatsby";
import Layout from "../components/Layout";

const Index = ({}: PageProps<{}>) => (
  <Layout>
    <h1>Index</h1>
    <div>
      <Link to="/about">about</Link>
    </div>
    <div>
      <Link to="/company/history">company history</Link>
    </div>
    <a href="/about">regular link</a>
  </Layout>
);
export default Index;
