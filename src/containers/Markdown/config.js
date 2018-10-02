import hero from '@components/Hero/config';

export default {
  label: 'Markdown',
  name: 'markdown',
  folder: 'netlify/markdown',
  create: true,
  delete: true,
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
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
