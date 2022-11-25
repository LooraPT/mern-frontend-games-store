import React from 'react';
import { useContext } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Context } from '../..';
import { authRoutes, publicRoutes } from '../../router';
import { ORDER_ROUTE } from '../../utils/pages';

function AppRouter() {
    const { user } = useContext(Context)
    const { pathname } = useLocation()


    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default AppRouter;