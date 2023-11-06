import type {Meta, StoryObj} from "@storybook/react";

import {Input} from './';

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Your name'
    },
};
