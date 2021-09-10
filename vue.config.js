
module.exports = {
	chainWebpack: (config) => {
		// import svg as component
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');

		// import scss-variables
		const oneOfsMap = config.module.rule('scss').oneOfs.store

		oneOfsMap.forEach(item => {
			item
				.use('sass-resources-loader')
				.loader('sass-resources-loader')
				.options({
					resources: [
						'src/scss/resources.scss',
					],
				})
				.end()
		});
	},
};