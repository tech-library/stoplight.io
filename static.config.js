import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sassLoader = stage => {
  let loaders = [
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        minimize: stage === 'prod',
        sourceMap: false,
      },
    },
    {
      loader: require.resolve('sass-loader'),
      options: { includePaths: ['src/'] },
    },
  ];

  if (stage === 'dev') {
    loaders.unshift({ loader: require.resolve('style-loader') });
  } else if (stage === 'prod') {
    loaders = ExtractTextPlugin.extract({
      fallback: {
        loader: require.resolve('style-loader'),
        options: {
          sourceMap: false,
          hmr: false,
        },
      },
      use: loaders,
    });
  }

  return {
    test: /\.s(a|c)ss$/,
    use: loaders,
  };
};

const cssLoader = stage => {
  let loaders = [
    {
      loader: require.resolve('css-loader'),
      options: {
        minimize: stage !== 'dev',
        sourceMap: stage === 'dev',
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        sourceMap: true,
        ident: 'postcss',
        plugins: () => [
          postcssFlexbugsFixes,
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
          tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
        ],
      },
    },
  ];

  if (stage === 'dev') {
    loaders = [require.resolve('style-loader')].concat(loaders);
  } else if (stage === 'prod') {
    loaders = ExtractTextPlugin.extract({
      fallback: {
        loader: require.resolve('style-loader'),
        options: {
          sourceMap: false,
          hmr: false,
        },
      },
      use: loaders,
    });
  }

  return {
    test: /\.css$/,
    use: loaders,
  };
};

export default {
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/pricing',
      component: 'src/containers/Pricing',
    },
    // {
    //   path: '/home',
    //   component: 'src/containers/Home',
    // },
    // {
    //   path: '/about',
    //   component: 'src/containers/About',
    // },
    // {
    //   path: '/case-study',
    //   component: 'src/containers/Case-Study',
    // },
  ],

  webpack: (config, { stage, defaultLoaders }) => {
    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          sassLoader(stage),
          cssLoader(stage),
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
};
