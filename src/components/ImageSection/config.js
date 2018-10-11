import cta from '@components/CallToAction/config';

export default {
  name: 'product',
  label: 'Product',
  widget: 'object',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
    },
    cta,
    {
      name: 'description',
      label: 'Description',
      widget: 'markdown',
    },
  ],
};
