import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core';

export const init = ({ icons = [] }) => {
  for (const icon of icons) {
    try {
      const { name, style = 'solid' } = icon;
      const faName = _.camelCase(`fa-${name}`);
      const i = require(`@fortawesome/free-${style}-svg-icons/${faName}`)[faName];
      library.add(i);
      console.info('Icon loaded:', `${name} (${style})`);
    } catch (e) {
      console.warn('Could not load icon:', icon, e);
    }
  }
};
