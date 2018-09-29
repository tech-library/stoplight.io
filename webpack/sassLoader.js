import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default stage => {
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
