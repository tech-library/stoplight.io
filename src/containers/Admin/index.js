import React, { Component } from 'react';

import { config, templates } from './config';

import appStyles from '!css-loader!./styles.css';

class Admin extends Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;

    window.netlify = require('netlify-cms');
    window.CMS = window.netlify.default;

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

    window.CMS.registerPreviewStyle(appStyles.toString(), { raw: true });

    const FontawesomeWidget = require('netlify-cms-widget-fontawesome');
    window.CMS.registerWidget(
      'fontawesome-solid',
      FontawesomeWidget.Solid,
      FontawesomeWidget.Preview
    );
    window.CMS.registerWidget(
      'fontawesome-brand',
      FontawesomeWidget.Brands,
      FontawesomeWidget.Preview
    );

    Object.keys(templates).forEach(collectionName => {
      window.CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
        const Template = templates[collectionName];

        console.log(entry, Template);

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
