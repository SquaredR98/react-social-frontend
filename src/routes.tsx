// import { useRoutes } from 'react-router-dom';

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import AuthTabs from './pages/auth/Auth';

const element = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthTabs />,
	},
]);

export default element;
