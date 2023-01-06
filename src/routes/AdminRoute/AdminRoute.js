import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
// import Loading from '../../Pages/Shared/Loading/Loading';
import Loading from '../../shered/Loading/Loading'

const AdminRoute = ({ children }) => {
    const { user, userCoustom, loading } = useContext(AuthContext);
    console.log(userCoustom);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user && userCoustom?.role === 'admin') {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;