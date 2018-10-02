export default {
  name: 'actionBar',
  label: 'Action Bar',
  widget: 'object',
  fields: [
    {
      name: 'enabled',
      label: 'Enabled?',
      widget: 'boolean',
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'string',
    },
    {
      name: 'buttons',
      label: 'Buttons',
      widget: 'list',
      fields: [
        {
          name: 'outlined',
          label: 'Outlined?',
          widget: 'boolean',
        },
        {
          name: 'text',
          label: 'Text',
          widget: 'string',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
        {
          name: 'color',
          label: 'Color',
          widget: 'string',
          default: 'purple',
        },
      ],
    },
  ],
};
