import button from '@components/Button/config';

export default {
  name: 'actionBar',
  label: 'Action Bar',
  widget: 'object',
  fields: [
    {
      name: 'enabled',
      label: 'Enabled?',
      widget: 'boolean',
      default: false,
      hint: 'Default: false',
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
      fields: button.fields,
    },
  ],
};
