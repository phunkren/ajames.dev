import React from 'react';
import { animated } from 'react-spring/renderprops';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import cv from '../assets/documents/Andrew James CV.pdf';
import { formatId } from '../utils/formatId';
import { convertPxToRem } from '../utils/unitConversion';
import { FadeThrough } from '../components/Animation';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { ExternalLink, DownloadLink } from '../components/Link';
import { IconButton } from '../components/Button';
import { Text } from '../components/Text';
import { SEO } from '../components/SEO';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import {
  EnvelopeOpenIcon,
  FileIcon,
  GitHubLogoIcon,
  HomeIcon,
  DownloadIcon,
} from '@radix-ui/react-icons';
import { Hero } from '../components/Hero';

const List = styled.ul`
  margin-bottom: var(--spacing-huge);
`;

const ListItem = styled.li`
  margin-bottom: var(--spacing-medium);

  ${Text} {
    margin-left: var(--spacing-medium);
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  display: inline-flex;
  align-items: center;
  line-height: 1.5rem;
`;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  position: relative;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  padding-right: var(--spacing-medium);
  padding-left: var(--spacing-medium);
  max-width: ${convertPxToRem(BREAKPOINTS.desktopWide)};

  ${MEDIA.tablet`
    padding-right: var(--spacing-huge);
    padding-left:  var(--spacing-huge);
  `}

  ${MEDIA.print`
    margin-top: 0;
    padding-right: 0;
    padding-left: 0;
    max-width: none;
  `}
`;

const Container = styled(animated.div)(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${theme.overlay10};
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: var(--spacing-large);

    ${MEDIA.tablet`
      margin-bottom: var(--spacing-massive);
    `}

    ${MEDIA.print`
      margin-bottom: 0;
      border-top: none;
    `}
  `,
);

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: var(--spacing-huge) var(--spacing-medium);

  ${MEDIA.tablet`
    padding: var(--spacing-huge);
  `}

  ${MEDIA.print`
    padding: var(--spacing-huge);
  `};
`;

const HeaderIcons = styled.div`
  display: none;

  ${MEDIA.tablet`
    display: flex;
    align-items: center;

    & > ${DownloadLink} {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: var(--spacing-medium);
      min-width: 44px;
      min-height: 44px;
    }
  `}
`;

const Wrapper = styled.div(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    padding: 0 var(--spacing-medium);

    ${MEDIA.tablet`
      border-top: 5px solid;
      border-bottom: 5px solid;
      border-color: ${theme.borderColor};
      padding: var(--spacing-huge);
    `}

    ${MEDIA.desktop`
      display: inline-flex;
      flex-direction: row;
    `};

    ${MEDIA.print`
      display: inline-flex;
      flex-direction: row;
      padding: var(--spacing-huge);
      border-top: 5px solid;
      border-color: var(--color-black);
    `};
  `,
);

const Sidebar = styled.div(
  ({ theme }) => css`
    ${MEDIA.desktop`
      flex: 0 1 33%;
      border-right: 2px solid; 
      border-color: ${theme.borderColor};
      padding: 0 var(--spacing-huge) 0 0;
    `};

    ${MEDIA.print`
      flex: 0 1 33%;
      border-right: 2px solid;
      border-color: var(--color-black);
      padding: 0 var(--spacing-huge) 0 0;
    `};
  `,
);

const Experience = styled.div`
  padding: 0;

  ${MEDIA.desktop`
    flex: 1;
    padding-left: var(--spacing-huge);
  `};

  ${MEDIA.print`
    flex: 1;
    padding-left: var(--spacing-huge);
  `};
`;

const Block = styled.section`
  margin-bottom: var(--spacing-huge);

  ${MEDIA.desktop`
    margin-bottom: var(--spacing-massive);
  `};

  ${MEDIA.print`
    margin-bottom: var(--spacing-giant);
  `};
`;

const BlockHeader = styled(props => <Text as="h2" size="l" {...props} />)(
  ({ theme }) => css`
    margin-bottom: var(--spacing-large);
    border-bottom: 1px solid ${theme.cvBorderColor};
    color: ${theme.headerColor};

    ${MEDIA.print`
      border-color: var(--color-black);
      color: var(--color-black);
    `}
  `,
);

const BlockSubheader = styled(Text)(
  ({ theme }) => css`
    color: ${theme.cvSubheaderColor};
    margin-bottom: var(--spacing-tiny);

    ${MEDIA.print`
      color: var(--color-black);
    `}
  `,
);

const Description = styled.div`
  ${Text} {
    margin-top: var(--spacing-large);
    padding-bottom: 0;
  }

  ${Text}:first-child {
    margin-top: var(--spacing-medium);
  }

  ul {
    list-style-type: disc;
    padding-left: var(--spacing-large);
    margin-top: var(--spacing-small);
    margin-bottom: 0;
  }

  ${MEDIA.print`
    ${Text} {
      margin-top: var(--spacing-small);
    }
  `}
`;

const Tag = styled(props => <Text size="xs" {...props} />)(
  ({ theme }) => css`
    padding: var(--spacing-small);
    border-radius: 4px;
    text-align: center;
    border: 1px solid;
    border-color: ${theme.cvInterfaceColor};
    color: ${theme.copyColor};

    ${MEDIA.print`
      color: var(--color-black);
      border-color: var(--color-gray-400);
    `}
  `,
);

const TagContainer = styled.div`
  display: grid;
  grid-column-gap: var(--spacing-small);
  grid-row-gap: var(--spacing-small);

  ${MEDIA.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Dates = styled(Text)(
  ({ theme }) => css`
    display: block;
    color: ${theme.auxiliaryColor};

    ${MEDIA.tablet`
      align-self: flex-end;
      margin-left: auto;  
    `}

    ${MEDIA.print`
      transform: translateY(-1px);
      margin-left: auto;  
    `}
  `,
);

const EmployerLocation = styled(Text)(
  ({ theme }) => css`
    position: relative;
    color: ${theme.auxiliaryColor};
    margin-top: var(--spacing-tiny);
    margin-bottom: var(--spacing-tiny);

    ${MEDIA.tablet`
      margin-top: 0;
      margin-bottom: 0;
      margin-left: var(--spacing-large);
      
      &::before {
        content: '/';
        position: absolute;
        left: calc(var(--spacing-medium) * -1);
        top: 50%;
        transform: translate(50%, -50%);
      }
    `}

    ${MEDIA.print`
      margin-top: 0;
      margin-bottom: 0;
      margin-left: var(--spacing-large);
      
      &::before {
        content: '/';
        position: absolute;
        left: calc(var(--spacing-medium) * -1 - 2px);
        top: 50%;
        transform: translate(50%, -50%);
      }
    `}
  `,
);

const ExperienceEmployer = styled.div`
  display: flex;
  flex-flow: column;

  ${MEDIA.tablet`
    flex-flow: row;
    align-items: baseline;
  `};

  ${MEDIA.print`
    flex-flow: row;
    align-items: baseline;
  `};
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-flow: column;

  ${MEDIA.tablet`
    flex-flow: row;
  `}

  ${MEDIA.print`
    flex-flow: row;
    align-items: baseline;
  `}
`;

const AuthorInfo = styled(Text)(
  ({ theme }) => css`
    color: ${theme.auxiliaryColor};
  `,
);

const Title = styled(Text)`
  color: var(--color-white);
  margin-bottom: var(--spacing-large);
  text-align: center;

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}

  ${MEDIA.print`
    display: none;
  `}
`;

const EducationBlock = styled(Block)(({ variant }) => [
  css`
    display: flex;
    flex-flow: column;

    ${MEDIA.desktop`
      margin-bottom: var(--spacing-huge);
    `};
  `,
  variant === 'slim' &&
    css`
      margin-bottom: var(--spacing-medium);

      ${MEDIA.desktop`
        margin-bottom: var(--spacing-large);
      `};
    `,
]);

export default function CV({ data, location: { pathname } }) {
  const { education } = data.educationJson;
  const { experience } = data.experienceJson;
  const { social } = data.socialJson;
  const { author, siteUrl } = data.site.siteMetadata;
  const currentPosition = experience[0].position;
  const siteDisplayUrl = siteUrl.split('https://')[1];
  const expertise = ['html', 'css/css-in-js', 'javascript', 'react'];
  const interests = ['design systems', 'a11y', 'typescript', 'storybook'];
  const hobbies = ['writing', 'streaming', 'cycling', 'guitar'];

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
    <>
      <SEO
        path={pathname}
        title="CV"
        description="An overview of my experience and technical expertise"
      />

      <Hero />

      <Wrap>
        <Main>
          <Title as="h1" size="4xl" id="cv">
            CV
          </Title>
          <FadeThrough>
            {({ s, o }) => (
              <Container
                style={{
                  transform: s.interpolate(s => `scale(${s})`),
                  opacity: o && o.interpolate(o => o),
                }}
              >
                <Heading>
                  <div>
                    <Text
                      as="h1"
                      size="4xl"
                      css={`
                        color: ${({ theme }) => theme.copyColor};

                        ${MEDIA.print`
                          color: var(--color-black);
                        `}
                      `}
                    >
                      {author.name}
                    </Text>
                    <AuthorInfo size="m">
                      {currentPosition} / {author.location}
                    </AuthorInfo>
                  </div>

                  <HeaderIcons aria-label="Export CV">
                    <IconButton
                      title="Print"
                      aria-label="Print"
                      onClick={handleCvPrint}
                    >
                      <FileIcon
                        role="img"
                        title="Print"
                        width="2rem"
                        height="2rem"
                      />
                    </IconButton>

                    <DownloadLink
                      title="Download"
                      aria-label="Download"
                      href={cv}
                      onClick={handleCvDownload}
                    >
                      <DownloadIcon
                        role="img"
                        title="Download"
                        width="2rem"
                        height="2rem"
                      />
                    </DownloadLink>
                  </HeaderIcons>
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
                              <EnvelopeOpenIcon
                                role="img"
                                title="Email me"
                                width="1.5rem"
                                height="1.5rem"
                              />
                              <Text size="s">{author.email}</Text>
                            </StyledExternalLink>
                          </ListItem>

                          <ListItem>
                            <StyledExternalLink
                              href={siteUrl}
                              aria-label="Return to homepage"
                            >
                              <HomeIcon
                                role="img"
                                title="Visit me"
                                width="1.5rem"
                                height="1.5rem"
                              />
                              <Text size="s">{siteDisplayUrl}</Text>
                            </StyledExternalLink>
                          </ListItem>

                          <ListItem>
                            <StyledExternalLink
                              href={social.github.url}
                              aria-label={`${social.github.label} profile`}
                            >
                              <GitHubLogoIcon
                                role="img"
                                title="My Github profile"
                                width="1.5rem"
                                height="1.5rem"
                              />
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
                      {education.map(
                        (
                          { qualification, course, institute, dates },
                          index,
                        ) => (
                          <EducationBlock
                            key={institute}
                            id={`edu-${formatId(institute)}`}
                            aria-label={institute}
                            aria-labelledby={`cv-education edu-${formatId(
                              institute,
                            )}`}
                            variant={index === 0 && 'slim'}
                          >
                            {qualification && (
                              <BlockSubheader
                                as="h3"
                                size="l"
                                id={`edu-${formatId(qualification)}`}
                              >
                                {qualification}
                              </BlockSubheader>
                            )}
                            <Text
                              size="ps"
                              css="font-weight: 600; margin-bottom: var(--spacing-tiny);"
                            >
                              {course}
                            </Text>
                            <Text size="ps">{institute}</Text>
                            <Text
                              css={`
                                color: ${({ theme }) => theme.auxiliaryColor};
                                margin-top: var(--spacing-tiny);
                              `}
                              size="xs"
                            >
                              {dates}
                            </Text>
                          </EducationBlock>
                        ),
                      )}
                    </Block>

                    <Block aria-labelledby="cv-expertise">
                      <BlockHeader id="cv-expertise">Expertise</BlockHeader>
                      <TagContainer>
                        {expertise.map((skill, index) => (
                          <Tag key={`Skill-${index}`}>{skill}</Tag>
                        ))}
                      </TagContainer>
                    </Block>

                    <Block
                      aria-labelledby="cv-interests"
                      css={`
                        ${MEDIA.print`padding-top: var(--spacing-huge);`}
                      `}
                    >
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
                        My passion for digital technology continually drives me
                        to advance my skill set as a software engineer. With an
                        analytical mindset and strong communication and frontend
                        development skills, I thrive in environments where I can
                        learn from others and inspire those around me.
                      </Text>

                      <Text as="p" css="margin-top: var(--spacing-medium);">
                        Over the years I&#39;ve refined a set of technical
                        principles to strive towards, namely: complexity should
                        only be introduced when it’s unavoidable; code should be
                        easy to reason with and delete; avoid abstracting too
                        early, and the top priority is always the best possible
                        user experience.
                      </Text>
                    </Block>

                    <Block>
                      <BlockHeader id="cv-experience">Experience</BlockHeader>
                      {experience.map(
                        ({
                          position,
                          company,
                          location,
                          url,
                          dates,
                          blurb,
                          portfolio,
                        }) => (
                          <Block
                            key={`${company}-${position}`}
                            id={`exp-${formatId(`${company}-${position}`)}`}
                            aria-label={`${company}: ${position}`}
                          >
                            <BlockSubheader as="h3" size="xl">
                              {position}
                            </BlockSubheader>
                            <ExperienceInfo>
                              <ExperienceEmployer>
                                <ExternalLink
                                  href={url}
                                  aria-label={`${company} website`}
                                  css="width: fit-content;"
                                  highlight
                                >
                                  <Text>{company}</Text>
                                </ExternalLink>
                                <EmployerLocation size="ps">
                                  {location}
                                </EmployerLocation>
                              </ExperienceEmployer>
                              <Dates size="xs">{dates}</Dates>
                            </ExperienceInfo>
                            <Description>
                              {blurb ? <Text as="p">{blurb}</Text> : null}

                              {portfolio ? (
                                <>
                                  <Text as="h4" size="m">
                                    Notable work
                                  </Text>
                                  <ul>
                                    {portfolio.map(({ name, href }) => (
                                      <li key={name}>
                                        <ExternalLink href={href}>
                                          <Text size="ps">{name}</Text>
                                        </ExternalLink>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              ) : null}
                            </Description>
                          </Block>
                        ),
                      )}
                    </Block>
                  </Experience>
                </Wrapper>
              </Container>
            )}
          </FadeThrough>
        </Main>
      </Wrap>
    </>
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
        siteUrl
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
        location
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
