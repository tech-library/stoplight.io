export default {
  name: 'button',
  label: 'Button',
  widget: 'object',
  fields: [
    {
      name: 'outlined',
      label: 'Outlined?',
      widget: 'boolean',
    },
    {
      name: 'title',
      label: 'Title',
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
      hint: 'Default: purple',
    },
  ],
};
