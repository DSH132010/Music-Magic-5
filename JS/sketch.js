song = "";
song1 = "";
scoreRightWrist = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
	song = loadSound('../Relaxing Music 3.mp3');
	song1 = loadSound("../relaxing music 2.mp3");
}

function setup() {
	canvas = createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized !! 🥘🍜🍢🥘🥣');
}

function gotPoses(results) {
	if (results.length > 0) {
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
		scoreRightWrist = results[0].pose.keypoints[10].score;
	}
}

function Play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");

	circle(rightWristX, rightWristY, 20);
	document.getElementById("song").innerText = `Song: Relaxing Music 1`

    Play()

}
