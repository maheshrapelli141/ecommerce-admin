export const navigations = [
  { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { name: 'Countries', path: '/countries', icon: 'countries' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/login' },
      // { name: 'Sign up', iconText: 'SU', path: '/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/forgot-password' },
      { name: 'Error', iconText: '404', path: '/404' }
    ]
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  }
];
