import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingIndicator from 'components/LoadingIndicator';

import Header from 'components/Header';
import './style.scss';

const routes = [
  { path: "/",       exact: true,  loader: () => import("features/HomePage") },
  { path: "/sample", exact: false, loader: () => import("features/SamplePage") },
  { path: "",        exact: false, loader: () => import("features/NotFoundPage") },
];

const routesWithLoader = routes.map(r => {
  const component = Loadable({
    loader: r.loader,
    loading: LoadingIndicator
  });
  return Object.assign({}, r, { component: component });
});
const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React Boilerplate"
      defaultTitle="React Boilerplate"
    >
      <meta name="description" content="A React Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      {
        routesWithLoader.map(r =>
          <Route key={`react-router-route-${r.path}`} path={r.path} exact={r.exact} component={r.component} />
        )
      }
    </Switch>
  </div>
);

export default App;
