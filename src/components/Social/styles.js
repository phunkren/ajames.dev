import styled from "styled-components";
import { ExternalLink } from "../Link";
import { MEDIA } from "../../styles/media";

export const SocialLinks = styled.div`
  display: none;

  ${MEDIA.tablet`
    display: inline-block;
  `};
`;

export const SocialLink = styled(ExternalLink)`
  display: inline-block;
  color: black;

  &:not(:first-child) {
    margin-left: 0.75em;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.2s;
  }
`;
