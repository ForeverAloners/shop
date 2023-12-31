import type {Meta, StoryObj} from "@storybook/react";

import {Checkbox} from './';
import {string} from "prop-types";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story ={
    args: {
        title: 'string',
        isCheck: false,

    },
};
