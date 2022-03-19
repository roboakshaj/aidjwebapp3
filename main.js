music1 = "";
music2 = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
song1_status = "";
song2_status = "";
scoreleftwrist = 0;
scorerightwrist = 0;

function preload() {
  music1=loadSound("music.mp3");
  music2=loadSound("music2.mp3")
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("posenet is initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}
function draw() {
image(video, 0, 0, 600, 500);
}
