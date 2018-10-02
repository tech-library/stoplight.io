import hero from '@components/Hero/config';
import product from '@components/ImageSection/config';

export default {
  label: 'Products',
  label_singular: 'Product',
  name: 'products',
  folder: 'netlify/products',
  create: true,
  delete: false,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'string',
    },
    hero,
    product,
    {
      name: 'features',
      label: 'Features',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'shortName',
          label: 'Short Name',
          widget: 'string',
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'string',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
      ],
    },
  ],
};
