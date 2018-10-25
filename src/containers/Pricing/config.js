import hero from '@components/Hero/config';
import button from '@components/Button/config';
import metaTags from '@components/MetaTags/config';
import docPlans from '@components/DocPlans/config';

export default {
  label: 'Pricing',
  name: 'pricing',
  file: 'netlify/pages/pricing.yaml',
  fields: [
    {
      name: 'path',
      label: 'path',
      widget: 'string',
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'string',
    },
    hero,
    {
      label: 'Plans',
      name: 'plans',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'markdown',
        },
        {
          name: 'price',
          label: 'Price',
          widget: 'string',
        },
        {
          label: 'Features',
          name: 'features',
          widget: 'list',
          field: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
          ],
        },
        button,
        {
          label: 'Price Unit',
          name: 'unit',
          widget: 'string',
          required: false,
        },
      ],
    },
    docPlans,
    metaTags,
  ],
};
