import hero from '@components/Hero/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'About',
  name: 'about',
  file: 'netlify/pages/about.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    hero,
    {
      label: 'Team',
      name: 'team',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
        {
          label: 'Twitter (@handle)',
          name: 'twitter',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Quote',
          name: 'quote',
          widget: 'text',
        },
        {
          label: 'Company',
          name: 'company',
          widget: 'string',
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Press',
      name: 'press',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Publication',
          name: 'publication',
          widget: 'string',
        },
        {
          label: 'Link',
          name: 'href',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Investors',
      name: 'investors',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
      ],
    },
    actionBar,
    metaTags,
  ],
};
