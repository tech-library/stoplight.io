export default {
  label: 'Meta Tags',
  name: 'meta',
  widget: 'object',
  required: false,
  fields: [
    {
      label: 'Favicon',
      name: 'favicon',
      widget: 'image',
    },
    {
      name: 'siteName',
      label: 'Site Name',
      widget: 'string',
    },
    {
      label: 'description',
      name: 'description',
      widget: 'string',
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Twitter',
      name: 'twitter',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Username',
          name: 'username',
          widget: 'string',
        },
      ],
    },
  ],
};
