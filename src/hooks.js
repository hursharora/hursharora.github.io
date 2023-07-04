import { graphql, useStaticQuery } from "gatsby";

export const useStaticImages = () => {
  const imageQueryResult = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          nodes {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
            name
          }
        }
      }
    `
  );
  return imageQueryResult.allFile.nodes;
};
