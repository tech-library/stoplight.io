import hero from '@components/Hero/config';
import product from '@components/ImageSection/config';
import actionBar from '@components/ActionBar/config';
import metaTags from '@components/MetaTags/config';

export default {
  label: 'Home',
  name: 'home',
  file: 'netlify/pages/home.yaml',
  fields: [
    hero,
    product,
    {
      name: 'customers',
      label: 'Customers',
      widget: 'list',
      field: {
        name: 'image',
        label: 'Image',
        widget: 'image',
      },
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      widget: 'list',
      fields: [
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'quote',
          label: 'Quote',
          widget: 'string',
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'string',
        },
        {
          name: 'role',
          label: 'Role',
          widget: 'string',
        },
      ],
    },
    actionBar,
    metaTags,
  ],
};
