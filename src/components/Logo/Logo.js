import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import Link from 'components/Link';
import logoWhite from './KittyCash_dollars_W.svg';
import logoBlack from './KittyCash_dollars.svg';

const StyledLink = styled(Link)`
  display: block;
`;

const Img = styled.img.attrs({
  alt: 'Kitty Cash',
})`
  display: block;
  height: ${rem(90)};
  max-width: 100%;
`;

const Logo = props => (
  <StyledLink to="/">
    <Img {...props} src={props.white ? logoWhite : logoBlack} />
  </StyledLink>
);

Logo.propTypes = {
  white: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
