import React, { useEffect, useState } from 'react';
import Inputs from './Inputs';
import Button from './Button';
import { BiError } from 'react-icons/bi';
import { Utils } from './../static/utils.services';
import { authService } from '../services/api/auth/auth.service';

const Register = ({ handleFormChange, authState }) => {
	const isAuthRegister = authState === 'signup';

	// To decide when to initiate the slide out animation of the form.
	const [slideOut, setSlideOut] = useState(false);

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [loading, setLoading] = useState(false);
	const [errorMessage, seteErrorMessage] = useState('');
	const [error, setError] = useState(false);
	const [user, setUser] = useState();

	// Initiates the slide out and delays the form change
	// event.
	const initiateSlideOut = (value) => {
		setTimeout(() => {
			handleFormChange('signin');
		}, 300);
		setSlideOut(true);
	};

	const registerUser = async (event: any) => {
		event.preventDefault();
		setLoading(true);

		try {
			const avatarColor = Utils.avatarColor();
			const avatarImage = Utils.generateAvatar(formData.username[0].toUpperCase(), avatarColor);
			const result = await authService.signUp({
				...formData,
				avatarColor,
				avatarImage,
			});
			setUser(result?.data?.user)
		} catch (err: any) {
			console.log(err);
			setLoading(false);
			setError(true)
			seteErrorMessage(err?.response?.data?.message);
		}
	};

	useEffect(() => {
		if(loading && !user) return;
		if(user) {
			console.log()
		}
	}, [loading, user]);

	const handleFormFieldChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div
			className={`bg-white w-2/3 flex flex-col items-center px-8 py-10 rounded-md border shadow-xl ${
				isAuthRegister && 'animate-slideIn'
			} ${slideOut && 'animate-slideOut'}`}
		>
			<div className='flex flex-col items-start w-full'>
				<h1 className='text-3xl font-bold text-neutral-800 mb-3'>
					Create a new account
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
				onSubmit={(event) => registerUser(event)}
			>
				<Inputs
					name='username'
					type='text'
					value={formData?.username}
					labelText='Username'
					placeholder='Enter Username'
					handleChange={(event) =>
						handleFormFieldChange(event)
					}
					className={`w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-20 ${
						errorMessage
							.toLowerCase()
							.includes('username')
							? 'border border-red-600'
							: ''
					}`}
				/>
				<Inputs
					name='email'
					type='email'
					value={formData?.email}
					labelText='Email'
					placeholder='Enter Email'
					handleChange={(event) =>
						handleFormFieldChange(event)
					}
					className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
				/>
				<Inputs
					name='password'
					type='password'
					value={formData?.password}
					labelText='Password'
					placeholder='Enter Password'
					handleChange={(event) =>
						handleFormFieldChange(event)
					}
					className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
				/>
				<Button
					label={`${
						loading
							? 'Sign Up in progress...'
							: 'Sign Up'
					}`}
					className='w-full bg-blue-600 py-2 text-white mt-4 hover:cursor-pointer hover:bg-blue-600/90 transition ease-in-out delay-100 disabled:bg-blue-600/40 disabled:cursor-default'
					disabled={
						!formData.email ||
						!formData.password ||
						!formData.username
					}
				/>
				<p className='flex justify-center my-2'>
					Already have an account?
					<span
						onClick={() => initiateSlideOut('signin')}
						className='text-blue-400 hover:text-blue-600 hover:cursor-pointer ml-2 font-bold'
					>
						Sing In
					</span>
				</p>
			</form>
		</div>
	);
};

export default Register;
