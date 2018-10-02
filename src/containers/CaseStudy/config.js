import hero from '@components/Hero/config';
import cta from '@components/CallToAction/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'Case Studies',
  label_singular: 'Case Study',
  name: 'case-study',
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
    {
      label: 'Company Info',
      name: 'info',
      widget: 'object',
      fields: [
        {
          name: 'name',
          label: 'Company Name',
          widget: 'string',
        },
        {
          name: 'logo',
          label: 'Company Logo',
          widget: 'image',
        },
        {
          name: 'industry',
          label: 'Company Industry',
          widget: 'string',
        },
        {
          name: 'location',
          label: 'Company Location',
          widget: 'string',
        },
        {
          name: 'employees',
          label: 'Company Employees',
          widget: 'number',
        },
      ],
    },
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          widget: 'string',
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'string',
        },
        {
          name: 'role',
          label: 'Role',
          widget: 'string',
        },
      ],
    },
    metaTags,
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
