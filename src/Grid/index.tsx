import { PropsWithChildren, useMemo } from "react";
import "./styles/index.scss";

export function Grid(props: Readonly<PropsWithChildren>) {
	const { children } = props;

	return (
		<div className="lab-flex-grid-container">
			{children}
		</div>
	);
}

export interface GridItemProps extends PropsWithChildren {
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	xxl?: number
}

export function GridItem(props: Readonly<GridItemProps>) {
	const { children, xs, sm, md, lg, xl, xxl } = props;

	const classes = useMemo(() => {
		return [
			xs && `lab-flex-grid-col-xs-${xs.toString()}`,
			sm && `lab-flex-grid-col-sm-${sm.toString()}`,
			md && `lab-flex-grid-col-md-${md.toString()}`,
			lg && `lab-flex-grid-col-lg-${lg.toString()}`,
			xl && `lab-flex-grid-col-xl-${xl.toString()}`,
			xxl && `lab-flex-grid-col-xxl-${xxl.toString()}`
		].filter(Boolean).join(" ");
	}, [xs, sm, md, lg, xl, xxl]);

	return (
		<div className={classes}>
			{children}
		</div>
	);
}