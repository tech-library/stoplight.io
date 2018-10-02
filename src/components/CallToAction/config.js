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
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'string',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
    },
  ],
};
