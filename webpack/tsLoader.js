export default stage => ({
  test: /\.ts(x?)$/,
  exclude: [/node_modules|\.min\./],
  use: [
    {
      loader: 'ts-loader',
      options: {
        onlyCompileBundledFiles: true,
        transpileOnly: true,
      },
    },
  ],
});
