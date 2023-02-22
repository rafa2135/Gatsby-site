import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> SimplyRecipes</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
