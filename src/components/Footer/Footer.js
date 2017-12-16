import React from 'react';
import { Flex, Box } from 'grid-styled';

import Container from 'components/Container';
import Logo from 'components/Logo';
import List from 'components/Footer/components/List';

import content from './content';

export default () => (
  <div>
    <Container>
      <Flex wrap my={[4, 8]} mx={-4}>
        <Box width={[1 / 2, 1 / 4]} my={2} px={4}>
          <Logo />
        </Box>

        {content.map(({ heading, links }, sectionIndex) => (
          <Box width={[1 / 2, 1 / 4]} my={2} px={4} key={sectionIndex}>
            <List heading={heading} links={links} />
          </Box>
        ))}
      </Flex>
    </Container>
  </div>
);
