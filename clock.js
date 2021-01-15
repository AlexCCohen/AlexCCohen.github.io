function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	colorMode(RGB);
	background("black");

	colorMode(HSB, 100);

	var hr = 23; //hour();
	var min = minute();
	var sec = second();

	if (sec <= 34) {
		for (let i = 0; i < sec; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, 0, 34, 400, width), height
			);
		}
	} else {
		for (let i = 0; i < 34; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, 0, 34, 400, width), height
			);
		}

		for (let i = 34; i < sec; ++i) {
			stroke(70, map(i, 0, 59, 20, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				width, map(i, 34, 59, height, 300),
			);
		}
	}

	if (min <= 26) {
		for (let i = 0; i < min; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				width, map(i, 0, 26, 300, 0)
			);
		}
	} else {
		for (let i = 0; i < 26; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				width, map(i, 0, 26, 300, 0)
			);
		}

		for (let i = 26; i < min; ++i) {
			stroke(53, map(i, 0, 59, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, 26, 59, width, 400), 0
			);
		}
	}

	if (hr <= 7) {
		for (let i = 0; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, -1, 7, 400, 0), 0
			);
		}
	} else if (hr < 17) {
		for (let i = 0; i < 7; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, -1, 7, 400, 0), 0
			);
		}

		for (let i = 7; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				0, map(i, 7, 17, 0, height),
			);
		}
	} else {
		for (let i = 0; i < 7; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, -1, 7, 400, 0), 0
			);
		}

		for (let i = 7; i < 17; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				0, map(i, 7, 17, 0, height),
			);
		}

		for (let i = 17; i < hr; ++i) {
			stroke(94, map(i, 0, 24, 40, 100), 100);
			line(
				400, 300, //map(i, 0, 59, 600, 300),
				map(i, 17, 23, 0, 400), height
			);
		}
	}

	/*for (let i = 0; i < hr; ++i) {
		fillColor = color(94, map(i, 0, 23, 20, 100), 100);
		fill(fillColor);
		quad(
			0, 600 - map(i, 0, 23, 0, height - height/24),
			0, 600 - map(i, 0, 23, height/24, height),
			400, 600 - map(i, 0, 23, height/24, height),
			400, 600 - map(i, 0, 23, 0, height - height/24)
		);
	}*/

	/*for (let i = hr; i > 0; --i) {
		fillColor = color(94, map(i, 0, 23, 20, 100), 100);
		fill(fillColor);
		triangle(
			400 - map(i, -1, 23, 0, 400), 300,
			400, 300 - map(i, -1, 23, 0, 300),
			400, map(i, -1, 23, 300, 600));
	}


	for (let i = min; i > 0; --i) {
		fillColor = color(53, map(i, 0, 59, 20, 100), 100);
		fill(fillColor);
		arc(400, 300, map(i, -1, 59, 0, 800), map(i, -1, 59, 0, 600), PI + HALF_PI, 0);
	}

	var sec = second();

	if (sec <= 30) {
		var xA = 400;
		var yA = 300 + map(0, -1, 30, 0, 300);

		var xB = 400 + map(0, -1, 30, 0, 400);
		var yB = 300;
		
		var xC = 400 + map(1, -1, 30, 0, 400);
		var yC = yB;

		var xD = xA;
		var yD = 300 + map(1, -1, 30, 0, 300);

		fill(70, map(0, 0, 60, 20, 100), 100);
		for (let i = 0; i < sec; ++i) {
			if (i == 0) {
				triangle(400, 300, xA, yA, xB, yB);
			} else {
				fillColor = color(70, map(i, 0, 60, 20, 100), 100);
				//fillColor.setAlpha(map(i, 0, 60, 0, 100));
				fill(fillColor);
				quad(xA, yA, xB, yB, xC, yC, xD, yD);
				yA = yD;
				xB = xC;

				xC = 400 + map(i+1, -1, 30, 0, 400);
				yD =  300 + map(i+1, -1, 30, 0, 300);
			}
		}
	} else {
		var xA = 400;
		var yA = 300 + map(0, -1, 30, 0, 300);

		var xB = 400 + map(0, -1, 30, 0, 400);
		var yB = 300;
		
		var xC = 400 + map(1, -1, 30, 0, 400);
		var yC = yB;

		var xD = xA;
		var yD = 300 + map(1, -1, 30, 0, 300);

		fill(70, map(0, 0, 60, 20, 100), 100);
		for (let i = 0; i < 31; ++i) {
			if (i == 0) {
				triangle(400, 300, xA, yA, xB, yB);
			} else {
				fillColor = color(70, map(i, 0, 60, 20, 100), 100);
				fill(fillColor);
				quad(xA, yA, xB, yB, xC, yC, xD, yD);
				yA = yD;
				xB = xC;

				xC = 400 + map(i+1, -1, 30, 0, 400);
				yD =  300 + map(i+1, -1, 30, 0, 300);
			}
		}

		xC = xB;
		yC = 300 + map(31, 30, 58, 0, 300);

		xD = 400 + map(31, 30, 58, 0, 400);
		yD = yA;

		for (let i = 31; i < sec; ++i) {
			fillColor = color(70, map(i, 0, 59, 20, 100), 100);
			fill(fillColor);
			quad(xA, yA, xB, yB, xC, yC, xD, yD);
			xA = xD;
			yB = yC;

			yC = 300 + map(i+1, 30, 58, 0, 300);
			xD =  400 + map(i+1, 30, 58, 0, 400);
		}
	}

	

	fill(70, map(0, 0, 60, 20, 100), 100);
	for (let i = 0; i < sec; ++i) {
		fillColor = color(70, map(i, 0, 60, 20, 100), 100);
		//fillColor.setAlpha(map(i, 0, 60, 0, 100));
		fill(fillColor);
		line(
			width, map(i, 0, 60, 0, 300),
			max(400, width - map(i, 0, 60, 0, 300)), 
		);
	}*/


	/* IDEA 2:
	colorMode(RGB);
	background(225);
	angleMode(DEGREES);

	arc(400, 300, 400, 400, 0, 60, OPEN);

	var len = 15
	var xStart = 20;
	var xEnd = xStart + len;

	var yStart = 20;
	var yEnd = 20;

	translate(400, 300);
	
	colorMode(HSB, 100);

	if (minute() % 2 == 0) {
		for (let i = 0; i < second(); ++i) {
			stroke(70, 90-i, 100);
			line(xStart, yStart, xEnd, yEnd);

			//xStart = xEnd;
			//yStart = yEnd;
			//len = len - increment/(i+1);
			//yEnd = yStart + increment/(i+1);
			//xEnd = xStart + len;
			xStart += 1;
			xEnd += 1;
			yEnd += 1;
			rotate(360*2/60);
			translate(0.06*i, 0.06*i);
		}
	} else {
		for (let i = 60; i > second(); --i) {
			stroke(70, 90-i, 100);
			line(xStart, yStart, xEnd, yEnd);

			xStart += 1;
			xEnd += 1;
			yEnd += 1;
			rotate(360*2/60);
			translate(0.06*(60-i), 0.06*(60-i));
		}
	}*/


	/* IDEA 1:
	var hourRectHeight = 15;
	var rectWidth = 60;

	var minSecRectHeight = 6;

	var hourPad  = 5;
	var minSecPad = 2;
	var yBottom = 575;
	var yTop = yBottom - 60*(minSecPad + minSecRectHeight) - 10;

	var hourLeft = 40;
	var hourRight = hourLeft + rectWidth + hourPad*2;

	var minLeft = 200;
	var minRight = minLeft + rectWidth + minSecPad*2;

	// x1, y1, x2, y2
	strokeWeight(2),
	stroke(126);

	line(hourLeft, yBottom, hourRight, yBottom);
	line(hourLeft, yBottom, hourLeft, yTop);
	line(hourRight, yBottom, hourRight, yTop);

	line(minLeft, yBottom, minRight, yBottom);
	line(minLeft, yBottom, minLeft, yTop);
	line(minRight, yBottom, minRight, yTop);

	strokeWeight(.5);

	for (let i = 0; i < 24; ++i) {
		rect(
			hourLeft + hourPad,
			(yBottom - hourRectHeight - hourPad) - i*(hourRectHeight + hourPad),
			rectWidth,
			hourRectHeight
		);
	}

	for (let i = 0; i < 60; ++i) {
		rect(
			minLeft + minSecPad,
			(yBottom - minSecRectHeight - minSecPad) - i*(minSecRectHeight + minSecPad),
			rectWidth,
			minSecRectHeight
		);
	}*/
}
