// add circles to div id="white" with increasing size and decreasing opacity
var white = document.getElementById("white");
const numCircles = 50;
for (i = 0; i < numCircles; i++) {
	var circle = document.createElement("div");
	circle.style.width = 2 + i * 40 + "px";
	circle.style.height = 2 + i * 40 + "px";
	circle.style.opacity = 1 - i * 4 * (1 / numCircles);
	circle.style.borderRadius = "50%";
	circle.style.backgroundColor = "rgba(255, 255, 255)";
	circle.style.position = "absolute";
	circle.style.top = "50%";
	circle.style.left = "50%";
	circle.style.transform = "translate(-50%, -50%)";
	white.appendChild(circle);
}
// print number of elements in div id="white"
console.log(white.children.length);
