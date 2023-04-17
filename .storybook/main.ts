import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-styling',
            options: {
                cssModules: true,
                postCss: true,
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    stories: ['../src/**/*.stories.tsx'],
};

export default config;
