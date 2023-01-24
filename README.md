# eslint-config-digitickets

This is a standard code style for all DigiTickets Javascript, based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) with some tweaks to make things more to our liking.

This is designed to be used with ES6 code. For `app` everything is run through Webpack so there's no concern about browser support. For `epos` Webpack does not parse the code (yet) and the ES6 runs natively in the browser so there are some rules to cater for that.

## Install

npm

    npm install @digitickets/eslint-config-digitickets --save-dev

yarn

    yarn add --dev @digitickets/eslint-config-digitickets

## Usage

Simply extend the config in your `.eslintrc` or `.eslintrc.js`.

Example .eslintrc:

    {
        "root": true,
        "extends": [
            "@digitickets/eslint-config-digitickets",
        ]
    }

### Webpack

If you are using Webpack, install:

    npm install eslint-import-resolver-webpack --save-dev

Add add this to your eslint config:

    "settings": {
        // Use aliases from Webpack config.
        "import/resolver": {
            // "node" is here to fix a problem with built-in packages being marked as unresolved
            // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
            "node": {},
            "webpack": {
                "config": "./webpack.config.js"
            }
        }
    },

### Vue

The `vue.js` file contains extra rules to use with a Vue project. Add it to your extends list **in addition to** the base like this:

    {
        "extends": [
            "@digitickets/eslint-config-digitickets",
            "@digitickets/eslint-config-digitickets/vue"
        ]
    }

You'll also need to install these:

    npm install eslint-plugin-vue@latest --save-dev

### Typescript

If you are using Typescript extend this instead:

    {
        "extends": [
            "@digitickets/eslint-config-digitickets/typescript",
        ]
    }

You'll also need to install:

    npm install --save-dev @typescript-eslint/parser@4.33.0 @typescript-eslint/eslint-plugin@4.33.0
