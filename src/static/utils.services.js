import { floor, random } from "lodash";
import { avatarColors } from "@static/static.data";

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)];
  }

  static generateAvatar(text, backgroundColor, foregroundColor) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;

    // Filling the background color of the CANVAS
    context.fillStyle = backgroundColor;

    // Filling the square
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = "normal 80px sans-serif";
    context.fillStyle = foregroundColor || "#FFFFFF";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
  }
}
