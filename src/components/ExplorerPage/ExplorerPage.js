import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from './components/Header/Header';
import Footer from 'components/Footer';
import Legendary from './components/Legendary';
import Custom from './components/Custom';

const ExplorerPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'explorerPage.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'explorerPage.description' })}
      />
      <meta
        name="twitter:title"
        content={intl.formatMessage({ id: 'explorerPage.twitter.title' })}
      />
      <meta
        name="twitter:description"
        content={intl.formatMessage({ id: 'explorerPage.twitter.description' })}
      />
      <meta
        name="twitter:image"
        content={intl.formatMessage({ id: 'explorerPage.twitter.image' })}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="og:title"
        content={intl.formatMessage({ id: 'explorerPage.facebook.title' })}
      />
      <meta
        property="og:description"
        content={intl.formatMessage({ id: 'explorerPage.facebook.description' })}
      />
      <meta
        property="og:image"
        content={intl.formatMessage({ id: 'explorerPage.facebook.image' })}
      />
      <meta
        property="og:url"
        content={intl.formatMessage({ id: 'explorerPage.facebook.url' })}
      />
    </Helmet>
    <Header border />

    <Legendary />
    <Custom />

    <Footer />
  </div>
);

ExplorerPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(ExplorerPage);
