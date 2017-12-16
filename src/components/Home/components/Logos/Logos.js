import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import { COLORS, FONT_SIZES, FONT_FAMILIES, SPACE } from 'config';
import Container from 'components/Container';
import media from 'utils/media';

import * as images from './images';

const Wrapper = styled.div`
  text-align: center;
  background-color: ${COLORS.gray[0]};
  border-top: 2px solid ${COLORS.gray[1]};
`;

const Logo = styled.img`
  padding: 0 1rem;
  vertical-align: middle;
  height: ${props => (props.square ? rem(50) : rem(35))};


  padding: ${rem(SPACE[4])} ${rem(SPACE[4])};

  ${media.md.css`
    height: ${props => (props.square ? rem(60) : rem(40))};
    padding: ${rem(SPACE[6])} ${rem(SPACE[4])};
  `}
`;

const StyledHeader = styled.h1`
  margin-top: ${rem(SPACE[5])};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[15])};
  color: #000000;
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Container>
    <StyledHeader>
      <FormattedMessage id="home.logos.proudofsky"/>
    </StyledHeader>
      <title>id: 'home.logos.proudofsky'</title>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.skycoin.net/"
      >
        <Logo src={images.skycoin} square />
      </a>
    </Container>
  </Wrapper>
);
