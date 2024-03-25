import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
    console.log('isAuthenticated', isAuthenticated);
    // 如果用戶未登入，則重定向到登入頁面
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // 用戶已登入，渲染該路由的子組件
    return <Outlet />;
};

export default ProtectedRoute;