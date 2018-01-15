import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Flag } from 'flag';

import media from 'utils/media';
import Container from 'components/Container';
import Header from 'components/Header';
import Map from './components/Map';
import Introduction from './components/Introduction';
import Announcement from './components/Announcement';

const Wrapper = styled.div`
  background-image: linear-gradient(-110deg, #fcb132, #99c7ff);
  position: relative;
  min-height: 35rem;
  height: auto;

  ${media.sm.css`
    height: 40rem;
  `}
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  z-index: 1;
`;

const Hero = () => (
  <Wrapper>
    <Map />

    <StyledFlex column justify="space-between">
      <Box>
        <Header white />
      </Box>
      <Box>
        <Container>
          <Flex row wrap align="center">
            <Box width={[1 / 1, 1 / 2]}>
              <Introduction />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Flag
          name="announcement"
          render={() => (
            <Announcement />
          )}
        />
      </Box>
    </StyledFlex>
  </Wrapper>
);

export default Hero;
