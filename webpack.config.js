module.exports = {
	context : __dirname + '/src',
	entry : [
		'./ReactRating.jsx'
	],
	output : {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
	},
	module: {
		loaders : [
			{
				test:/\.jsx?$/,
				loader :'babel',
				exclude : /node_modules/,
				query: {
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:"style!css"
			}
		]
	}
};
