import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'Case Studies',
  name: 'case-studies',
  file: 'netlify/pages/case-studies.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    hero,
    actionBar,
    metaTags,
  ],
};
