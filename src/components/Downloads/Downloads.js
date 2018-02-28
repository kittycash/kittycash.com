import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Branding from './components/Branding';

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />      
      <meta
        name="twitter:title"
        content={intl.formatMessage({ id: 'downloads.twitter.title' })}
      />
      <meta
        name="twitter:description"
        content={intl.formatMessage({ id: 'downloads.twitter.description' })}
      />
      <meta
        name="twitter:image"
        content={intl.formatMessage({ id: 'downloads.twitter.image' })}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="og:title"
        content={intl.formatMessage({ id: 'downloads.facebook.title' })}
      />
      <meta
        property="og:description"
        content={intl.formatMessage({ id: 'downloads.facebook.description' })}
      />
      <meta
        property="og:image"
        content={intl.formatMessage({ id: 'downloads.facebook.image' })}
      />
      <meta
        property="og:url"
        content={intl.formatMessage({ id: 'downloads.facebook.url' })}
      />
    </Helmet>
    <Header border />

    <Branding />

    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);
