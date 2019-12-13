module.exports = {
    extends: [
        './index.js',
    ],

    // Disable ES6 specific stuff.
    rules: {
        'func-names': 'off',
        'no-var': 'off',
        'object-shorthand': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off'
    }
};
