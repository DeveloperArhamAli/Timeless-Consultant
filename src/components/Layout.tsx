import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Runs whenever the route changes

    return <>{children}</>;
};

export default Layout;