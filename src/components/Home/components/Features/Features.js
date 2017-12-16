import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import { COLORS } from 'config';
import Container from 'components/Container';

import Feature from './components/Feature';
import features from './content';
import background from './background.png';

// TODO: update background image to use global colors
const Features = styled.div`
  background: url(${background}) repeat-x top center / ${rem(48)} #f7f7f7;
  border-top: 2px solid ${COLORS.gray[1]};
`;

export default () => (
  <Features>
    <Container>
      <Flex wrap pb={[7, 8]}>
        {features.map(({ heading, body, icon }, index) => (
          <Box width={[1 / 1, 1 / 2]} mt={[7, 8]} key={index}>
            <Feature heading={heading} body={body} icon={icon} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Features>
);
