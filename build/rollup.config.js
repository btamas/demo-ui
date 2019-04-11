const path = require('path');
const glob = require('glob');
const handlebars = require('rollup-plugin-handlebars-plus');
const alias = require('rollup-plugin-alias');
const postcss = require('rollup-plugin-postcss');
import {uglify} from 'rollup-plugin-uglify';

const inputs = glob.sync(path.join(__dirname, '..', 'src', '**', '*.js'));
const localExternals = inputs.map(input => `ui/${input.replace(/^.*?src\//, '').replace(/\.js/, '')}`);
console.log(localExternals);

module.exports = inputs.map(input => {
    const name = path.parse(input).name.replace(/\.js/, '');
    const dir = path.parse(input).dir.replace(/^.*?src/, '');
    
    return {
        input,
        output: {
            dir: path.join(__dirname, '..', 'dist', 'js', dir),
            format: 'umd',
            name
        },
        external: [
            // 'nplodash',
		// 'i18n',
		// 'moment',
		// 'jquery',
		// 'handlebars'
        ].concat(localExternals),
        plugins: [
            alias({
                resolve: ['.js', '.css', '.tpl'],
                ui: path.join(__dirname, '..', 'src')
              }),
            handlebars({
                handlebars: {
                  id: 'handlebars'
                },
                templateExtension: '.tpl'
              }),
              postcss(),
              uglify()
        ]
    };
});