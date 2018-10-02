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
    {
      name: 'pageName',
      label: 'Page Name',
      widget: 'string',
      required: false,
    },
    {
      name: 'aligned',
      label: 'Alignment',
      widget: 'select',
      options: ['center', 'left', 'right'],
      required: false,
    },
    cta,
    {
      name: 'bgColor',
      label: 'Background Color',
      widget: 'string',
      default: 'black',
    },
    {
      name: 'skew',
      label: 'Skew?',
      widget: 'select',
      options: [
        { left: '-3deg' },
        { 'steep left': '-7deg' },
        { right: '3deg' },
        { 'steep right': '7deg' },
        { rounded: 'rounded' },
      ],
      required: false,
    },
    {
      name: 'particles',
      label: 'Show particles?',
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
