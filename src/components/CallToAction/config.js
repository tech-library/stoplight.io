export default {
  name: 'cta',
  label: 'Call to action',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      hint: 'Leave blank to hide',
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'string',
      default: 'purple',
      hint: 'Default: purple',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
      default: 'https://next.stoplight.io',
      hint: 'Default: https://next.stoplight.io',
    },
  ],
};
