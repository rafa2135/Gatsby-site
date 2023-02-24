import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

const getData = graphql`
  query unique {
    site {
      info: siteMetadata {
        author
        description
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
        simpleData
      }
    }
  }
`;

const FetchData = (props: Props) => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      {/* <h1>Name : {data.site.siteMetadata.person.name}</h1> */}
      <h2>site title is : {title}</h2>
    </div>
  );
};

export default FetchData;
