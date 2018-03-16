import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import Link from 'components/Link';
import logo from './logo.svg';

const StyledLink = styled(Link)`
  display: block;
`;

const Img = styled.img.attrs({
  alt: 'KittyCash',
})`
  display: block;
  height: ${rem(90)};
  max-width: 100%;
`;

const Logo = props => (
  <StyledLink to="/">
    <Img {...props} src={logo} />
  </StyledLink>
);

Logo.propTypes = {
  white: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
