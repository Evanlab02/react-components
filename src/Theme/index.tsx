import { PropsWithChildren, useMemo } from "react";
import "./styles/index.scss";
import "../Styles/base.scss";

function setDefaultTheme(mode: "dark" | "light") {
	if (mode == "light") {
		document.body.style.backgroundColor = "#e3f2fd";
		return "lab-default-light";
	} else {
		document.body.style.backgroundColor = "#212121";
		return "lab-default-dark";
	}
}

export interface ThemeProviderProps extends PropsWithChildren {
	mode: "dark" | "light";
}

export default function ThemeProvider(props: Readonly<ThemeProviderProps>) {
	const { children, mode } = props;

	const className = useMemo(() => {
		return setDefaultTheme(mode);
	}, [mode]);

	return (
		<div id="lab-root" className={`lab-base ${className}`}>
			{children}
		</div>
	);
}