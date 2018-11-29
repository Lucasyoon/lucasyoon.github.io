var canvas;
var ctx;
var unit = 25;
var positionX=0;
// 1. New variable for animation
var requestId;

const SPEED = 10;

// 2. Position of the animation


window.onload = init; // When the window loads, run the init function

function init() {
    canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");


    // 3. Run the startAnimation function
	startAnimation();
}

// 4. Create startAnimation function
function startAnimation() {

	// 5. Start the animation using animationLoop function
	requestId = requestAnimationFrame(animationLoop);
}
// 6. Create startAnimation function
function animationLoop(timeStamp) {

	// 7. Clears everything in canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    changePositionX();
    moveBlock();


	// 9. Move image

	// 10. Call this function again (Repeat from step 6)
	requestId = requestAnimationFrame(animationLoop);
}
function changePositionX() {
    positionX += SPEED; 
}

function moveBlock() {
    ctx.fillRect(positionX,0,positionX,positionX);
}
