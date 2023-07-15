import PropTypes from 'prop-types';
import Inputs from './Inputs';
import Button from './Button';
import { BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div
				className={`bg-teal-400 w-1/3 flex flex-col items-center px-8 py-10 rounded-xl`}
			>
				<div className='flex flex-col items-start w-full'>
					<h1 className='text-3xl font-bold text-neutral-800 mb-3'>
						Reset Password
					</h1>
					<div className='flex items-center text-sm p-2 bg-red-300 w-full my-2 text-red-950'>
						<BiError className='mr-1 text-xl' />
						Error Message
					</div>
				</div>
				<form className='flex flex-col w-full'>
					<Inputs
						name='password'
						type='password'
						value='password'
						labelText='Password'
						placeholder='Enter Password'
						className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
					/>
					<Inputs
						name='confirmPassword'
						type='text'
						value='password'
						labelText='Confirm Password'
						placeholder='Enter Password'
						className='w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200'
					/>
					<Button
						label='Reset Password'
						className='w-full bg-cyan-950 py-2 text-white mt-4 hover:cursor-pointer hover:bg-cyan-800 transition ease-in-out delay-100'
						disabled={true}
					/>
					<p className='flex justify-center my-2'>
						Back to
						<Link
							to='/auth'
							className='text-teal-100 hover:cursor-pointer ml-2 font-bold'
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

ResetPassword.propTypes = {
	handleFormChange: PropTypes.func,
	authState: PropTypes.string,
};

export default ResetPassword;
