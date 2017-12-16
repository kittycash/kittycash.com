import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage, injectIntl } from 'react-intl';
import moment from 'moment';

import { DISTRIBUTION_START } from 'config';
import Link from 'components/Link';
import Container from 'components/Container';
import Text from 'components/Text';
import megaphone from './megaphone.png';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.img.attrs({
  src: megaphone,
})`
  width: ${rem(32)};
`;

const Announcement = ({ intl }) => (
  <Wrapper>
    <Container>
      <StyledLink to="distribution">
        <Flex align="center">
          <Box mr={4}>
            <Icon />
          </Box>

          <Box>
            <Text color="white" fontSize={[1, 3]} heavy py={4} m={0}>
              <FormattedMessage
                id="home.hero.announcement"
                values={{
                  date: moment(DISTRIBUTION_START).locale(intl.locale).format('LL'),
                }}
              />
            </Text>
          </Box>
        </Flex>
      </StyledLink>
    </Container>
  </Wrapper>
);

Announcement.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(Announcement);
