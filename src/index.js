import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { init as initIcons } from '@utils/fontawesome';

// Your top level component
import App from './App';

// TODO: dynamically build this list by extracting used icons from yaml data files.
// might be unreliable to scan all data file structures and extract used icon names, so perhaps another data file where all used icons must be defined?
// or a util function to recurse through object and pull out all "icon" properties (JSON.stringify?)
initIcons({
  icons: [
    { name: 'paint-brush' },
    { name: 'book' },
    { name: 'flask' },
    { name: 'server' },
    { name: 'check' },
    { name: 'check-circle' },
    { name: 'rss' },
    { name: 'users' },
    { name: 'comments' },
    { name: 'graduation-cap' },
    { name: 'suitcase' },
    { name: 'users' },
    { name: 'arrow-right' },
    { name: 'bars' },
    { name: 'times' },
    { name: 'twitter', style: 'brands' },
    { name: 'linkedin', style: 'brands' },
    { name: 'github', style: 'brands' },
  ],
});

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  // Render!
  render(App);
  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}

// Export your top level component as JSX (for static rendering)
export default App;
