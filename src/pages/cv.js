import React from 'react';
import { isBrowser, isIE } from 'react-device-detect';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Layout } from '../components/Layout';
import cv from '../assets/documents/Andrew James CV.pdf';
import { formatId } from '../utils/formatId';
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  HomeIcon,
} from '../components/icons';
import { ExternalLink, DownloadLink } from '../components/Link';
import { IconButton } from '../components/Button';
import { Text } from '../components/Text';
import { DownloadIcon, PrintIcon } from '../components/icons';
import SEO from '../components/SEO';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Theme } from '../components/Theme';

const List = styled.ul`
  margin-bottom: 2em;
`;

const ListItem = styled.li`
  margin-bottom: 1em;

  ${Text} {
    margin-left: 1em;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  display: inline-flex;
  align-items: center;
  color: inherit;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  max-width: ${BREAKPOINTS.desktopWide}px;
  background-color: var(--color-white);
  z-index: -2;

  ${MEDIA.tablet`
    margin: 160px auto 2rem;
  `}

  ${MEDIA.desktopWide`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .18);
  `}

  ${MEDIA.print`
    margin: 0;
  `}
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2em 1em;
  text-align: center;

  ${MEDIA.tablet`
    justify-content: space-between;
    padding: 2em;
    text-align: left;
  `}

  ${MEDIA.print`
    justify-content: space-between;
    text-align: left;
  `};
`;

const HeaderIcons = styled.div`
  display: none;

  ${MEDIA.desktop`
    display: block;
  `};

  ${MEDIA.print`
    display: none;
  `};
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1em;
  border-top: 5px solid var(--color-black);
  border-bottom: 5px solid var(--color-black);

  ${MEDIA.tablet`
    display: inline-flex;
    flex-direction: row;
    padding: 2em;
  `};

  ${MEDIA.print`
    display: inline-flex;
    flex-direction: row;
    padding: 2em;
  `};
`;

const Sidebar = styled.div`
  ${MEDIA.tablet`
    flex: 0 1 33%;
    border-right: 2px solid var(--color-black);
    padding: 0 2em 0 0;
  `};

  ${MEDIA.print`
    flex: 0 1 33%;
    border-right: 2px solid var(--color-black);
    padding: 0 2em 0 0;
  `};
`;

const Experience = styled.div`
  padding: 0;

  ${MEDIA.tablet`
    flex: 1;
    padding-left: 2em;
  `};

  ${MEDIA.print`
    flex: 1;
    padding-left: 2em;
  `};
`;

const Block = styled.section`
  margin-bottom: 3rem;
`;

const BlockHeader = styled(props => <Text as="h2" size="l" {...props} />)`
  margin-bottom: 1em;
  border-bottom: 1px solid var(--color-gray-400);
`;

const Description = styled.div`
  ${Text} {
    margin-top: 1.5em;
    padding-bottom: 0;
  }

  ul {
    padding-left: 1.5em;
    margin-top: 0.25em;
    margin-bottom: 0;
  }
`;

const Tag = styled(props => <Text size="xs" {...props} />)`
  padding: 0.5em;
  border-radius: 4px;
  text-transform: uppercase;
  text-align: center;
  background-color: var(--color-gray-200);
  border: 1px solid var(--color-gray-400);

  ${MEDIA.print`
    background-color: transparent;
  `}
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${Tag} {
    flex: 1 0 100%;
    margin-bottom: 0.5em;
  }

  ${MEDIA.tablet`
    flex-direction: row;
    justify-content: space-between;
      
    ${Tag} {
      flex: 0 1 calc(50% - 0.5em);
    }
  `}
`;

const Dates = styled(Text)`
  display: block;

  ${MEDIA.tablet`
    display: inline-block;
    position: relative;
    margin-left: 2rem;
  `};
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 0.25rem;

  ${MEDIA.tablet`
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 0;
  `};
`;

const Title = styled(Text)`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default function CV({ data }) {
  const { education } = data.educationJson;
  const { experience } = data.experienceJson;
  const { social } = data.socialJson;
  const { author, url } = data.site.siteMetadata;

  const currentPosition = experience[0].position;
  const siteDisplayUrl = url.split('https://')[1];
  const expertise = ['html', 'css/scss', 'javascript', 'react'];
  const interests = ['react native', 'a11y', 'graphQL', 'css-in-js'];
  const hobbies = ['cycling', 'guitar', 'gaming', 'rugby'];

  function handleCvPrint() {
    trackCustomEvent({
      category: 'CV print button',
      action: 'Click',
      label: 'Print',
    });

    window.print();
  }

  function handleCvDownload() {
    trackCustomEvent({
      category: 'CV download link',
      action: 'Click',
    });
  }

  return (
    <Layout>
      <SEO title="CV" pathname="/cv" />
      <Theme theme="dark">
        <Header />
      </Theme>
      <Hero />
      <Container as="main">
        <Title as="h1" id="cv">
          Résumé
        </Title>
        <Heading>
          <div>
            <Text as="h1" size="4xl">
              {author.name}
            </Text>
            <Text size="m">
              {currentPosition} / {author.location}
            </Text>
          </div>

          {isBrowser && !isIE && (
            <HeaderIcons aria-label="Export CV">
              <IconButton aria-label="Print" onClick={handleCvPrint}>
                <PrintIcon width="2.5rem" height="2.5rem" />
              </IconButton>
              <DownloadLink
                aria-label="Download"
                href={cv}
                css="display: inline-flex; margin-left: 0.5em; padding: 0.5em; color: inherit;"
                onClick={handleCvDownload}
              >
                <DownloadIcon width="2.5rem" height="2.5rem" />
              </DownloadLink>
            </HeaderIcons>
          )}
        </Heading>

        <Wrapper>
          <Sidebar>
            <Block aria-labelledby="cv-contact">
              <BlockHeader id="cv-contact">Contact</BlockHeader>
              <nav aria-label="Contact">
                <List>
                  <ListItem>
                    <StyledExternalLink
                      href={`mailto:${author.email}`}
                      aria-label="Email me"
                    >
                      <EmailIcon width="1.5rem" height="1.5rem" />
                      <Text size="s">{author.email}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={url}
                      aria-label="Return to homepage"
                    >
                      <HomeIcon width="1.5rem" height="1.5rem" />
                      <Text size="s">{siteDisplayUrl}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={social.github.url}
                      aria-label={`${social.github.label} profile`}
                    >
                      <GitHubIcon width="1.5rem" height="1.5rem" />
                      <Text size="s">{social.github.handle}</Text>
                    </StyledExternalLink>
                  </ListItem>

                  <ListItem>
                    <StyledExternalLink
                      href={social.linkedIn.url}
                      aria-label={`${social.linkedIn.label} profile`}
                    >
                      <LinkedInIcon width="1.5rem" height="1.5rem" />
                      <Text size="s">{social.linkedIn.handle}</Text>
                    </StyledExternalLink>
                  </ListItem>
                </List>
              </nav>
            </Block>

            <Block aria-labelledby="cv-education">
              <BlockHeader id="cv-education">Education</BlockHeader>
              {education.map(({ qualification, course, institute, dates }) => (
                <Block
                  key={institute}
                  css="margin-bottom: 1.5rem;"
                  aria-labelledby={`cv-education edu-${formatId(
                    qualification,
                  )}`}
                >
                  <Text as="h3" size="m" id={`edu-${formatId(qualification)}`}>
                    {qualification}
                  </Text>
                  <Text size="pb">{course}</Text>
                  <br />
                  <Text size="pb">{institute}</Text>
                  <br />
                  <Text size="xs">{dates}</Text>
                  <br />
                </Block>
              ))}
            </Block>

            <Block aria-labelledby="cv-expertise">
              <BlockHeader id="cv-expertise">Expertise</BlockHeader>
              <TagContainer>
                {expertise.map((skill, index) => (
                  <Tag key={`Skill-${index}`}>{skill}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-interests">
              <BlockHeader id="cv-interests">Interests</BlockHeader>
              <TagContainer>
                {interests.map((interest, index) => (
                  <Tag key={`Interest-${index}`}>{interest}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-hobbies">
              <BlockHeader id="cv-hobbies">Hobbies</BlockHeader>
              <TagContainer>
                {hobbies.map((hobby, index) => (
                  <Tag key={`Hobby-${index}`}>{hobby}</Tag>
                ))}
              </TagContainer>
            </Block>

            <Block aria-labelledby="cv-references">
              <BlockHeader id="cv-references">References</BlockHeader>
              <Text>Written references available on request.</Text>
            </Block>
          </Sidebar>

          <Experience>
            <Block aria-labelledby="cv-profile">
              <BlockHeader id="cv-profile">Profile</BlockHeader>
              <Text as="p">
                My passion for digital technology continually drives me to
                advance my skill set as a software engineer. With an analytical
                mindset and strong communication and frontend development
                skills, I thrive in environments where I can learn from others
                and inspire those around me.
              </Text>

              <Text as="p" css="margin-top: 1em">
                Over the years I&#39;ve refined a set of technical principles to
                strive towards, namely: complexity should only be introduced
                when it’s unavoidable; code should be easy to reason with and
                delete; avoid abstracting too early, and the top priority is
                always the best possible user experience.
              </Text>
            </Block>

            <Block>
              <BlockHeader id="cv-experience">Experience</BlockHeader>
              {experience.map(
                ({ position, company, url, dates, blurb, portfolio }) => (
                  <Block
                    key={company}
                    aria-labelledby={`cv-experience exp-${formatId(company)}`}
                    css="margin-bottom: 3rem;"
                  >
                    <Text as="h3" size="xl" id={`exp-${formatId(company)}`}>
                      {position}
                    </Text>
                    <ExperienceInfo>
                      <ExternalLink
                        href={url}
                        aria-label={`${company} website`}
                        highlight
                      >
                        <Text>{company}</Text>
                      </ExternalLink>{' '}
                      <Dates size="xs">{dates}</Dates>
                    </ExperienceInfo>
                    <Description>
                      <Text as="p">{blurb}</Text>
                      <Text as="h4" size="m">
                        Notable work
                      </Text>
                      <ul>
                        {portfolio.map(({ name, href }) => (
                          <li key={name}>
                            <ExternalLink href={href} highlight>
                              <Text size="pb">{name}</Text>
                            </ExternalLink>
                          </li>
                        ))}
                      </ul>
                    </Description>
                  </Block>
                ),
              )}
            </Block>
          </Experience>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query CvQuery {
    site {
      siteMetadata {
        author {
          name
          location
          email
        }
        url
      }
    }
    educationJson {
      education {
        course
        dates
        institute
        qualification
      }
    }
    experienceJson {
      experience {
        blurb
        company
        dates
        portfolio {
          href
          name
        }
        position
        url
      }
    }
    socialJson {
      social {
        github {
          handle
          label
          url
        }
        linkedIn {
          handle
          label
          url
        }
      }
    }
  }
`;
