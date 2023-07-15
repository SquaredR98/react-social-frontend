import React, { useState } from 'react';
import Inputs from './Inputs';
import Button from './Button';
import { BiError } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignIn = ({ handleFormChange, authState }) => {
	const isAuthLogin = authState === 'signin';
	const [slideOut, setSlideOut] = useState(false);
	const initiateSlideOut = (value) => {
		setTimeout(() => {
			handleFormChange(value);
		}, 300);
		setSlideOut(true);
	};
	return (
		<div
			className={`w-2/3 flex flex-col items-center bg-teal-400 px-8 py-10 rounded-lg ${
				isAuthLogin && 'animate-slideIn'
			} ${slideOut && 'animate-slideOut'}`}
		>
			<div className='flex flex-col items-start w-full'>
				<h1 className='text-3xl font-bold text-neutral-800 mb-3'>
					Sign in to your account
				</h1>
				<div className='flex items-center text-sm p-2 bg-red-300 w-full my-2 text-red-950'>
					<BiError className='mr-1 text-xl' />
					Error Message
				</div>
			</div>
			<form className='flex flex-col w-full'>
				<Inputs
					name='username'
					type='text'
					value='Username'
					labelText='Username'
					placeholder='Enter Username'
					className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
				/>
				<Inputs
					name='password'
					type='password'
					value='Password'
					labelText='Password'
					placeholder='Enter Password'
					className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
				/>
				<div className='flex justify-between'>
					<label
						className='flex items-center'
						htmlFor='checkbox'
					>
						<Inputs
							name='checkbox'
							type='checkbox'
							value={false}
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
					label='Sign In'
					className='w-full bg-cyan-950 py-2 text-white mt-4 hover:cursor-pointer hover:bg-cyan-800 transition ease-in-out delay-100'
					disabled={true}
				/>
			</form>
			<p className='flex justify-center text-white hover:cursor-pointer mt-3'>
				Don't have an account?{' '}
				<span
					className='font-medium ml-2'
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
