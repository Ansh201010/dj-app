song = "";
song = "";
song1Status = "";
song2Status = "";

function preload(){
    song = loadSound("Yalgaar-CarryMIinati.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    song = loadSound("game on.mp3.mp3");
}

function setup(){
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Instalized');
}

function play(){
    sound.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftwrist.x;
    leftWristY = results[0].pose.leftwrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    console.log(results);
    rightWristX = results[0].pose.rightwrist.x;
    rightWristY = results[0].pose.rightwrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}
}