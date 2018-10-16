import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'HubSpot Forms',
  label_singular: 'HubSpot Form',
  name: 'hubspot',
  folder: 'netlify/hubspot',
  create: true,
  delete: true,
  slug: '{{slug}}',
  fields: [
    {
      name: 'path',
      label: 'Path',
      widget: 'string',
    },
    hero,
    {
      name: 'hubspot',
      label: 'HubSpot',
      widget: 'object',
      fields: [
        {
          name: 'formId',
          label: 'Form ID',
          widget: 'string',
        },
        {
          name: 'portalId',
          label: 'HubSpot ID',
          widget: 'string',
        },
      ],
    },
    {
      name: 'customers',
      label: 'Customers',
      widget: 'list',
      field: {
        name: 'image',
        label: 'Image',
        widget: 'image',
      },
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      widget: 'list',
      fields: [
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
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
    actionBar,
    metaTags,
  ],
};
