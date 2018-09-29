import React from 'react';
import Routes from 'react-static-routes';
import { Router } from 'react-static';

import Intercom from './utils/intercom';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/app.css';
import './styles/app.scss';
import './styles/static-page.scss';

const AppContent = () => {
  return [<Header key="1" />, <Routes key="2" />, <Footer key="3" />];
};

class App extends React.Component {
  componentDidMount() {
    if (Intercom.sdk()) {
      Intercom.update(undefined, undefined, { hideLauncher: false });
    }
  }

  componentWillUnmount() {
    if (Intercom.sdk()) {
      Intercom.update(undefined, undefined, { hideLauncher: true });
    }
  }

  render() {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  }
}

export default App;
