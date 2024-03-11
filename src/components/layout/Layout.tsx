import { ReactElement } from "react";
import NavBar from "../nav/Nav";

export default function Layout({children}: {children: ReactElement}) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}