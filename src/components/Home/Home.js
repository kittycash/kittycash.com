import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';

import { FONT_SIZES } from 'config';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Link from 'components/Link';
import Text from 'components/Text';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Logos from './components/Logos';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: ${rem(FONT_SIZES[5])};

  &:hover {
    text-decoration: none;
  }
`;

const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />
    </Helmet>

    <Hero />
    <About>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="home.about.heading" />
      </Heading>

      <Text fontSize={[3, 3, 4]} color="black" heavy>
        <FormattedMessage id="home.about.lead" />
      </Text>
      <StyledLink to="whitekitties" target="_blank">
        <Label>
          <FormattedMessage id="home.about.label" />
        </Label>
      </StyledLink>
    </About>
    <Logos />
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
