import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import Heading from 'components/Heading';
import Text from 'components/Text';

import * as icons from './icons';

const Icon = styled.img`
  height: ${rem(60)};
  width: 100%;
  object-fit: contain;
`;

const Feature = ({ heading, icon, body }) => (
  <Flex>
    <Box width={[1 / 4, 1 / 6]}>
      <Icon src={icons[icon]} />
    </Box>

    <Box width={[3 / 4, 4 / 6]} ml={[2, 4]}>
      <Heading as="h3" fontSize={[3, 5]} color="black">
        <FormattedMessage id={heading} />
      </Heading>

      <Text fontSize={[2, 3]} mb={0} color="gray.9">
        <FormattedMessage id={body} />
      </Text>
    </Box>
  </Flex>
);

Feature.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Feature;
