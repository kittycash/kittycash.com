import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { SPACE } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Container from 'components/Container';

const Wrapper = styled.div`
  background-image: linear-gradient(-110deg, #fcb132, #99c7ff);
  padding-bottom: ${rem(SPACE[5])};
`;

const ExplorerHeader = ({ children }) => (
  <Wrapper>
    <Container>
      <Header white />
      <Heading heavy color="white" as="h1" fontSize={[6, 7, 8]}>
        <FormattedMessage id="explorerPage.heading" />
      </Heading>
    </Container>
    {children}
  </Wrapper>
);

export default ExplorerHeader;

// ExplorerHeader.propTypes = {
//   children: PropTypes.node.isRequired,
// };
