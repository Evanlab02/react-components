import type { Meta, StoryObj } from "@storybook/react";
import NavBar, { NavBarProps } from "../NavBar";
import ThemeProvider from "../Theme";
import { useCallback, useState } from "react";

const meta = {
    title: "NavBar",
    component: NavBar,
    tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultRender = (args: NavBarProps) => {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const onThemeCallback = useCallback(() => {
        setMode((prev) => prev == "dark" ? "light" : "dark");
    }, [setMode]);

    return (
        <ThemeProvider mode={mode}>
            <NavBar
                onThemeCallback={onThemeCallback}
                {...args}
            />
        </ThemeProvider >
    );
};

export const Default: Story = {
    args: {
        header: "React components",
    },
    render: DefaultRender
};
