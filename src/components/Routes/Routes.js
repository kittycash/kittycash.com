import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
// import WhitekittiesPage from '../WhitekittiesPage';
import RoadmapPage from '../RoadmapPage';
import NotFound from '../NotFound';
import Soon from '../Soon';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
      <Route path={`${prefix}explorekitties`} exact component={Soon} />
      <Route path={`${prefix}whitekitties`} exact component={Soon} />
      <Route path={`${prefix}roadmap`} exact component={RoadmapPage} />
      <Route path={`${prefix}soon`} exact component={Soon} />
      <Redirect from={`${prefix}whitekitties.html`} to={`${prefix}whitekitties`} />
      <Redirect from={`${prefix}downloads.html`} to={`${prefix}downloads`} />
      <Redirect from={`${prefix}faq.html`} to={`${prefix}`} />
      <Redirect from={`${prefix}index.html`} to={`${prefix}`} />
      <Route path={`${prefix}*`} component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
