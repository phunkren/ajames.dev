import React from "react";
import styled, { keyframes } from "styled-components";
import { position } from "polished";
import { Layout } from "../components/Layout";
import { Social } from "../components/Social";
import lightbulbs from "../assets/images/lightbulbs.png";
import { ExternalLink } from "../components/Link";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags";
import { Navigation } from "../components/Navigation";
import { MEDIA } from "../styles/media";
import { H1, Text } from "../styles/typography";
import { CONTACT_DETAILS } from "../constants";
import { EXPERIENCE } from "../data";

const infiniteScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -300vh, 0);
  }
`;

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

  ${MEDIA.tablet`
    justify-content: space-between;
  `};
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSocial = styled(Social)`
  margin-bottom: 0.5em;

  ${MEDIA.tablet`
    display: none;
  `};
`;

const Image = styled.div`
  ${position("absolute", "100%", 0, null, 0)};
  background-image: url(${lightbulbs});
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  margin-bottom: 100vh;
  height: 200vh;
  opacity: 0.075;
  pointer-events: none;
  animation: ${infiniteScroll} 45s linear infinite;
`;

export default function Home() {
  const { name, location } = CONTACT_DETAILS;
  const currentEmployer = EXPERIENCE[0];
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <TitleAndMetaTags />
      <Wrapper>
        <Header>
          <Navigation />
          <Social />
        </Header>

        <Section>
          <H1>{name}</H1>
          <Text as="p">
            {currentEmployer.position} @{" "}
            <ExternalLink
              href={currentEmployer.url}
              aria-label={`${currentEmployer.company}'s website`}
              withHighlight
            >
              {currentEmployer.company}
            </ExternalLink>
          </Text>
          <Text as="p">{location}</Text>
        </Section>

        <Footer>
          <FooterSocial />
          <Text as="p" small>
            background courtesy of{" "}
            <ExternalLink
              href="https://absurd.design/"
              aria-label="absurd.design"
              withHighlight
            >
              absurd.design
            </ExternalLink>
          </Text>
          <Text as="p" small>
            &copy; {currentYear}
          </Text>
        </Footer>

        <Image />
      </Wrapper>
    </Layout>
  );
}
