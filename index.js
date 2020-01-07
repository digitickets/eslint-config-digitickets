module.exports = {
    // airbnb-base has all the ES6 rules without the React stuff
    extends: 'eslint-config-airbnb-base',

    plugins: [
        'jsdoc',
    ],

    rules: {
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': [
            'error',
            'as-needed',
            {
                requireForBlockBody: true
            },
        ],

        // Disable enforcing that class methods utilize 'this'.
        // This tries to make you convert methods that do not use 'this' into static methods.
        'class-methods-use-this': 'off',

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

        // Don't require a default case in switch statements
        // https://eslint.org/docs/rules/default-case
        'default-case': 'off',

        // Disable the Airbnb requirement that module imports come before our own files, because it's much easier
        // to just sort the lines alphabetically.
        'import/order': 'off',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'off',

        // Indent with 4 spaces
        indent: [
            'error',
            4,
            {
                // Indent switch case:
                SwitchCase: 1
            },
        ],

        // Reports invalid alignment of JSDoc block asterisks.
        'jsdoc/check-alignment': [
            'error',
        ],

        // Ensures that parameter names in JSDoc match those in the function declaration.
        'jsdoc/check-param-names': [
            'error',
        ],

        // Ensures jsdoc conforms to Google Closure Compiler syntax.
        'jsdoc/check-syntax': [
            'error',
        ],

        // Require a blank line between the description and tags in a jsdoc.
        'jsdoc/newline-after-description': [
            'error',
            'always',
        ],

        // Ensure all params are present in the jsdoc if there is one.
        'jsdoc/require-param': [
            'error',
        ],

        // Require a return tag in the jsdoc if the function returns something.
        // Disabled because it requires the tag be @returns instead of @return.
        // "jsdoc/require-returns": [
        //    "error"
        // ],

        // Ensure the function returns something if the jsdoc says it does.
        // Disabled because it requires the tag be @returns instead of @return.
        // "jsdoc/require-returns-check": [
        //    "error"
        // ],

        // Disable: Line comments should go above the line not on the same line.
        // Sometimes it's useful to have the comment on the same line.
        'line-comment-position': [
            'off',
        ],

        // Set maximum line length to 120 to match PSR-2
        // https://eslint.org/docs/rules/max-len
        'max-len': [
            // Turn severity down from airbnb's error to warn
            'warn',
            120,
            2,
            {
                // ignore lines that contain a URL
                ignoreUrls: true,
                // un-ignore all trailing comments and comments on their own lin
                ignoreComments: false,
                // ignore lines that contain a RegExp literal
                ignoreRegExpLiterals: true,
                // ignore lines that contain a double-quoted or single-quoted string
                ignoreStrings: true,
                // ignore lines that contain a template literal
                ignoreTemplateLiterals: true
            },
        ],

        // Non jsdoc multi line comments should be separate single line comments rather than using a block comment.
        'multiline-comment-style': [
            'warn',
            'separate-lines',
        ],

        // Allow window.alert for lazy messages.
        'no-alert': [
            'off',
        ],

        // Allow console.log etc.
        'no-console': 'off',

        // Allow 'continue' statements.
        'no-continue': 'off',

        // Disallow return before else
        // If an if block contains a return statement, the else block becomes unnecessary. Its contents can be placed
        // outside of the block. https://eslint.org/docs/rules/no-else-return
        'no-else-return': [
            'error',
            {
                // allows else if blocks after a return
                allowElseIf: true
            },
        ],

        // Allow parameters to functions, and their properties, to be overridden as we do this a lot.
        'no-param-reassign': [
            'off',
        ],

        // Allow unary operator (i++)
        'no-plusplus': [
            'off',
        ],

        // Override airbnb's "disallow use of Object.prototypes builtins directly"
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': [
            'off',
        ],

        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'off',

        // Enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': ['off', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
        }],

        // Disable converting `let a = data.a` to `let {a} = data`. It's too big of a change at present.
        // TODO: Can be removed if we decide we prefer that way.
        'prefer-destructuring': [
            'off',
        ],

        // When Object.assign is called using an object literal as the first argument, this rule requires using the
        // object spread syntax instead.
        // This rule should not be used unless ES2018 is supported in your codebase.
        'prefer-object-spread': [
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
