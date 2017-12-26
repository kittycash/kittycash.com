import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import Heading from 'components/Heading';
import { Flex, Box } from 'grid-styled';

const Introduction = () => (
  <div>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={5}>
      <FormattedMessage id="home.hero.scalable"/>
    </Heading>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={5}>
      <FormattedMessage id="home.hero.collectable"/>
    </Heading>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={5}>
      <FormattedMessage id="home.hero.breedable"/>
    </Heading>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={5}>
      <FormattedMessage id="home.hero.adorable"/>
    </Heading>
    <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={5}>
      <FormattedMessage id="home.hero.platform"/>
    </Heading>
    <Flex wrap mb={[6, 0]}>
      <Box width={[1 / 2, 1, 1 / 2]} pr={[1, 0, 4]} mb={[0, 4, 0]}>
        <Button
          href="https://blog.kittycash.io"
          color="white"
          big
          outlined
          width={[1, 1 / 2, 1]}
          fontSize={[1, 3]}
        >
          <FormattedMessage id="home.hero.blog" />
        </Button>
      </Box>
      <Box width={[1 / 2, 1, 1 / 2]} pl={[1, 0, 4]}>
        <Button
          to="whitekitties"
          color="blue.5"
          bg="white"
          big
          width={[1, 1 / 2, 1]}
          fontSize={[1, 3]}
        >
          <FormattedMessage id="home.hero.whitekitties" />
        </Button>
      </Box>
    </Flex>
  </div>
);

export default Introduction;
