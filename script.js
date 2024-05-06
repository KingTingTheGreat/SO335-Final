const dim = (i) => {
	return (numCircles - i) * 3;
};
const opacity = (i) => {
	let op = i * (1 / numCircles);
	return op.toFixed(2);
};
// add circles to div id="white" with increasing size and decreasing opacity
var white = document.getElementById("white");
const numCircles = 100;
for (i = 0; i < numCircles; i++) {
	var circle = document.createElement("div");
	circle.style.width = dim(i) + "px";
	circle.style.height = dim(i) + "px";
	circle.style.borderRadius = "50%";
	circle.style.backgroundColor = "rgb(255, 255, 255)";
	circle.style.opacity = opacity(i);
	circle.style.position = "absolute";
	circle.style.top = "50%";
	circle.style.left = "50%";
	circle.style.transform = "translate(-50%, -50%)";
	white.appendChild(circle);
}
