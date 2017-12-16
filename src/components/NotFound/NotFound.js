import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Heading from 'components/Heading';
import Button from 'components/Button';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFound = ({ intl }) => (
  <Wrapper>
    <Helmet>
      <title>{intl.formatMessage({ id: 'notFound.title' })}</title>
    </Helmet>

    <div>
      <Heading heavy as="h1" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="notFound.heading" />
      </Heading>

      <Button to="/" color="base" outlined big fontSize={[1, 3]}>
        <FormattedMessage id="notFound.home" />
      </Button>
    </div>
  </Wrapper>
);

NotFound.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(NotFound);
