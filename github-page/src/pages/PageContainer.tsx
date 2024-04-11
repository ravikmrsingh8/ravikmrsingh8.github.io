import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
}

export function PageContainer(props: PageContainerProps) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}