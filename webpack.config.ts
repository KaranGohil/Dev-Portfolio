import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (env): Configuration => ({
	entry: './src/index.tsx',
	...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: './tsconfig.json',
			}) as any,
		],
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /dist/,
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader'],
			},
			{ test: /\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'] },
			{
				test: /\.(pdf)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  // Customize the output file name and path as needed
					  name: '[name].[ext]',
					},
				  },
				],
			  },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.DefinePlugin({
			'process.env.PRODUCTION': env.production || !env.development,
			'process.env.NAME': JSON.stringify(require('./package.json').name),
			'process.env.VERSION': JSON.stringify(require('./package.json').version),
		}),
		new ForkTsCheckerWebpackPlugin(),
		new ESLintPlugin({ files: './src/**/*.{ts,tsx,js,jsx}' }),
	],
});

export default webpackConfig;
