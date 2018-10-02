export default {
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
};
