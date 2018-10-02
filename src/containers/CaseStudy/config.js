import hero from '@components/Hero/config';
import cta from '@components/CallToAction/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'Case Studies',
  label_singular: 'Case Study',
  name: 'case-studies',
  folder: 'netlify/case-studies',
  create: true,
  delete: false,
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    hero,
    cta,
    metaTags,
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
