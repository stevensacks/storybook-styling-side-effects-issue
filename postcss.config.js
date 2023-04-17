module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};
