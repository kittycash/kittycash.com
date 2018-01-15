import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Box } from 'grid-styled';

import Heading from 'components/Heading';
import Text from 'components/Text';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Logos from './components/Logos';
import Button from 'components/Button';


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

      <Text fontSize={[4, 4, 5]} color="black" heavy>
        <FormattedMessage id="home.about.lead" />
      </Text>
      <Box width={[1 / 2, 1, 1 / 3]} pl={[1, 0, 4]}>
        <Button
          to="whitekitties"
          color="#fcb132"
          bg="white"
          big
          width={[1, 1 / 2, 1]}
          fontSize={[3, 5]}
        >
          <FormattedMessage id="home.about.label" />
        </Button>
      </Box>
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
