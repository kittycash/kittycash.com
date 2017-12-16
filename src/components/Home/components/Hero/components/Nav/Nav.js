import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';
import { FormattedMessage } from 'react-intl';

import { FONT_SIZES, FONT_FAMILIES, SPACE } from 'config';

import Link from 'components/Link';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(SPACE[4])};

  ${media.sm.css`
    margin-bottom: 0;
  `}
`;

const StyledLink = styled(Link)`
  margin-bottom: ${rem(SPACE[2])};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[5])};
  color: ${props => (props.disabled ? '#EFF0F0' : '#fff')};
  text-decoration: none;

  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
`;

const Nav = () => (
  <Wrapper>
    <StyledLink to="/architecture-overview">
      <FormattedMessage id="home.nav.architecture" />
    </StyledLink>
    <StyledLink disabled href="/whitekitties">
      <FormattedMessage id="home.nav.whitekitties" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/skycoin">
      <FormattedMessage id="home.nav.blockchain" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/cx">
      <FormattedMessage id="home.nav.cx" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/cxo">
      <FormattedMessage id="home.nav.cxo" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/skywire">
      <FormattedMessage id="home.nav.skywire" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/viscript">
      <FormattedMessage id="home.nav.viscript" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/skywire">
      <FormattedMessage id="home.nav.cryptoSphere" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/net">
      <FormattedMessage id="home.nav.messenger" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/skycoin-mobilewallet">
      <FormattedMessage id="home.nav.mobileWallet" />
    </StyledLink>
    <StyledLink disabled href="https://github.com/skycoin/bbs">
      <FormattedMessage id="home.nav.bbs" />
    </StyledLink>
  </Wrapper>
);

export default Nav;
