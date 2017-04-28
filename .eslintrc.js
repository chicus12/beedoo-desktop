module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"env": {
		"es6": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module"
	},
	"rules": {
		"no-extra-semi": 0,
		"semi": 0,
		"strict": [0, "global"],
		"no-useless-escape": 0,
    "no-param-reassign": 0
	}
};