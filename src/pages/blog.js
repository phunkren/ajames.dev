import React from "react";
import styled from "styled-components";
import { position, rgba } from "polished";
import { graphql } from "gatsby";
import { PostLink } from "../components/Link";
import { Navigation } from "../components/Navigation";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Social } from "../components/Social";
import { Layout } from "../components/Layout";
import { MEDIA, BREAKPOINTS } from "../styles/media";
import { COLORS } from "../styles/colors";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 2em;

  ${MEDIA.desktopWide`
    padding: 1em;
  `};
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  ${MEDIA.tablet`
    justify-content: space-between;
  `};
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li``;

const List = styled.ul`
  max-width: ${BREAKPOINTS.tablet}px;
  margin: 0 auto;
  
  ${ListItem} + ${ListItem} {
    position: relative;
    margin-top: 2em;
    padding-top: 2em;

    &::before {
      ${position("absolute", "0", "0", null, "0")};
      content: "";
      height: 1px;
      background-color: ${rgba(COLORS.black, 0.5)};
    }
  }
`;

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <ListItem>
        <PostLink key={edge.node.id} post={edge.node} />
      </ListItem>
    ));

  return (
    <Layout>
      <TitleAndMetaTags title="Blog" pathname="blog" />
      <Wrapper>
        <Header>
          <Navigation />
          <Social />
        </Header>

        <Section>
          <List>{posts}</List>
        </Section>
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image {
              childImageSharp {
                fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
