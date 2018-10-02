export default {
  label: 'About',
  name: 'about',
  file: 'netlify/pages/about.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Logo',
      name: 'logo',
      widget: 'image',
    },
    {
      label: 'Background Image',
      name: 'backgroundImage',
      widget: 'image',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Mission',
      name: 'mission',
      widget: 'text',
    },
    {
      label: 'Quotes',
      name: 'quotes',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Quote',
          name: 'quote',
          widget: 'text',
        },
        {
          label: 'Company',
          name: 'company',
          widget: 'string',
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Team',
      name: 'team',
      widget: 'object',
      fields: [
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Members',
          name: 'members',
          widget: 'list',
          fields: [
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
            },
            {
              label: 'Role',
              name: 'role',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Press',
      name: 'press',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Publication',
          name: 'publication',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Investors',
      name: 'investors',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Career Description',
      name: 'career',
      widget: 'text',
    },
    {
      label: 'Meta Tags',
      name: 'meta',
      widget: 'object',
      fields: [
        {
          name: 'favicon',
          widget: 'image',
        },
        {
          name: 'siteName',
          label: 'Site Name',
          widget: 'string',
        },
        {
          name: 'description',
          widget: 'string',
        },
        {
          name: 'url',
          widget: 'string',
        },
        {
          name: 'image',
          widget: 'image',
        },
        {
          name: 'twitter',
          widget: 'object',
          fields: [
            {
              name: 'title',
              widget: 'string',
            },
            {
              name: 'description',
              widget: 'string',
            },
            {
              name: 'image',
              widget: 'image',
            },
            {
              name: 'username',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};
