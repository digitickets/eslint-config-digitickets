module.exports = {
    extends: [
        './index.js',
    ],

    // Disable ES6 specific stuff.
    rules: {
        'func-names': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off',
        'object-shorthand': 'off',
        'no-var': 'off'
    }
};
