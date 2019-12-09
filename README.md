# eslint-config-digitickets

This is a standard code style for all DigiTickets Javascript, based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) with some tweaks to make things more to our liking.

This is designed to be used with ES6 code. For `app` everything is run through Webpack so there's no concern about browser support. For `epos` Webpack does not parse the code (yet) and the ES6 runs natively in the browser so there are some rules to cater for that.

There are no Vue or Angular specific rules.

## Vue

The `vue.js` file contains extra rules to use with a Vue project. Use it like this:
```
{
    extends: [
        'eslint-config-digitickets',
        'eslint-config-digitickets/vue'
    ]
}
```
