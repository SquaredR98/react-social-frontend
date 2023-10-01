import { useState, useEffect } from 'react';
import Inputs from './Inputs';
import Button from './Button';
import { BiError } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { authService } from '../services/api/auth/auth.service';

const SignIn = ({ handleFormChange, authState }) => {
	const isAuthLogin = authState === 'signin';
	const [slideOut, setSlideOut] = useState(false);
	const [loginFormData, setLoginFormData] = useState({
		username: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [error, setError] = useState(false);
	const [keepLoggedIn, setKeepLoggedIn] = useState(false);
	const [user, setUser] = useState();
	const initiateSlideOut = (value) => {
		setTimeout(() => {
			handleFormChange(value);
		}, 300);
		setSlideOut(true);
	};

	const handleChange = ({ target: { name, value } }) => {
		setLoginFormData({ ...loginFormData, [name]: value });
	};

	const loginUser = async (event: any) => {
		event.preventDefault();
		try {
			const result = await authService.signIn(loginFormData);
			setUser(result?.data?.userDocument);
			setKeepLoggedIn(keepLoggedIn);
			setError(false);
		} catch (err: any) {
			setLoading(false);
			setError(true);
			setErrorMessage(err?.response?.data?.message);
			setTimeout(() => {
				setError(false);
				setErrorMessage('');
				setLoginFormData({
					...loginFormData,
					username: '',
					password: '',
				});
			}, 5000);
		}
	};

	useEffect(() => {
		if (loading && !user) return;
		if (user) {
			console.log(user);
		}
	}, [loading, user]);

	return (
		<div
			className={`w-2/3 flex flex-col items-center border shadow-xl px-8 py-10 rounded-lg ${
				isAuthLogin && 'animate-slideIn'
			} ${slideOut && 'animate-slideOut'}`}
		>
			<div className='flex flex-col items-start w-full'>
				<h1 className='text-3xl font-bold text-neutral-800 mb-3'>
					Sign in to your account
				</h1>
				{error && errorMessage && (
					<div className='flex items-center text-sm p-2 bg-red-300 w-full my-2 text-red-950'>
						<BiError className='mr-1 text-xl' />
						{errorMessage}
					</div>
				)}
			</div>
			<form
				className='flex flex-col w-full'
				onSubmit={(event) => loginUser(event)}
			>
				<Inputs
					name='username'
					type='text'
					value={loginFormData.username}
					labelText='Username'
					placeholder='Enter Username'
					className={`w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200 ${
						error ? 'border-red-500' : ''
					}`}
					handleChange={(event) => handleChange(event)}
				/>
				<Inputs
					name='password'
					type='password'
					value={loginFormData.password}
					labelText='Password'
					placeholder='Enter Password'
					className={`w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200 ${
						error ? 'border-red-500' : ''
					}`}
					handleChange={(event) => handleChange(event)}
				/>
				<div className='flex justify-between'>
					<label
						className='flex items-center'
						htmlFor='checkbox'
					>
						<Inputs
							name='keepLoggedIn'
							type='checkbox'
							value={keepLoggedIn}
							handleChange={() =>
								setKeepLoggedIn(!keepLoggedIn)
							}
						/>
						<span className='ml-1'>Remember Me</span>
					</label>
					<Link
						className='text-teal-900 font-medium hover:cursor-pointer'
						to='/forgot-password'
						onClick={() => initiateSlideOut('resetpwd')}
					>
						Forgot Password?
					</Link>
				</div>
				<Button
					label={`${
						loading ? 'Sign In progress...' : 'Sign In'
					}`}
					className='w-full bg-blue-600 py-2 text-white mt-4 hover:cursor-pointer hover:bg-blue-600/90 transition-all ease-in-out duration-300'
					disabled={
						!loginFormData.username ||
						!loginFormData.password
					}
				/>
			</form>
			<p className='flex justify-center  hover:cursor-pointer mt-3'>
				Don't have an account?{' '}
				<span
					className='font-medium ml-2 text-blue-400 hover:text-blue-600'
					onClick={() => initiateSlideOut('signup')}
				>
					Sign Up!
				</span>
			</p>
		</div>
	);
};

SignIn.propTypes = {
	handleFormChange: PropTypes.func,
};

export default SignIn;
