import { PropsWithChildren } from "react";
import "./styles/IconButton.scss";

export interface IconButtonProps extends PropsWithChildren {
    onClickCallback?: () => void;
}

export default function IconButton(props: Readonly<IconButtonProps>) {
    const { children, onClickCallback } = props;

    return (
        <button className="lab-btn-icon" onClick={onClickCallback}>
            {children}
        </button>
    );
}