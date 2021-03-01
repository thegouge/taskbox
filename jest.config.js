module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	transformIgnorPatterns: ['/node_modules/(?!(@storybook/.*\\.vue$))'],
};
