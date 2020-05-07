const Canvas = require("canvas");
const path = require("path");
Canvas.registerFont(path.resolve(__dirname, "fonts", "Impact.ttf"), { family: "Impact" });
const _ = require("lodash");

function createCaptcha(width = 150, height = 50, length = 5) {
    let canvas = Canvas.createCanvas(width, height, length);

    let chars = "0123456789abcdefghjknpqrstuvxyzABCDEFGHJKLNPQRSTUVXYZ";
    let x = 0;
    let y = 0;
    let captcha = "";

    let context = canvas.getContext("2d");
    context.font = "40px Impact";
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#000000";
    for (let i = 0; i < length; i++) {
        x = (15 + (i + Math.random() / 2 - 0.25) * 25) - 102;
        y = 44;
        captcha = `${_.sampleSize(chars, length)[i]}${_.sampleSize(chars, length)[i]}${_.sampleSize(chars, length)[i]}${_.sampleSize(chars, length)[i]}${_.sampleSize(chars, length)[i]}`
    }
    context.fillText(captcha, x, y);

    return {
        buffer: canvas.toBuffer(),
        text: captcha,
    }
}

module.exports = createCaptcha;