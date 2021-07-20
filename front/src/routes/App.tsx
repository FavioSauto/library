import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Layout
import Layout from '../components/Layout';

// Redux
import { useDispatch } from 'react-redux';

// Redux - Actions
import { getAllAuthors } from '../actions/authorActions';

// Pages
import Home from '../containers/Home';
import Books from '../containers/Books';
import Authors from '../containers/Authors';

interface AppProps {}

function App({}: AppProps) {
  // State
  // Global
  const dispatch = useDispatch();

  useEffect(function getGlobalState() {
    dispatch(getAllAuthors());
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/authors">
          <Authors />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
