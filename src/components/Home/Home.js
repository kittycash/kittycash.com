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
import Blog from './components/Blog';
import HomeKitties from './components/HomeKitties';
import Button from 'components/Button';


const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />      
      <meta
        name="twitter:title"
        content={intl.formatMessage({ id: 'home.twitter.title' })}
      />
      <meta
        name="twitter:description"
        content={intl.formatMessage({ id: 'home.twitter.description' })}
      />
      <meta
        name="twitter:image"
        content={intl.formatMessage({ id: 'home.twitter.image' })}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="og:title"
        content={intl.formatMessage({ id: 'home.facebook.title' })}
      />
      <meta
        property="og:description"
        content={intl.formatMessage({ id: 'home.facebook.description' })}
      />
      <meta
        property="og:image"
        content={intl.formatMessage({ id: 'home.facebook.image' })}
      />
      <meta
        property="og:url"
        content={intl.formatMessage({ id: 'home.facebook.url' })}
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
    <HomeKitties />
    <Blog />
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
