import React from "react";
import { useStaticQuery, graphql } from "gatsby";
type Props = {
  title: string;
  description?: string;
};

export const SEO = ({ title, description }: Props) => {
  const { site } = useStaticQuery<siteData>(query);

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };

  return (
    <>
      <html lang="en"></html>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>;
      <meta name="description" content={seo.description} />
    </>
  );
};

interface siteData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}
const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
