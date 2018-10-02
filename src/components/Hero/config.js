import cta from '@components/CallToAction/config';

export default {
  name: 'hero',
  label: 'Hero',
  widget: 'object',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      widget: 'string',
    },
    cta,
    {
      name: 'bgColor',
      label: 'Background Color',
      widget: 'string',
    },
    {
      name: 'particles',
      label: 'Show particles?',
      widget: 'boolean',
    },
    {
      name: 'bowl',
      label: 'Curved border?',
      widget: 'boolean',
    },
    {
      name: 'cards',
      label: 'Cards',
      widget: 'list',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          widget: 'string',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
        {
          name: 'bgColor',
          label: 'Background Color',
          widget: 'string',
        },
        {
          name: 'bgColor',
          label: 'Background Color',
          widget: 'string',
        },
        {
          name: 'icon',
          label: 'Icon',
          widget: 'object',
          fields: [
            {
              name: 'style',
              label: 'Style',
              widget: 'string',
            },
            {
              name: 'name',
              label: 'Name',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};
