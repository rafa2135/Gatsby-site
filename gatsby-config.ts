import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Simple Recipes`,
    description: `Nice and clean recipes site`,
    author: "rafael",
    person: { name: "rafael", age: 32 },
    simpleData: [`item1`, `iten2`],
    complexData: [
      { name: "rafa", age: 30 },
      { name: "henma", age: 30 },
      { name: "auri", age: 29 },
      { name: "mario", age: 30 },
      { name: "alex", age: 31 },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
