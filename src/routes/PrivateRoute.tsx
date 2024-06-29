import { useTypedSelector } from "@app-store";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const location = useLocation();
    const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn)

    return isLoggedIn
        ? <Outlet />
        : <Navigate to="/sign-in" replace state={{ from: location }} />;
}

export default PrivateRoutes