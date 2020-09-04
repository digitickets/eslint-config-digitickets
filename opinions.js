module.exports = {
    rules: {
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
