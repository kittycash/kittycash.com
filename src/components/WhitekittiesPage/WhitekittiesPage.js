import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Whitekitties from './components/Whitekitties';

const WhitekittiesPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'whitekitties.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'whitekitties.description' })}
      />
    </Helmet>
    <Header border />

    <Whitekitties />

    <Footer />
  </div>
);

WhitekittiesPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(WhitekittiesPage);
