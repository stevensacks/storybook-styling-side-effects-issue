import type {Preview} from '@storybook/react';
import '../src/styles/tailwind.css';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        backgrounds: {disable: true, grid: {disable: true}},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
};

export default preview;
