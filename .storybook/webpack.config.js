module.exports = async ({ config }) => {
  const rules = config.module.rules;
  const fileLoaderRule = rules.find(rule => rule.test.test('.js'));

  fileLoaderRule.use[0].options.plugins.push([
    // load inline SVG in Storybook with 'babel-plugin-inline-react-svg'

    require.resolve('babel-plugin-inline-react-svg'),
    {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
        },
      },
    },
  ]);
  return config;
};

//chore: add webpack config to load inline svg
