import * as React from "react";
import { PageProps, Link } from "gatsby";

const Index = ({}: PageProps) => (
  <main>
    <div>
      <h1>Index</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">company history</Link>
      </div>
    </div>
    <a href="/about">regular link</a>
    <a href="https://www.gatsbyjs.com/docs/quick-start/">gatsby doc</a>
  </main>
);
export default Index;
