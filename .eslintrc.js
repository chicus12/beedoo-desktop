module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: [
    'prettier',
		'react',
		'jsx-a11y',
		'import'
	],
	env: {
		es6: true
	},
  parser: 'babel-eslint',
  rules: {
    'no-extra-semi': 0,
    semi: 0,
    strict: [0, 'global'],
    'no-useless-escape': 0,
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'prettier/prettier': ['warn', { semi: false, singleQuote: true, trailingComma: 'es5' }],
  }
};