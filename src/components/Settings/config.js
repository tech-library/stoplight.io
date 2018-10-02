import header from '@components/Header/config';
import actionBar from '@components/ActionBar/config';
import footer from '@components/Footer/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'Site Settings',
  name: 'settings',
  create: false,
  delete: false,
  files: [
    {
      label: 'Site Settings',
      name: 'settings',
      file: 'netlify/settings.yaml',
      fields: [
        header,
        actionBar,
        footer,
        metaTags,
        {
          name: 'googleTagManager',
          label: 'Google Tag Manager',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
