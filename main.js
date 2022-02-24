song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(425, 230);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload()
{
    song_1 = loadSound("Happy.mp3");
    song_2 = loadSound("Pitbull.mp3");
}

function modelLoaded()
{}

function gotPoses()
{
    if(results.length > 0)
    {
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function draw()
{
    image(video, 425, 230, 400, 400);
}