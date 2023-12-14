// import { useRoutes } from 'react-router-dom';

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from '@components/ForgotPassword';
import ResetPassword from '@components/ResetPassword';
import AuthTabs from '@pages/auth/Auth';

const element = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthTabs />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
	},
	{
		path: '/reset-password',
		element: <ResetPassword />,
	},
]);

export default element;
