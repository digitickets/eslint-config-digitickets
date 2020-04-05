module.exports = {
    rules: {
        // Require a trailing comma in multiline arrays (same as airbnb) but remove others because trailing commas
        // in objects breaks iOS 10.3 (and probably other older browsers).
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            },
        ],

        // Indent with 4 spaces
        indent: [
            'error',
            4,
            {
                // Indent switch case:
                SwitchCase: 1
            },
        ],

        // Disable converting `let a = data.a` to `let {a} = data`. It's too big of a change at present.
        // TODO: Can be removed if we decide we prefer that way.
        'prefer-destructuring': [
            'off',
        ],

        // Disable using template literals instead of string concatenation.
        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': [
            'off',
        ],

        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'off'
    }
};
