import React from 'react';
import { withRouter } from 'react-static';

class Analytics extends React.Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;

    if (window.Intercom) {
      window.Intercom('boot');
    }

    this.sendPageView(this.props.location);
    this.props.history.listen(this.sendPageView);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;

    if (window.Intercom) {
      window.Intercom('shutdown');
    }
  }

  sendPageView = location => {
    if (typeof window === 'undefined') return;

    if (window._hsq) {
      const _hsq = (window._hsq = window._hsq || []);
      _hsq.push(['setPath', location.pathname]);
      _hsq.push(['trackPageView']);
    }

    if (window.intercom) {
      window.Intercom('update');
    }
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(Analytics);
