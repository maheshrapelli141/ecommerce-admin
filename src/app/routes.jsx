import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import authenticatedRoutes from './views/authenticatedRoutes';
// import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...authenticatedRoutes,
      // dashboard route
      // {
      //   path: '/dashboard',
      //   element: <Analytics />,
      //   auth: authRoles.admin
      // },
    ]
  },

  // session pages route
  { path: '/404', element: <NotFound /> },
  { path: '/login', element: <JwtLogin /> },
  { path: '/signup', element: <JwtRegister /> },
  { path: '/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
