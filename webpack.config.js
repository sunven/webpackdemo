module.exports = {
	//devtool: 'eval-source-map',
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}, {
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 81920,
						name: "[path][name].[ext]",
					}
				}]
			},
			// 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-runtime']
					}
				}
			}
		]
	},
	plugins: [],

	entry: './app/main.js',
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	}
};