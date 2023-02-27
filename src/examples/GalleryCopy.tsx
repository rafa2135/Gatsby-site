import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

type Props = {};
const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED

            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
const GalleryCopy = (props: Props) => {
  const data = useStaticQuery<ImageQueryData>(query);
  const nodes = data.allFile.nodes;
  return (
    <div>
      <Wrapper>
        {nodes.map((image: nodes, index: number) => {
          const { name, childImageSharp } = image;
          const imagePath = getImage(childImageSharp);

          return (
            <article key={index} className="item">
              {imagePath && (
                <GatsbyImage
                  image={imagePath}
                  alt={name}
                  className="gallery-img"
                />
              )}
              <p>{name}</p>
            </article>
          );
        })}
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;

interface ImageQueryData {
  allFile: {
    nodes: nodes[];
  };
}
interface nodes {
  name: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export default GalleryCopy;
