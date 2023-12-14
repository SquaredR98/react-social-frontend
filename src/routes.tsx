// import { useRoutes } from 'react-router-dom';

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ForgotPassword from '@components/ForgotPassword';
import ResetPassword from '@components/ResetPassword';
import AuthTabs from '@pages/auth/Auth';
import Feeds from '@pages/social/Feeds/Feeds';

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
	{
		path: '/feeds',
		element: <Feeds />,
	},
]);

export default element;
