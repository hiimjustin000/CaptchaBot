/**
 * Creates a captcha image.
 * @param width The width of the image
 * @param height The height of the image
 * @param length The length of the captcha
 * @returns An object containing the buffer and the captcha text.
 */
function createCaptcha(width?: number, height?: number, length?: number):{ buffer: Buffer, text: string };

export = createCaptcha;