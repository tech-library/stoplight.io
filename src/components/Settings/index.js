import React from 'react';

import Header from '../Header';
import ActionBar from '../ActionBar';
import Footer from '../Footer';

export default ({ header, actionBar, footer }) => {
  return [
    <Header key="header" {...header} />,
    <ActionBar key="actionBar" {...actionBar} />,
    <Footer key="footer" {...footer} />,
  ];
};
