// VARIABLES
const ratio = window.devicePixelRatio;
const width = window.innerWidth;
const height = window.innerHeight;

// CANVAS SETUP
const canvas = document.querySelector("canvas");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

canvas.style.width = "100%";
canvas.style.height = "100%";

const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "image.jpg";
image.onload = () => {
	ctx.drawImage(image, 0, 0);
	const imageData = ctx.getImageData(0, 0, image.width, image.height);
	for (let i = 0; i < imageData.data.length; i += 4) {
		const red = imageData.data[i];
		const green = imageData.data[i + 1];
		const blue = imageData.data[i + 2];
		if (
			red >= 60 &&
			red <= 140 &&
			green >= 170 &&
			green <= 255 &&
			blue >= 70 &&
			blue <= 140
		) {
			imageData.data[i + 3] = 1;
		}
	}
	ctx.putImageData(imageData, image.width, 0);
};
