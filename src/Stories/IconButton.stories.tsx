import type { Meta, StoryObj } from "@storybook/react";
import { Sun } from "lucide-react";
import IconButton, { IconButtonProps } from "../Buttons/IconButton";
import ThemeProvider from "../Theme";

const meta = {
    title: "IconButton",
    component: IconButton,
    tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultRender = (args: IconButtonProps) => {
    return (
        <ThemeProvider mode="dark">
            <IconButton
                {...args}
            />
        </ThemeProvider>
    );
};

export const Default: Story = {
    args: {
        children: <Sun height={20} width={20} />,
        onClickCallback: undefined
    },
    render: DefaultRender
};
