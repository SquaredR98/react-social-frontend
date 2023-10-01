import { useState } from 'react';
import PropTypes from 'prop-types';

import Inputs from './Inputs';
import Button from './Button';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';
import { authService } from '../services/api/auth/auth.service';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(true);
	const [responseMessage, setResponseMessage] = useState('');

	const forgotPassword = async (event) => {
		setLoading(true);
		event.preventDefault();
		try {
			const response = await authService.forgotPassword({ email });
			setLoading(false);
			setSuccess(true);
			setEmail('');
			setResponseMessage(response?.data?.message);
			setTimeout(() => {
				setResponseMessage('');
			}, 5000);
		} catch (error: any) {
			setLoading(false);
			setSuccess(false);
			setResponseMessage(
				error?.response?.data?.message || error.message,
			);
			setTimeout(() => {
				setResponseMessage('');
			}, 5000);
		}
	};

	return (
		<div className='w-screen h-screen flex justify-center items-center bg-blue-300'>
			<div
				className={`border shadow-lg w-1/3 flex flex-col items-center px-8 py-10 rounded-xl bg-blue-50`}
			>
				<div className='flex flex-col items-start w-full'>
					<h1 className='text-3xl font-bold text-neutral-800 mb-3'>
						Forgot Password
					</h1>
					{responseMessage?.length ? (
						!success ? (
							<div
								className={`flex items-center text-sm p-2 transition-all duration-500 animate-fadeIn bg-red-300 w-full my-2 text-red-950 `}
							>
								<BiError className='mr-1 text-xl' />
								{responseMessage}
							</div>
						) : (
							<div
								className={`flex items-center text-sm p-2 bg-green-300 w-full my-2 text-green-950`}
							>
								<BiError className='mr-1 text-xl' />
								{responseMessage}
							</div>
						)
					) : null}
				</div>
				<form
					className='flex flex-col w-full'
					onSubmit={forgotPassword}
				>
					<Inputs
						id='name'
						name='email'
						type='text'
						value={email}
						labelText='Email'
						placeholder='Enter Email'
						className={`w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200 ${
							responseMessage?.length && !success
								? 'border-red-500'
								: ''
						}`}
						handleChange={(e) =>
							setEmail(e.target.value)
						}
					/>
					<Button
						label={
							!loading
								? 'Send Email'
								: 'Sending Email...'
						}
						className='w-full bg-blue-600 hover:bg-blue-600/90 disabled:bg-blue-600/40 py-2 text-white mt-4 hover:cursor-pointer transition ease-in-out delay-100'
					/>
					<p className='flex justify-center my-2'>
						Back to
						<Link
							to='/auth'
							className='text-blue-400 hover:text-blue-600 hover:cursor-pointer ml-2 font-bold'
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

ForgotPassword.propTypes = {
	handleFormChange: PropTypes.func,
	authState: PropTypes.string,
};

export default ForgotPassword;
