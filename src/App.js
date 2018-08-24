import React from 'react';
import Routes from 'react-static-routes';
import { Router } from 'react-static';

import Intercom from './utils/intercom';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/app.css';
import './styles/app.scss';
import './styles/static-page.scss';

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
        <div className="StaticPage bg-white">
          <Header />

          <div className="relative z-0">
            <Routes />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
