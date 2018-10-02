export default {
  name: 'footer',
  label: 'Footer',
  widget: 'object',
  fields: [
    {
      name: 'social',
      label: 'Social Media',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'icon',
          label: 'Icon',
          widget: 'fontawesome-brand',
          type: 'array',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      name: 'columns',
      label: 'Columns',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'links',
          label: 'Links',
          widget: 'list',
          required: false,
          fields: [
            {
              name: 'title',
              label: 'Title',
              widget: 'string',
            },
            {
              name: 'href',
              label: 'Link',
              widget: 'string',
              required: false,
            },
            {
              name: 'onClick',
              label: 'Action',
              widget: 'select',
              required: false,
              options: [
                { label: 'Open Intercom', value: 'intercom' },
                { label: 'Open Email', value: 'email' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
