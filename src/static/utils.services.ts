import { floor, random } from 'lodash';
import { avatarColors } from './static.data';

export class Utils {
	static avatarColor(): string {
		return avatarColors[floor(random(0.9) * avatarColors.length)];
	}

	static generateAvatar(
		text: string,
		backgroundColor: string,
		foregroundColor?: string,
	) {
		const canvas: HTMLCanvasElement = document.createElement('canvas');
		const context: CanvasRenderingContext2D = canvas.getContext(
			'2d',
		) as CanvasRenderingContext2D;

		canvas.width = 200;
		canvas.height = 200;

		// Filling the background color of the CANVAS
		context.fillStyle = backgroundColor;

		// Filling the square
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Draw text
		context.font = 'normal 80px sans-serif';
		context.fillStyle = foregroundColor || '#FFFFFF';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(text, canvas.width / 2, canvas.height / 2);

		return canvas.toDataURL('image/png')
	}
}
