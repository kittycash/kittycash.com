import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FONT_SIZES, FONT_FAMILIES, SPACE } from 'config';
import { Box } from 'grid-styled';
import Container from 'components/Container';
import Button from 'components/Button';
import content from './content';
import Kitties from '../../../ExplorerPage/components/Kitties';

const KittyTitle = styled.h1`
      margin-top: ${rem(SPACE[5])};
      font-family: ${FONT_FAMILIES.mono};
      font-size: ${rem(FONT_SIZES[15])};
      color: #394049;
      text-decoration: none;
      text-align: center;
    `;


const Wrapper = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  padding-bottom: 20px;
`;

const HomeKitties = () => (
  <Wrapper>
    <Container>
    <KittyTitle>Explore our legendary kitties</KittyTitle>
    <Kitties list={content} id="legendary" hide_address="true"/>
    <ButtonContainer>
      <Box width={[1, 1, 1]} pt={[2, 0, 2]} >
          <Button
            to="explorekitties"
            color="white"
            bg="#fcb132"
            width={[1, 1 / 2, 1]}
            fontSize={[3, 5]}
            children={false}
          >
          <span>Explore them all</span>
        </Button>
      </Box>
    </ButtonContainer>
  </Container>
  </Wrapper>
);

export default HomeKitties;
