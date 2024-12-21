import { Menu, Sun } from "lucide-react";
import IconButton from "../Buttons/IconButton";
import "./styles/index.scss";

export interface NavBarProps {
    header: string;
    onMenuCallback?: () => void;
    onThemeCallback?: () => void;
}

export default function NavBar(props: Readonly<NavBarProps>) {
    const { header, onMenuCallback, onThemeCallback } = props;

    return (
        <header className="lab-navigation-bar">
            <div className="lab-nav-item">
                <IconButton onClickCallback={onMenuCallback}>
                    <Menu height={20} width={20} />
                </IconButton>
                <h2 className="lab-nav-header">{header}</h2>
            </div>
            <div className="lab-nav-item">
                <IconButton onClickCallback={onThemeCallback}>
                    <Sun height={20} width={20} />
                </IconButton>
            </div>
        </header>
    );
}