import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '../NotFound';
import RouteConfig from './Config.js';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';
  
  return (
    <Switch>
     {RouteConfig.routes.map(route => (
       <Route key={route.component} path={`${prefix}${route.path}`} exact component={route.component}/>
      ))
     }
     {RouteConfig.redirects.map(route => (
       <Redirect key={route.from} from={`${prefix}${route.from}`} to={`${prefix}{route.to}`} /> 
      ))
      }
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
