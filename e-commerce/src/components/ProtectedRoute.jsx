import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
    const user = useSelector((state) => state.client.user);
    const token = localStorage.getItem("token");

    return (
        <Route
            {...rest}
            render={() =>
                user && user.email
                    ? children
                    : token
                        ? null
                        : <Redirect to="/login" />
            }
        />
    );
}

export default ProtectedRoute;