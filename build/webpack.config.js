const path = require('path');
const glob = require('glob');

const entryArray = glob.sync(path.join(__dirname, '..', 'src', '**', '*.js'));
const entry = entryArray.reduce((memo, entry) => {
	const name = entry.replace(/^.*?src\//, '').replace(/\.js/, '');
	memo[name] = entry;
	return memo;
}, {});

module.exports = (environment = 'development') => ({
	entry,
	externals: [
		'lodash',
		'i18n',
		'moment',
		'jquery',
		'handlebars',
		/^(css\!|lib|core).*/,
		(context, request, callback) => {
			if (request.indexOf('js') !== -1 && request.indexOf('src') === -1 && request.indexOf('node_modules') === -1) {
				return callback(null, request);
			}
			return callback();
		}
	],
	output: {
		path: path.join(__dirname, '..', 'dist'),
		filename: 'js/[name].js',
		publicPath: '/',
		library: '[name]',
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: false,
		globalObject: 'this'
	},
	optimization: {
		concatenateModules: true
	},
	module: {
		rules: [
			{ test: /\.tpl$/, loader: "handlebars-loader?runtime=handlebars" },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{ 
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		alias: {
			ui: path.join(__dirname, '..', 'src')
		}
	},
	devtool: false
});