function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	colorMode(RGB);
	background("black");

	colorMode(HSB, 100);

	var hr = hour();
	var min = minute();
	var sec = second();

	if (sec <= 34) {
		for (let i = 0; i < sec; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300,
				map(i, 0, 34, 400, width), height
			);
		}
	} else {
		for (let i = 0; i < 34; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300,
				map(i, 0, 34, 400, width), height
			);
		}

		for (let i = 34; i < sec; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300,
				width, map(i, 34, 59, height, 300),
			);
		}
	}

	if (min <= 26) {
		for (let i = 0; i < min; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300,
				width, map(i, 0, 26, 300, 0)
			);
		}
	} else {
		for (let i = 0; i < 26; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300,
				width, map(i, 0, 26, 300, 0)
			);
		}

		for (let i = 26; i < min; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300,
				map(i, 26, 59, width, 400), 0
			);
		}
	}

	if (hr <= 7) {
		for (let i = 0; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				map(i, -1, 7, 400, 0), 0
			);
		}
	} else if (hr < 17) {
		for (let i = 0; i < 7; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				map(i, -1, 7, 400, 0), 0
			);
		}

		for (let i = 7; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				0, map(i, 7, 17, 0, height),
			);
		}
	} else {
		for (let i = 0; i < 7; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				map(i, -1, 7, 400, 0), 0
			);
		}

		for (let i = 7; i < 17; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				0, map(i, 7, 17, 0, height),
			);
		}

		for (let i = 17; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300,
				map(i, 17, 23, 0, 400), height
			);
		}
	}
}
