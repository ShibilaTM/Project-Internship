

import { Navigate, useLocation } from 'react-router-dom';

export const Auth = ({ children }) => {
    const getToken = sessionStorage.getItem('userToken');
    const location = useLocation();

    if (!getToken) {
        alert("You're not logged in:");
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
};
export default Auth;