import { AxiosResponse } from 'axios';
import axios from '../../axios';

export interface SignUpBody {
	username: string;
	email: string;
	password: string;
	avatarColor: string;
	avatarImage: string;
}
export interface SignInBody {
	username: string;
	password: string;
}
export interface ForgotPasswordBody {
	email: string;
}
export interface ResetPasswordBody {
	password: string;
	confirmPassword: string;
}

class AuthService {
	async signUp(body: SignUpBody) {
		const response: AxiosResponse = await axios.post('/signup', body);
		return response;
	}
	async signIn(body: SignInBody) {
		const response: AxiosResponse = await axios.post('/signin', body);
		return response;
	}
	async forgotPassword(body: ForgotPasswordBody) {
		const response: AxiosResponse = await axios.post(
			'/forgot-password',
			body,
		);
		return response;
	}
	async resetPassword(token: string, body: ResetPasswordBody) {
		const response: AxiosResponse = await axios.post(
			`/reset-password/${token}`,
			body,
		);
		return response;
	}
}

export const authService: AuthService = new AuthService();
