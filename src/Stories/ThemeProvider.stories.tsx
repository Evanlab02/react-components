import type { Meta, StoryObj } from "@storybook/react";
import ThemeProvider from "../Theme";

const meta = {
	title: "ThemeProvider",
	component: ThemeProvider,
	argTypes: {
		mode: {
			description: "Used for switching between light and dark mode.",
			name: "Mode",
			control: "radio",
			options: ["light", "dark"],
			type: "string",
		}
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mode: "dark"
	}
};
