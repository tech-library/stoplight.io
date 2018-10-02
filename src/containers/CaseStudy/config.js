export default {
  label: 'Case Studies',
  label_singular: 'Case Study',
  name: 'case-studies',
  folder: 'netlify/case-studies',
  create: true,
  delete: false,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime',
    },
    {
      label: 'Logo',
      name: 'logo',
      widget: 'image',
    },
    {
      label: 'Featured Highlights',
      name: 'features',
      widget: 'list',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'The Goal',
      name: 'goal',
      widget: 'object',
      fields: [
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      label: 'The Solution',
      name: 'solution',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
      ],
    },
    {
      label: 'The Results',
      name: 'results',
      widget: 'object',
      fields: [
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
      ],
    },
    {
      label: 'Meta Tags',
      name: 'meta',
      widget: 'object',
      fields: [
        {
          name: 'favicon',
          widget: 'image',
        },
        {
          name: 'siteName',
          label: 'Site Name',
          widget: 'string',
        },
        {
          name: 'description',
          widget: 'string',
        },
        {
          name: 'url',
          widget: 'string',
        },
        {
          name: 'image',
          widget: 'image',
        },
        {
          name: 'twitter',
          widget: 'object',
          fields: [
            {
              name: 'title',
              widget: 'string',
            },
            {
              name: 'description',
              widget: 'string',
            },
            {
              name: 'image',
              widget: 'image',
            },
            {
              name: 'username',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};
