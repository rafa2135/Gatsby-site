import React from "react";
import { graphql } from "gatsby";

type Props = { data: data };

const Testing = ({ data }: Props) => {
  const author = data.site.info.author;
  console.log(data);
  return (
    <div>
      <h2>Testing </h2>
      <h3> {author}</h3>
    </div>
  );
};
export const data = graphql`
  query solo {
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

interface data {
  site: site;
}
interface site {
  info: info;
}
interface info {
  author: string;
  description: string;
  title: string;
  complexData: complexData;
  person: person;
  simpleData: string;
}
interface complexData {
  age: number;
  name: string;
}
interface person {
  age: number;
  name: string;
}
export default Testing;
