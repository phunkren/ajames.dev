import React from 'react';
import { animated } from 'react-spring/renderprops';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { formatId } from '../utils/formatId';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { BlogTrail } from '../components/Animation';
import { Hero } from '../components/Hero';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: auto;
  margin-bottom: var(--spacing-massive);
  margin-left: auto;
  padding: 0 var(--spacing-medium);

  ${MEDIA.tablet`
    padding: 0 var(--spacing-huge);
  `}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ListItem = styled(animated.li)``;

const List = styled(animated.ul)`
  max-width: 100%;
  
  ${ListItem} + ${ListItem} {
    position: relative;
    margin-top: var(--spacing-huge);
  }

  ${MEDIA.tablet`
    max-width: ${convertPxToRem(BREAKPOINTS.tablet)};
    margin: 0 auto;
  `}
`;

const ReadMore = styled(Text)(
  ({ theme }) => css`
    align-self: flex-start;
    display: flex;
    align-items: center;
    width: fit-content;
    font-weight: 600;
    color: ${theme.linkColor};

    svg {
      will-change: transform;
      transition: transform 0.2s ease-out;
    }
  `,
);

const Title = styled(Text)(
  ({ theme }) => css`
    width: 90%;
    color: ${theme.cardHeaderColor};
    margin-bottom: var(--spacing-small);
    transition: color 0.1s ease-out;
  `,
);

const Preview = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-flow: column;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    border-radius: 4px;
    background-color: ${theme.overlay10};
    color: ${theme.cardColor};
    transition: transform 0.2s ease-out;

    &:active {
      transform: scale(0.99);
    }

    ${MEDIA.desktop`      
      &:hover {
        ${Title} {
          color: ${theme.navLinkColor};
        }
      }
    
      &:active {
        transform: none;
      }
    `};
  `,
);

const PreviewLink = styled(Link)(
  ({ theme }) => css`
    padding: var(--spacing-huge) var(--spacing-medium);
    color: ${theme.copyColor};

    &:hover {
      color: ${theme.copyColor};
    }

    &:active {
      color: inherit;

      svg {
        transform: translate3d(var(--spacing-small), 0, 0);
      }
    }

    ${MEDIA.tablet`
      padding: var(--spacing-huge);
    `}

    ${MEDIA.desktop`
      @media (hover: hover) {
        &:hover {
          color: inherit;

          ${ReadMore} {
            padding-right: var(--spacing-small);
          }

          svg {
            transform: translate3d(var(--spacing-small), 0, 0);
          }
        }
      }
    `};
  `,
);

const Info = styled(Text)(
  ({ theme }) => css`
    display: block;
    color: ${theme.auxiliaryColor};
    margin-bottom: var(--spacing-medium);
  `,
);

const StyledTitle = styled(Text)`
  color: white;
  margin-bottom: var(--spacing-large);

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}
`;

const BlogPreview = ({ post: { excerpt, frontmatter, fields } }) => {
  const formattedTitle = formatId(frontmatter.title);

  return (
    <Preview aria-labelledby={`blog post-${formattedTitle}`}>
      <PreviewLink
        to={`/blog${fields.slug}`}
        aria-label="Click to read the article in full"
      >
        <Title as="h2" size="xl" id={`post-${formattedTitle}`}>
          {frontmatter.title}
        </Title>

        <Info size="xs">
          {frontmatter.date} | {fields.readingTime.text}
        </Info>

        <Text
          as="p"
          aria-label="Excerpt"
          css="padding-bottom: var(--spacing-huge); font-weight: 400;"
        >
          {excerpt}
        </Text>

        <ReadMore>
          Read more{' '}
          <ArrowRightIcon
            role="img"
            aria-hidden="true"
            height="1em"
            width="1em"
            css="margin-left: var(--spacing-tiny); position: relative; top: 2px;"
          />
        </ReadMore>
      </PreviewLink>
    </Preview>
  );
};

export default function Blog({ data, location: { pathname } }) {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.filter(edge => !!edge.node.frontmatter.date);

  return (
    <>
      <SEO
        path={pathname}
        title="Blog"
        description="Personal contributions to modern frontend web development"
      />

      <Hero />

      <Wrapper>
        <Main>
          <StyledTitle as="h1" size="4xl" id="blog">
            Blog
          </StyledTitle>
          <List>
            <BlogTrail items={posts}>
              {(item, { s }) => (
                <ListItem
                  style={{ transform: s.interpolate(s => `scale(${s})`) }}
                >
                  <BlogPreview post={item.node} />
                </ListItem>
              )}
            </BlogTrail>
          </List>
        </Main>
      </Wrapper>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 240)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
