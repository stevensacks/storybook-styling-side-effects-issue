import {Meta, StoryFn} from '@storybook/react';
import Button from './index';

const meta: Meta = {
    component: Button,
    parameters: {
        controls: {hideNoControlsWarning: true},
    },
    title: 'Components/Button',
};

export default meta;

export const Default: StoryFn = () => (
    <div className="p-4">
        <Button>Primary</Button>
    </div>
);
