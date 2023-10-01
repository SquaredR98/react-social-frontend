import { useState } from 'react';
import LoginImage from '../../assets/login.svg';
import SignupImage from '../../assets/signup.svg';
import Register from '../../components/Register';
import SignIn from '../../components/SignIn';

const AuthTabs = () => {
	const [authPage, setAuthPage] = useState('signin');
	const handleFormChange = (formName: string) => {
		setAuthPage(formName);
	};

	const signIn = authPage === 'signin';
	const signUp = authPage === 'signup';

	return (
		<div
			className={`h-screen flex justify-between items-center overflow-hidden transition duration-1000`}
		>
			<div className='w-1/2'>
				{signIn && (
					<img
						src={LoginImage}
						alt='login'
						className={`${
							signIn
								? 'animate-slideLeftIn'
								: 'animate-slideLeftOut'
						}`}
					/>
				)}
				{signUp && (
					<img
						src={SignupImage}
						alt='login'
						className={`${
							signUp
								? 'animate-slideLeftIn'
								: 'animate-slideLeftOut'
						}`}
					/>
				)}
			</div>
			<div className='w-1/2 flex justify-center'>
				{signIn && (
					<SignIn
						handleFormChange={handleFormChange}
						authState={authPage}
					/>
				)}
				{signUp && (
					<Register
						handleFormChange={handleFormChange}
						authState={authPage}
					/>
				)}
			</div>
		</div>
	);
};

export default AuthTabs;
