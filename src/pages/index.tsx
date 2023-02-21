import * as React from "react";
import Navbar from "../components/Navbar";
import { PageProps, Link } from "gatsby";

const Index = ({}: PageProps) => (
  <main>
    <div>
      <Navbar />
      <h1>Index</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">company history</Link>
      </div>
    </div>
    <a href="/about">regular link</a>
  </main>
);
export default Index;
