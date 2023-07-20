import { resolve } from 'path';
const src = resolve(__dirname, '../src');


export default {
	'@': resolve(src),
	// assets
	'@fonts': resolve(src, 'assets/fonts'),
	'@helpers': resolve(src, 'assets/helpers'),
	'@images': resolve(src, 'assets/images'),
	'@svg': resolve(src, 'assets/svg'),
	'@resources': resolve(src, 'assets/resources'),
	// react
	'@UI': resolve(src, 'react/UI'),
	'@contexts': resolve(src, 'react/contexts'),
	'@hooks': resolve(src, 'react/hooks'),
	'@layouts': resolve(src, 'react/layouts'),
	'@components': resolve(src, 'react/components'),
}
