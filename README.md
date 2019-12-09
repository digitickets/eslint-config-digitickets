# eslint-config-digitickets

This is a standard code style for all DigiTickets Javascript, based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) with some tweaks to make things more to our liking.

This is designed to be used with ES6 code. For `app` everything is run through Webpack so there's no concern about browser support. For `epos` Webpack does not parse the code (yet) and the ES6 runs natively in the browser so there are some rules to cater for that.

## Usage

Simply extend the config in your `.eslintrc` or `.eslintrc.js`:
```
{
    extends: [
        '@digitickets/eslint-config-digitickets',
    ]
}
```    

## Vue

The `vue.js` file contains extra rules to use with a Vue project. Add it to your extends list like this:
```
{
    extends: [
        '@digitickets/eslint-config-digitickets',
        '@digitickets/eslint-config-digitickets/vue'
    ]
}
```
