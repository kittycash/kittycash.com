import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { rem } from 'polished';

import { COLORS } from 'config';
import Container from 'components/Container';

import background from './background.png';

// TODO: update background image to use global colors
const Wrap = styled.div`
  background: url(${background}) repeat-x top center / ${rem(48)} #f7f7f7;
  border-bottom: 2px solid ${COLORS.gray[1]};
`;

const About = ({ children }) => (
  <Wrap>
    <Container>
      <Box py={[7, 8]}>
        {children}
      </Box>
    </Container>
  </Wrap>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
};

