import React from 'react';
import Text from 'components/Text';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { COLORS, FONT_FAMILIES } from 'config';
import Container from 'components/Container';

import Kitties from '../Kitties';

import content from './content';

const Title = styled.div`
  font-family: ${FONT_FAMILIES.sans};
  font-size: 24px;
  font-weight: 700;
  line-height: 42px;
  color: ${COLORS.white};
  margin-bottom: 30px;

  span > span {
    color: ${COLORS.gold};
  }

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: ${COLORS.white};
    margin-bottom: 30px;
  }
`;

export default () => (
  <Container>
    <Title><FormattedMessage id="explorerPage.legendary.heading" /></Title>
    <Text color="black">
      <FormattedMessage id="explorerPage.legendary.description" />
    </Text>
    <Kitties list={content} id="legendary" />
  </Container>
);
