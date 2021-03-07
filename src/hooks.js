import { graphql, useStaticQuery } from "gatsby";

export const useStaticImages = () => {
  const imageQueryResult = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    `
  );
  return imageQueryResult.allFile.nodes;
};
