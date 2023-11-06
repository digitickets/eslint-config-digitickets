module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
    ],

    // required to lint *.vue files
    plugins: [
        'vue',
    ],

    rules: {
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside',
        }],

        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],

        // Use 4 spaces for indents in HTML (maybe only applies in Vue templates?)
        'vue/html-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],

        'vue/html-self-closing': 'off',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
        // https://vuejs.org/v2/style-guide/#Multi-attribute-elements-strongly-recommended
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],

        'vue/multi-word-component-names': 'off',

        // We're big boys. We know what data to not display as raw HTML.
        'vue/no-v-html': 'off',

        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 0,
                switchCase: 1,
            },
        ],

        'vue/v-slot-style': ['error', {
            atComponent: 'longform',
            default: 'longform',
            named: 'longform',
        }],
    },

    overrides: [
        // For .vue files disable the indent rule otherwise there are errors about indentation in <script> tags.
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
