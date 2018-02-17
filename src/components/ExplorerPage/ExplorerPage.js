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
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
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
