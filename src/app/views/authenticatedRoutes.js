import { lazy } from 'react';
import { authRoles } from '../auth/authRoles';
import Loadable from '../components/Loadable';
import Countries from './countries/Countries';

const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

const authenticatedRoutes = [
    {
        path: '/dashboard',
        element: <Analytics />,
        auth: authRoles.admin
    },
    {
        path: '/countries',
        element: <Countries />,
        auth: authRoles.admin
    },
]

export default authenticatedRoutes;