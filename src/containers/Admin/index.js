import React, { Component } from 'react';

import appStyles from '!css-loader!sass-loader!@styles/app.css';
import app2Styles from '!css-loader!sass-loader!@styles/app.scss';
import app3Styles from '!css-loader!sass-loader!@styles/static-page.scss';

import { config, templates } from './config';

class Admin extends Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;

    window.netlify = require('netlify-cms');

    window.netlifyIdentity = require('netlify-identity-widget');
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.open('login'); // open the modal to the login tab
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });

    window.netlifyIdentity.init();
    window.netlify.init({ config });

    window.CMS = window.netlify.default;
    window.CMS.registerPreviewStyle(appStyles.toString(), { raw: true });
    window.CMS.registerPreviewStyle(app2Styles.toString(), { raw: true });
    window.CMS.registerPreviewStyle(app3Styles.toString(), { raw: true });

    const FontawesomeWidget = require('netlify-cms-widget-fontawesome');
    window.CMS.registerWidget('fontawesome', FontawesomeWidget.Solid, FontawesomeWidget.Preview);

    Object.keys(templates).forEach(collectionName => {
      window.CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
        const Template = templates[collectionName];

        return <Template {...entry.getIn(['data']).toJS()} />;
      });
    });

    // Hack to make this work
    document.getElementById('root').remove();
  }

  render() {
    return <div />;
  }
}

export default Admin;
