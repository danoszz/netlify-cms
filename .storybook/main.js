module.exports = {
  // Add below the path from packages where stories are created
  stories: [
    '../packages/netlify-cms-core/src/**/*.stories.js',
    '../packages/netlify-cms-ui-default/src/**/*.stories.js',
    '../packages/netlify-cms-backend-test/src/**/*.stories.js',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
};
